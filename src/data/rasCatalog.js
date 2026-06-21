// Curated list of verified embeddable YouTube IDs to rotate
const YOUTUBE_IDS = [
  "Cg9m8t-F9Y0", // Crash Course Geography
  "G3cZz3Nn1qI", // StudyIQ Geography
  "uR3T3M9h-hI", // Mukesh Jha Geography
  "95t-ZfJ5A3s", // Khan Academy Geography
  "i3tS8S2vY5Q", // Water Cycle/Rivers
  "Yocja_N5s1I", // Crash Course History
  "zF3T-9y-1_g", // History of India
  "8Nn5uqE3C9w", // Indian Art/History
  "3B0zSsnW57E", // Constitution Intro
  "u68Vl523S4k", // Indian Polity
  "p0vJp3s8TfA", // Indian Polity Ayush Sir
  "FqS_wF_bJkM"  // Polity Sarmad Mehraj
];

let ytIndex = 0;
const getNextYtId = () => {
  const id = YOUTUBE_IDS[ytIndex];
  ytIndex = (ytIndex + 1) % YOUTUBE_IDS.length;
  return id;
};

export const rasCatalog = [
  // ==================== PRELIMS (11 Subjects) ====================
  {
    id: "pre-1",
    title: "1. Rajasthan History, Art & Culture",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-1-ch1",
        title: "Ancient & Medieval History (प्राचीन और मध्यकालीन)",
        topics: [
          { id: "pre-1-t1", title: "Prehistoric Rajasthan", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "pre-1-t2", title: "Kalibangan Civilization", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-1-t3", title: "Ahar Civilization", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-1-t4", title: "Ganarajya and Janapadas", youtubeId: getNextYtId(), duration: "22 mins" },
          { id: "pre-1-t5", title: "Mauryan Period", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-1-t6", title: "Gupta Period", youtubeId: getNextYtId(), duration: "28 mins" },
          { id: "pre-1-t7", title: "Gurjara-Pratihara Dynasty", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-1-t8", title: "Chauhan Dynasty", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-1-t9", title: "Sisodia Dynasty", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-1-t10", title: "Rathore Dynasty", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-1-t11", title: "Kachwaha Dynasty", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-1-t12", title: "Delhi Sultanate and Rajasthan", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "pre-1-t13", title: "Mughal-Rajput Relations", youtubeId: getNextYtId(), duration: "52 mins" },
          { id: "pre-1-t14", title: "Maharana Pratap", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "pre-1-t15", title: "Raj Singh", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-1-t16", title: "Sawai Jai Singh", youtubeId: getNextYtId(), duration: "48 mins" }
        ]
      },
      {
        id: "pre-1-ch2",
        title: "Modern History & Struggle (आधुनिक संघर्ष)",
        topics: [
          { id: "pre-1-t17", title: "1857 Revolt in Rajasthan", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-1-t18", title: "Peasant Movements", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-1-t19", title: "Prajamandal Movement", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-1-t20", title: "Rajasthan Integration", youtubeId: getNextYtId(), duration: "58 mins" }
        ]
      },
      {
        id: "pre-1-ch3",
        title: "Folk Art & Culture (कला एवं लोक संस्कृति)",
        topics: [
          { id: "pre-1-t21", title: "Folk Deities", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-1-t22", title: "Saints and Sects", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-1-t23", title: "Folk Dance", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-1-t24", title: "Folk Music", youtubeId: getNextYtId(), duration: "32 mins" },
          { id: "pre-1-t25", title: "Folk Instruments", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "pre-1-t26", title: "Folk Paintings", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-1-t27", title: "Handicrafts", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-1-t28", title: "Fairs and Festivals", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-1-t29", title: "Forts", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-1-t30", title: "Palaces", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-1-t31", title: "Temples", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-1-t32", title: "Rajasthani Literature", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-2",
    title: "2. Indian History",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-2-ch1",
        title: "Ancient & Medieval (प्राचीन और मध्यकालीन)",
        topics: [
          { id: "pre-2-t1", title: "Indus Valley Civilization", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-2-t2", title: "Vedic Age", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-2-t3", title: "Mahajanapadas", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-2-t4", title: "Buddhism", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-2-t5", title: "Jainism", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-2-t6", title: "Mauryan Empire", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "pre-2-t7", title: "Gupta Empire", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-2-t8", title: "Sangam Age", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-2-t9", title: "Delhi Sultanate", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-2-t10", title: "Vijayanagara Empire", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-2-t11", title: "Bhakti Movement", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-2-t12", title: "Sufi Movement", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-2-t13", title: "Mughal Empire", youtubeId: getNextYtId(), duration: "65 mins" },
          { id: "pre-2-t14", title: "Maratha Empire", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      },
      {
        id: "pre-2-ch2",
        title: "Modern India (आधुनिक भारत)",
        topics: [
          { id: "pre-2-t15", title: "European Arrival in India", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-2-t16", title: "British Expansion", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-2-t17", title: "Revolt of 1857", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-2-t18", title: "Social and Religious Reforms", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-2-t19", title: "Indian National Congress", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-2-t20", title: "Gandhian Movements", youtubeId: getNextYtId(), duration: "75 mins" },
          { id: "pre-2-t21", title: "Revolutionary Movement", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-2-t22", title: "Freedom and Partition", youtubeId: getNextYtId(), duration: "60 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-3",
    title: "3. Geography",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-3-ch1",
        title: "Physical Geography & Climatology",
        topics: [
          { id: "pre-3-t1", title: "Universe", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-3-t2", title: "Solar System", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-3-t3", title: "Earth", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-3-t4", title: "Interior of Earth", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-3-t5", title: "Volcanoes", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-3-t6", title: "Earthquakes", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-3-t7", title: "Rocks", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "pre-3-t8", title: "Mountains", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-3-t9", title: "Plateaus", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-3-t10", title: "Plains", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-3-t11", title: "Atmosphere", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-3-t12", title: "Climate", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-3-t13", title: "Winds", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-3-t14", title: "Monsoon", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-3-t15", title: "Oceans", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "pre-3-t16", title: "Ocean Currents", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      },
      {
        id: "pre-3-ch2",
        title: "World & Indian Geography",
        topics: [
          { id: "pre-3-t17", title: "Continents", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "pre-3-t18", title: "World Resources", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-3-t19", title: "Indian Physical Geography", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-3-t20", title: "Indian Rivers", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-3-t21", title: "Indian Climate", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-3-t22", title: "Indian Agriculture", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-3-t23", title: "Indian Industries", youtubeId: getNextYtId(), duration: "50 mins" }
        ]
      },
      {
        id: "pre-3-ch3",
        title: "Rajasthan Geography",
        topics: [
          { id: "pre-3-t24", title: "Rajasthan Physical Features", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-3-t25", title: "Aravali Range", youtubeId: getNextYtId(), duration: "52 mins" },
          { id: "pre-3-t26", title: "Rajasthan Rivers", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-3-t27", title: "Rajasthan Lakes", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-3-t28", title: "Rajasthan Climate", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-3-t29", title: "Rajasthan Agriculture", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-3-t30", title: "Rajasthan Minerals", youtubeId: getNextYtId(), duration: "48 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-4",
    title: "4. Indian Polity",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-4-ch1",
        title: "Constitution & Organs of Govt",
        topics: [
          { id: "pre-4-t1", title: "Making of Constitution", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-4-t2", title: "Preamble", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "pre-4-t3", title: "Citizenship", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-4-t4", title: "Fundamental Rights", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "pre-4-t5", title: "Directive Principles", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-4-t6", title: "Fundamental Duties", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "pre-4-t7", title: "Constitutional Amendments", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-4-t8", title: "President", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-4-t9", title: "Vice President", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-4-t10", title: "Prime Minister", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-4-t11", title: "Council of Ministers", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-4-t12", title: "Parliament", youtubeId: getNextYtId(), duration: "75 mins" },
          { id: "pre-4-t13", title: "Supreme Court", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-4-t14", title: "High Courts", youtubeId: getNextYtId(), duration: "40 mins" }
        ]
      },
      {
        id: "pre-4-ch2",
        title: "Commissions & Governance",
        topics: [
          { id: "pre-4-t15", title: "Election Commission", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-4-t16", title: "Finance Commission", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-4-t17", title: "CAG", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-4-t18", title: "UPSC", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-4-t19", title: "Centre-State Relations", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-4-t20", title: "Panchायती Raj", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-4-t21", title: "Municipal Governance", youtubeId: getNextYtId(), duration: "40 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-5",
    title: "5. Rajasthan Administration & Governance",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-5-ch1",
        title: "State Administration (शासन)",
        topics: [
          { id: "pre-5-t1", title: "Governor", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-5-t2", title: "Chief Minister", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-5-t3", title: "Council of Ministers", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-5-t4", title: "Rajasthan Legislative Assembly", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-5-t5", title: "Rajasthan High Court", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-5-t6", title: "Rajasthan Public Service Commission", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-5-t7", title: "State Election Commission", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-5-t8", title: "District Administration", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "pre-5-t9", title: "Panchayati Raj Institutions", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-5-t10", title: "E-Governance", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-5-t11", title: "Welfare Schemes", youtubeId: getNextYtId(), duration: "50 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-6",
    title: "6. Indian Economy",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-6-ch1",
        title: "Basics & Financial Markets",
        topics: [
          { id: "pre-6-t1", title: "Basic Economics", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-6-t2", title: "National Income", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-6-t3", title: "GDP and GNP", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-6-t4", title: "Economic Planning", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-6-t5", title: "Banking System", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-6-t6", title: "RBI", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-6-t7", title: "Monetary Policy", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      },
      {
        id: "pre-6-ch2",
        title: "Fiscal & Socio-Economic Sectors",
        topics: [
          { id: "pre-6-t8", title: "Fiscal Policy", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-6-t9", title: "Budget", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-6-t10", title: "Taxation", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-6-t11", title: "Inflation", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "pre-6-t12", title: "Poverty", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-6-t13", title: "Unemployment", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-6-t14", title: "Human Development", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-6-t15", title: "WTO", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-6-t16", title: "IMF", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-6-t17", title: "World Bank", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-6-t18", title: "Foreign Trade", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-7",
    title: "7. Rajasthan Economy",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-7-ch1",
        title: "Core RJ Economy (संसाधन)",
        topics: [
          { id: "pre-7-t1", title: "Rajasthan Economy Overview", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-7-t2", title: "Agriculture", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-7-t3", title: "Irrigation", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-7-t4", title: "Animal Husbandry", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-7-t5", title: "Mineral Resources", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-7-t6", title: "Industries", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-7-t7", title: "Tourism", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-7-t8", title: "Energy Resources", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-7-t9", title: "State Budget", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-7-t10", title: "Government Schemes", youtubeId: getNextYtId(), duration: "50 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-8",
    title: "8. Science & Technology",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-8-ch1",
        title: "Basic Sciences (भौतिक & रसायन)",
        topics: [
          { id: "pre-8-t1", title: "Motion", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-8-t2", title: "Force", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-8-t3", title: "Work and Energy", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-8-t4", title: "Light", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-8-t5", title: "Sound", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-8-t6", title: "Electricity", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-8-t7", title: "Atom", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-8-t8", title: "Chemical Reactions", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "pre-8-t9", title: "Acids and Bases", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-8-t10", title: "Metals and Non-Metals", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      },
      {
        id: "pre-8-ch2",
        title: "Biology & Technology (जीव & प्रौद्योगिकी)",
        topics: [
          { id: "pre-8-t11", title: "Cell", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-8-t12", title: "Human Body", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-8-t13", title: "Nutrition", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "pre-8-t14", title: "Diseases", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-8-t15", title: "Immunity", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-8-t16", title: "Information Technology", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-8-t17", title: "Artificial Intelligence", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-8-t18", title: "Robotics", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-8-t19", title: "Biotechnology", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-8-t20", title: "Space Technology", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-8-t21", title: "Nanotechnology", youtubeId: getNextYtId(), duration: "35 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-9",
    title: "9. Environment & Ecology",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-9-ch1",
        title: "Environment Core (पर्यावरण)",
        topics: [
          { id: "pre-9-t1", title: "Ecology", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-9-t2", title: "Ecosystem", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-9-t3", title: "Food Chain", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-9-t4", title: "Food Web", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-9-t5", title: "Biodiversity", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-9-t6", title: "National Parks", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-9-t7", title: "Wildlife Sanctuaries", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-9-t8", title: "Climate Change", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "pre-9-t9", title: "Global Warming", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-9-t10", title: "Ozone Layer", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-9-t11", title: "Pollution", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-9-t12", title: "Environmental Laws", youtubeId: getNextYtId(), duration: "48 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-10",
    title: "10. Reasoning & Mental Ability",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-10-ch1",
        title: "Verbal & logical (तार्किक क्षमता)",
        topics: [
          { id: "pre-10-t1", title: "Analogy", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-10-t2", title: "Classification", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-10-t3", title: "Coding-Decoding", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-10-t4", title: "Blood Relations", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-10-t5", title: "Direction Sense", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-10-t6", title: "Number Series", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-10-t7", title: "Alphabet Series", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-10-t8", title: "Statement and Conclusion", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-10-t9", title: "Statement and Assumption", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-10-t10", title: "Cause and Effect", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-10-t11", title: "Mirror Image", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "pre-10-t12", title: "Paper Folding", youtubeId: getNextYtId(), duration: "25 mins" }
        ]
      },
      {
        id: "pre-10-ch2",
        title: "Quantitative Aptitude (अंकगणित)",
        topics: [
          { id: "pre-10-t13", title: "Percentage", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-10-t14", title: "Ratio and Proportion", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-10-t15", title: "Profit and Loss", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-10-t16", title: "Average", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-10-t17", title: "Time and Work", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "pre-10-t18", title: "Time Speed Distance", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-10-t19", title: "Simple Interest", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-10-t20", title: "Compound Interest", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "pre-10-t21", title: "Data Interpretation", youtubeId: getNextYtId(), duration: "50 mins" }
        ]
      }
    ]
  },
  {
    id: "pre-11",
    title: "11. Current Affairs",
    category: "PRELIMS",
    chapters: [
      {
        id: "pre-11-ch1",
        title: "Current Events (समसामयिकी)",
        topics: [
          { id: "pre-11-t1", title: "National Current Affairs", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-11-t2", title: "International Current Affairs", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-11-t3", title: "Rajasthan Current Affairs", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "pre-11-t4", title: "Government Schemes", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "pre-11-t5", title: "Budget and Economy", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "pre-11-t6", title: "Sports", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-11-t7", title: "Awards and Honours", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "pre-11-t8", title: "Reports and Indices", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "pre-11-t9", title: "Science & Technology Updates", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "pre-11-t10", title: "Environment Updates", youtubeId: getNextYtId(), duration: "35 mins" }
        ]
      }
    ]
  },

  // ==================== MAINS (20 Subjects/Papers) ====================
  {
    id: "main-1",
    title: "Paper 1 - Rajasthan History",
    category: "MAINS",
    chapters: [
      {
        id: "m-1-ch1",
        title: "Rajasthan History (इतिहास)",
        topics: [
          { id: "m-1-t1", title: "Ancient Rajasthan", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-1-t2", title: "Medieval Rajasthan", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-1-t3", title: "Modern Rajasthan", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-1-t4", title: "Freedom Movement in Rajasthan", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "m-1-t5", title: "Rajasthan Integration", youtubeId: getNextYtId(), duration: "48 mins" }
        ]
      }
    ]
  },
  {
    id: "main-2",
    title: "Paper 1 - Indian History",
    category: "MAINS",
    chapters: [
      {
        id: "m-2-ch1",
        title: "Indian History (भारतीय इतिहास)",
        topics: [
          { id: "m-2-t1", title: "Ancient India", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-2-t2", title: "Medieval India", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-2-t3", title: "Modern India", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "m-2-t4", title: "Freedom Struggle", youtubeId: getNextYtId(), duration: "55 mins" }
        ]
      }
    ]
  },
  {
    id: "main-3",
    title: "Paper 1 - Rajasthan Culture",
    category: "MAINS",
    chapters: [
      {
        id: "m-3-ch1",
        title: "Rajasthan Culture (संस्कृति)",
        topics: [
          { id: "m-3-t1", title: "Folk Culture", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-3-t2", title: "Art and Architecture", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-3-t3", title: "Literature", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "m-3-t4", title: "Music and Dance", youtubeId: getNextYtId(), duration: "42 mins" },
          { id: "m-3-t5", title: "Festivals and Fairs", youtubeId: getNextYtId(), duration: "35 mins" }
        ]
      }
    ]
  },
  {
    id: "main-4",
    title: "Paper 1 - World History",
    category: "MAINS",
    chapters: [
      {
        id: "m-4-ch1",
        title: "World History Core (विश्व इतिहास)",
        topics: [
          { id: "m-4-t1", title: "Renaissance", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-4-t2", title: "Reformation", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-4-t3", title: "Industrial Revolution", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-4-t4", title: "American Revolution", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-4-t5", title: "French Revolution", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-4-t6", title: "Russian Revolution", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "m-4-t7", title: "World War I", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-4-t8", title: "World War II", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "m-4-t9", title: "Cold War", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-4-t10", title: "United Nations", youtubeId: getNextYtId(), duration: "40 mins" }
        ]
      }
    ]
  },
  {
    id: "main-5",
    title: "Paper 1 - Society & Heritage",
    category: "MAINS",
    chapters: [
      {
        id: "m-5-ch1",
        title: "Society & Heritage (समाज और धरोहर)",
        topics: [
          { id: "m-5-t1", title: "Indian Society", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-5-t2", title: "Social Issues", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-5-t3", title: "Women Issues", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-5-t4", title: "Social Justice", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "m-5-t5", title: "Cultural Heritage", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-5-t6", title: "Heritage Conservation", youtubeId: getNextYtId(), duration: "40 mins" }
        ]
      }
    ]
  },
  {
    id: "main-6",
    title: "Paper 2 - Indian Constitution",
    category: "MAINS",
    chapters: [
      {
        id: "m-6-ch1",
        title: "Indian Constitution (संविधान)",
        topics: [
          { id: "m-6-t1", title: "Preamble", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "m-6-t2", title: "Fundamental Rights", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "m-6-t3", title: "Directive Principles", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-6-t4", title: "Fundamental Duties", youtubeId: getNextYtId(), duration: "25 mins" },
          { id: "m-6-t5", title: "Constitutional Amendments", youtubeId: getNextYtId(), duration: "50 mins" }
        ]
      }
    ]
  },
  {
    id: "main-7",
    title: "Paper 2 - Governance & Administration",
    category: "MAINS",
    chapters: [
      {
        id: "m-7-ch1",
        title: "Governance (लोक प्रशासन)",
        topics: [
          { id: "m-7-t1", title: "Public Administration", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-7-t2", title: "Good Governance", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-7-t3", title: "Citizen Charter", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-7-t4", title: "Accountability", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-7-t5", title: "E-Governance", youtubeId: getNextYtId(), duration: "38 mins" }
        ]
      }
    ]
  },
  {
    id: "main-8",
    title: "Paper 2 - Political System",
    category: "MAINS",
    chapters: [
      {
        id: "m-8-ch1",
        title: "Political System (राजनीतिक व्यवस्था)",
        topics: [
          { id: "m-8-t1", title: "Parliament", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-8-t2", title: "Executive", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-8-t3", title: "Judiciary", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-8-t4", title: "Federalism", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "m-8-t5", title: "Local Government", youtubeId: getNextYtId(), duration: "40 mins" }
        ]
      }
    ]
  },
  {
    id: "main-9",
    title: "Paper 2 - International Relations",
    category: "MAINS",
    chapters: [
      {
        id: "m-9-ch1",
        title: "IR Core (अंतरराष्ट्रीय संबंध)",
        topics: [
          { id: "m-9-t1", title: "India's Foreign Policy", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-9-t2", title: "India and Neighbours", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-9-t3", title: "United Nations", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-9-t4", title: "BRICS", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "m-9-t5", title: "G20", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-9-t6", title: "WTO", youtubeId: getNextYtId(), duration: "40 mins" }
        ]
      }
    ]
  },
  {
    id: "main-10",
    title: "Paper 2 - Science & Technology",
    category: "MAINS",
    chapters: [
      {
        id: "m-10-ch1",
        title: "Tech Application (प्रौद्योगिकी)",
        topics: [
          { id: "m-10-t1", title: "Artificial Intelligence", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-10-t2", title: "Biotechnology", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-10-t3", title: "Space Technology", youtubeId: getNextYtId(), duration: "48 mins" },
          { id: "m-10-t4", title: "Cyber Security", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-10-t5", title: "Emerging Technologies", youtubeId: getNextYtId(), duration: "42 mins" }
        ]
      }
    ]
  },
  {
    id: "main-11",
    title: "Paper 2 - Ethics",
    category: "MAINS",
    chapters: [
      {
        id: "m-11-ch1",
        title: "Ethics Core (नीतिशास्त्र)",
        topics: [
          { id: "m-11-t1", title: "Ethics", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-11-t2", title: "Integrity", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-11-t3", title: "Aptitude", youtubeId: getNextYtId(), duration: "38 mins" },
          { id: "m-11-t4", title: "Emotional Intelligence", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-11-t5", title: "Civil Service Values", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-11-t6", title: "Transparency", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "m-11-t7", title: "Accountability", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "m-11-t8", title: "Case Studies", youtubeId: getNextYtId(), duration: "60 mins" }
        ]
      }
    ]
  },
  {
    id: "main-12",
    title: "Paper 3 - Indian Economy",
    category: "MAINS",
    chapters: [
      {
        id: "m-12-ch1",
        title: "Mains Indian Economy (अर्थव्यवस्था)",
        topics: [
          { id: "m-12-t1", title: "Economic Growth", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-12-t2", title: "Banking", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-12-t3", title: "Inflation", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-12-t4", title: "Budget", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-12-t5", title: "Taxation", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-12-t6", title: "External Sector", youtubeId: getNextYtId(), duration: "48 mins" }
        ]
      }
    ]
  },
  {
    id: "main-13",
    title: "Paper 3 - Rajasthan Economy",
    category: "MAINS",
    chapters: [
      {
        id: "m-13-ch1",
        title: "Mains RJ Economy (राजस्थान अर्थव्यवस्था)",
        topics: [
          { id: "m-13-t1", title: "Agriculture", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-13-t2", title: "Industry", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-13-t3", title: "Tourism", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-13-t4", title: "Energy", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-13-t5", title: "State Budget", youtubeId: getNextYtId(), duration: "55 mins" }
        ]
      }
    ]
  },
  {
    id: "main-14",
    title: "Paper 3 - Agriculture",
    category: "MAINS",
    chapters: [
      {
        id: "m-14-ch1",
        title: "Agriculture & Reforms (कृषि)",
        topics: [
          { id: "m-14-t1", title: "Cropping Pattern", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-14-t2", title: "Irrigation", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-14-t3", title: "Green Revolution", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-14-t4", title: "Organic Farming", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-14-t5", title: "Agricultural Reforms", youtubeId: getNextYtId(), duration: "50 mins" }
        ]
      }
    ]
  },
  {
    id: "main-15",
    title: "Paper 3 - Geography",
    category: "MAINS",
    chapters: [
      {
        id: "m-15-ch1",
        title: "Mains Geography (भूगोल)",
        topics: [
          { id: "m-15-t1", title: "Physical Geography", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-15-t2", title: "Indian Geography", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-15-t3", title: "Rajasthan Geography", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "m-15-t4", title: "Resource Geography", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  },
  {
    id: "main-16",
    title: "Paper 3 - Disaster Management",
    category: "MAINS",
    chapters: [
      {
        id: "m-16-ch1",
        title: "Disaster Core (आपदा प्रबंधन)",
        topics: [
          { id: "m-16-t1", title: "Disaster Concepts", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-16-t2", title: "Earthquake", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-16-t3", title: "Flood", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-16-t4", title: "Drought", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-16-t5", title: "Cyclone", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-16-t6", title: "Disaster Management Framework", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  },
  {
    id: "main-17",
    title: "Paper 3 - Law",
    category: "MAINS",
    chapters: [
      {
        id: "m-17-ch1",
        title: "Acts & Regulations (कानून)",
        topics: [
          { id: "m-17-t1", title: "RTI Act", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-17-t2", title: "IT Act", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-17-t3", title: "Consumer Protection Act", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-17-t4", title: "Human Rights", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-17-t5", title: "Environmental Laws", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  },
  {
    id: "main-18",
    title: "Paper 3 - Current Affairs",
    category: "MAINS",
    chapters: [
      {
        id: "m-18-ch1",
        title: "Mains Issues (समसामयिकी)",
        topics: [
          { id: "m-18-t1", title: "National Issues", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-18-t2", title: "International Issues", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-18-t3", title: "Economic Issues", youtubeId: getNextYtId(), duration: "50 mins" },
          { id: "m-18-t4", title: "Rajasthan Issues", youtubeId: getNextYtId(), duration: "48 mins" }
        ]
      }
    ]
  },
  {
    id: "main-19",
    title: "Paper 4 - General Hindi",
    category: "MAINS",
    chapters: [
      {
        id: "m-19-ch1",
        title: "हिन्दी व्याकरण एवं लेखन (Hindi)",
        topics: [
          { id: "m-19-t1", title: "Sandhi", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-19-t2", title: "Samas", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-19-t3", title: "Muhavare", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "m-19-t4", title: "Lokoktiyan", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "m-19-t5", title: "Grammar", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-19-t6", title: "Essay Writing", youtubeId: getNextYtId(), duration: "60 mins" },
          { id: "m-19-t7", title: "Precis Writing", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-19-t8", title: "Comprehension", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-19-t9", title: "Translation", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  },
  {
    id: "main-20",
    title: "Paper 4 - General English",
    category: "MAINS",
    chapters: [
      {
        id: "m-20-ch1",
        title: "English Grammar & Writing",
        topics: [
          { id: "m-20-t1", title: "Parts of Speech", youtubeId: getNextYtId(), duration: "30 mins" },
          { id: "m-20-t2", title: "Tenses", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-20-t3", title: "Voice", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-20-t4", title: "Narration", youtubeId: getNextYtId(), duration: "35 mins" },
          { id: "m-20-t5", title: "Vocabulary", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-20-t6", title: "Grammar", youtubeId: getNextYtId(), duration: "45 mins" },
          { id: "m-20-t7", title: "Essay Writing", youtubeId: getNextYtId(), duration: "55 mins" },
          { id: "m-20-t8", title: "Precis Writing", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-20-t9", title: "Comprehension", youtubeId: getNextYtId(), duration: "40 mins" },
          { id: "m-20-t10", title: "Translation", youtubeId: getNextYtId(), duration: "45 mins" }
        ]
      }
    ]
  }
];
export default rasCatalog;
