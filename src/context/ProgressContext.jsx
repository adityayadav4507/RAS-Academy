import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const { currentUser, isSandbox } = useAuth();
  const [completedTopics, setCompletedTopics] = useState([]);
  const [topicNotes, setTopicNotes] = useState({});

  // Sync state with Database or LocalStorage on user change
  useEffect(() => {
    if (!currentUser) {
      setCompletedTopics([]);
      setTopicNotes({});
      return;
    }

    if (!isSandbox && db) {
      // Firebase Sync
      const userRef = doc(db, "users", currentUser.uid);
      const unsubscribe = onSnapshot(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setCompletedTopics(data.completedTopics || []);
          setTopicNotes(data.topicNotes || {});
        }
      });
      return () => unsubscribe();
    } else {
      // Local Storage Sync (sandbox mode)
      const localCompleted = localStorage.getItem(`completed_${currentUser.uid}`);
      const localNotes = localStorage.getItem(`notes_${currentUser.uid}`);
      
      setCompletedTopics(localCompleted ? JSON.parse(localCompleted) : []);
      setTopicNotes(localNotes ? JSON.parse(localNotes) : {});
    }
  }, [currentUser, isSandbox]);

  // Toggle topic completion state
  const toggleTopicCompletion = async (topicId) => {
    if (!currentUser) return;

    let updatedCompleted;
    if (completedTopics.includes(topicId)) {
      updatedCompleted = completedTopics.filter(id => id !== topicId);
    } else {
      updatedCompleted = [...completedTopics, topicId];
    }

    setCompletedTopics(updatedCompleted);

    if (!isSandbox && db) {
      try {
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, { completedTopics: updatedCompleted });
      } catch (e) {
        console.error("Failed to update topic completion in Firestore:", e);
      }
    } else {
      localStorage.setItem(`completed_${currentUser.uid}`, JSON.stringify(updatedCompleted));
    }
  };

  // Save/Update note for a specific topic
  const saveTopicNote = async (topicId, noteContent) => {
    if (!currentUser) return;

    const updatedNotes = {
      ...topicNotes,
      [topicId]: noteContent
    };

    setTopicNotes(updatedNotes);

    if (!isSandbox && db) {
      try {
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, { topicNotes: updatedNotes });
      } catch (e) {
        console.error("Failed to update topic note in Firestore:", e);
      }
    } else {
      localStorage.setItem(`notes_${currentUser.uid}`, JSON.stringify(updatedNotes));
    }
  };

  const value = {
    completedTopics,
    topicNotes,
    toggleTopicCompletion,
    saveTopicNote
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
