import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { rasCatalog } from '../data/rasCatalog';
import { RazorpayButton } from '../components/RazorpayButton';
import { Play, Lock, CheckCircle, Circle, Save, Clock, Award, BookOpen, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const { currentUser, subscriptionStatus } = useAuth();
  const { completedTopics, topicNotes, toggleTopicCompletion, saveTopicNote } = useProgress();
  const navigate = useNavigate();

  // Selected state
  const [activeSubject, setActiveSubject] = useState(rasCatalog[0]);
  const [activeTopic, setActiveTopic] = useState(rasCatalog[0].chapters[0].topics[0]);
  const [noteText, setNoteText] = useState("");
  const [saveIndicator, setSaveIndicator] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  // Load note when active topic changes
  useEffect(() => {
    if (activeTopic) {
      setNoteText(topicNotes[activeTopic.id] || "");
    }
  }, [activeTopic, topicNotes]);

  // Calculate overall metrics
  let totalTopicsCount = 0;
  let completedTopicsCount = 0;

  rasCatalog.forEach(subj => {
    subj.chapters.forEach(chap => {
      chap.topics.forEach(top => {
        totalTopicsCount++;
        if (completedTopics.includes(top.id)) {
          completedTopicsCount++;
        }
      });
    });
  });

  const completionPercentage = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  // Check if subject index qualifies for Free Trial
  // Pattern: Unlocked if index % 6 === 0
  const isSubjectLocked = (subjectId) => {
    if (subscriptionStatus === 'premium') return false;
    const index = rasCatalog.findIndex(s => s.id === subjectId);
    return (index % 6 !== 0); // locked if NOT index 0, 6, 12, etc.
  };

  const handleSaveNote = async () => {
    if (!activeTopic) return;
    await saveTopicNote(activeTopic.id, noteText);
    setSaveIndicator(true);
    setTimeout(() => setSaveIndicator(false), 2000);
  };

  if (!currentUser) return null;

  const currentSubjectLocked = isSubjectLocked(activeSubject.id);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      minHeight: 'calc(100vh - 73px)',
      background: 'hsl(var(--bg-main))'
    }}>
      {/* Sidebar - Clean Subject List (NO Chapters/Topics in sidebar) */}
      <aside className="glass" style={{
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '1.5rem 1.25rem',
        overflowY: 'auto',
        height: 'calc(100vh - 73px)',
        position: 'sticky',
        top: '73px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1rem', color: 'white', marginBottom: '0.25rem' }}>
            RAS पाठ्यक्रम / Syllabus
          </h3>
          <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', lineHeight: 1.4 }}>
            विषय चुनकर पढ़ना शुरू करें। / Choose a subject to study.
          </p>
        </div>

        {/* Subjects Tree (Categorized by PRELIMS / MAINS) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* PRELIMS Category */}
          <div>
            <h4 style={{ fontSize: '0.75rem', color: '#3b82f6', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              RAS Prelims
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {rasCatalog.filter(s => s.category === "PRELIMS").map(subject => {
                const isSelected = activeSubject.id === subject.id;
                const isLocked = isSubjectLocked(subject.id);
                return (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setActiveSubject(subject);
                      if (subject.chapters.length > 0 && subject.chapters[0].topics.length > 0) {
                        setActiveTopic(subject.chapters[0].topics[0]);
                      }
                    }}
                    style={{
                      background: isSelected ? 'rgba(37, 99, 235, 0.12)' : 'rgba(255,255,255,0.01)',
                      border: isSelected ? '1px solid hsl(var(--primary))' : '1px solid rgba(255, 255, 255, 0.04)',
                      color: isSelected ? 'white' : 'hsl(var(--text-muted))',
                      padding: '0.65rem 0.75rem',
                      borderRadius: '8px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '210px' }}>
                      {subject.title}
                    </span>
                    {isLocked ? (
                      <span className="badge-premium" style={{ fontSize: '0.58rem', padding: '0.1rem 0.35rem' }}>LOCK</span>
                    ) : (
                      <span className="badge-free" style={{ fontSize: '0.58rem', padding: '0.1rem 0.35rem' }}>FREE</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAINS Category */}
          <div>
            <h4 style={{ fontSize: '0.75rem', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800, letterSpacing: '0.05em' }}>
              RAS Mains
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {rasCatalog.filter(s => s.category === "MAINS").map(subject => {
                const isSelected = activeSubject.id === subject.id;
                const isLocked = isSubjectLocked(subject.id);
                return (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setActiveSubject(subject);
                      if (subject.chapters.length > 0 && subject.chapters[0].topics.length > 0) {
                        setActiveTopic(subject.chapters[0].topics[0]);
                      }
                    }}
                    style={{
                      background: isSelected ? 'rgba(37, 99, 235, 0.12)' : 'rgba(255,255,255,0.01)',
                      border: isSelected ? '1px solid hsl(var(--primary))' : '1px solid rgba(255, 255, 255, 0.04)',
                      color: isSelected ? 'white' : 'hsl(var(--text-muted))',
                      padding: '0.65rem 0.75rem',
                      borderRadius: '8px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '210px' }}>
                      {subject.title}
                    </span>
                    {isLocked ? (
                      <span className="badge-premium" style={{ fontSize: '0.58rem', padding: '0.1rem 0.35rem' }}>LOCK</span>
                    ) : (
                      <span className="badge-free" style={{ fontSize: '0.58rem', padding: '0.1rem 0.35rem' }}>FREE</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </aside>

      {/* Main Workspace */}
      <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto' }}>
        
        {/* Progress Tracker Card */}
        <section className="glass" style={{ padding: '1.2rem 1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white' }}>तैयारी का स्तर / Syllabus Completed</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'hsl(var(--accent))' }}>
                {completionPercentage}% ({completedTopicsCount}/{totalTopicsCount} टॉपिक्स)
              </span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(90deg, #2563eb 0%, #d97706 100%)', width: `${completionPercentage}%`, height: '100%', borderRadius: '3px', transition: 'width 0.4s ease' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(217, 119, 6, 0.08)', padding: '0.5rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(217, 119, 6, 0.15)' }}>
            <Award className="w-4.5 h-4.5 text-amber-500" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>RAS Core Prep</span>
          </div>
        </section>

        {/* Video Player & Notes Area */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', width: '100%' }}>
          
          {currentSubjectLocked ? (
            /* Paywall Card when Locked */
            <div className="glass" style={{
              borderRadius: '16px',
              aspectRatio: '16/9',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              textAlign: 'center',
              border: '1px solid rgba(245,158,11,0.25)',
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 80%)'
            }}>
              <div style={{
                background: 'rgba(217, 119, 6, 0.1)',
                padding: '1rem',
                borderRadius: '50%',
                marginBottom: '1.5rem'
              }}>
                <Lock className="w-8 h-8 text-amber-500" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>यह विषय प्रिमियम है / Premium Subject Locked</h3>
              <p style={{ color: 'hsl(var(--text-muted))', maxWidth: '500px', fontSize: '0.85rem', marginBottom: '2rem', lineHeight: 1.5 }}>
                यह भाग मुफ़्त ट्रायल में उपलब्ध नहीं है। सभी विषय अनलॉक करने, स्टडी नोट्स सेव करने और प्रोग्रेस ट्रैक करने के लिए मेंबरशिप लें।
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <RazorpayButton plan="monthly" amount={9} onSuccess={() => window.location.reload()} />
                <RazorpayButton plan="lifetime" amount={499} onSuccess={() => window.location.reload()} />
              </div>
            </div>
          ) : (
            /* Embed YouTube Video (Embed friendly) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="glass" style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', border: '1px solid rgba(255,255,255,0.08)' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeTopic.youtubeId}`}
                  title={activeTopic.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none' }}
                ></iframe>
              </div>

              <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.25rem' }}>{activeTopic.title}</h2>
                  <span style={{ fontSize: '0.78rem', color: 'hsl(var(--text-muted))', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock className="w-3.5 h-3.5" />
                    {activeTopic.duration} | विषय: {activeSubject.title}
                  </span>
                </div>

                <button
                  onClick={() => toggleTopicCompletion(activeTopic.id)}
                  style={{
                    background: completedTopics.includes(activeTopic.id) ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.03)',
                    border: completedTopics.includes(activeTopic.id) ? '1px solid hsl(var(--success))' : '1px solid rgba(255,255,255,0.08)',
                    color: completedTopics.includes(activeTopic.id) ? 'hsl(var(--success))' : 'white',
                    padding: '0.65rem 1.1rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s'
                  }}
                >
                  {completedTopics.includes(activeTopic.id) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>सफलतापूर्वक पूर्ण / Completed</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4" />
                      <span>पढ़ लिया (Mark Complete)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Study Notes Panel directly below player */}
          {!currentSubjectLocked && (
            <div className="glass" style={{
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div className="flex-between">
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: 'white', marginBottom: '0.15rem' }}>अध्ययन नोट्स / Study Notes</h3>
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>इस टॉपिक के मुख्य बिंदु यहाँ लिखें। / Write formulas, notes for this topic.</p>
                </div>
                {saveIndicator && (
                  <span style={{ fontSize: '0.75rem', color: 'hsl(var(--success))', fontWeight: 600 }}>नोट्स सुरक्षित किए गए! / Saved!</span>
                )}
              </div>

              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="यहाँ अपने नोट्स लिखें... ये स्वतः सुरक्षित रहेंगे।"
                style={{
                  width: '100%',
                  height: '140px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  padding: '0.85rem',
                  color: 'white',
                  fontFamily: 'inherit',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  resize: 'vertical',
                  outline: 'none'
                }}
              />

              <button
                onClick={handleSaveNote}
                style={{
                  alignSelf: 'flex-end',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                }}
              >
                <Save className="w-4 h-4" />
                <span>सुरक्षित करें (Save Note)</span>
              </button>
            </div>
          )}

        </section>

        {/* Chapters & Video Lectures display under the player in the main area */}
        <section style={{ maxWidth: '1000px', width: '100%', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span>विषय सूचकांक और लेक्चर्स / Subject Index & Lectures</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {activeSubject.chapters.map(chapter => (
              <div key={chapter.id} className="glass" style={{ borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '1.05rem', color: 'white', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{chapter.title}</span>
                  <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 500 }}>
                    {chapter.topics.length} Lectures
                  </span>
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1rem'
                }}>
                  {chapter.topics.map(topic => {
                    const isSelected = activeTopic.id === topic.id;
                    const isCompleted = completedTopics.includes(topic.id);
                    const isLocked = currentSubjectLocked;

                    return (
                      <div
                        key={topic.id}
                        onClick={() => {
                          if (!isLocked) {
                            setActiveTopic(topic);
                          }
                        }}
                        style={{
                          background: isSelected ? 'rgba(37,99,235,0.1)' : 'rgba(255,255,255,0.01)',
                          border: isSelected 
                            ? '1px solid hsl(var(--primary))' 
                            : '1px solid rgba(255, 255, 255, 0.04)',
                          borderRadius: '12px',
                          padding: '1rem',
                          cursor: isLocked ? 'not-allowed' : 'pointer',
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem',
                          transition: 'all 0.2s',
                          opacity: isLocked ? 0.7 : 1
                        }}
                        className={!isLocked ? "glass-interactive" : ""}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isSelected ? 'white' : 'hsl(var(--text-muted))', lineHeight: 1.4 }}>
                            {topic.title}
                          </span>
                          
                          {isLocked ? (
                            <Lock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          ) : isCompleted ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                          <span style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Clock className="w-3.5 h-3.5" />
                            {topic.duration}
                          </span>

                          {!isLocked && (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              fontSize: '0.7rem',
                              color: isSelected ? '#3b82f6' : 'hsl(var(--text-muted))',
                              fontWeight: 700
                            }}>
                              <Play className="w-3 h-3 fill-current" />
                              <span>{isSelected ? "Now Playing" : "Play"}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};
export default Dashboard;
