export const portfolioData = {
  profile: {
    name: "Hema Pavan Manikanta",
    role: "Full Stack Developer",
    gradYear: "2027",
    university: "Manav Rachna University",
    location: "Rajahmundry, Andhra Pradesh",
    email: "hemapavanmanikanta25@gmail.com",
    linkedin: "https://www.linkedin.com/in/hema-pavan-manikanta-8a4865287",
    github: "https://github.com/HemaPavanManikanta",
    phone: "+91 86888 64959",
    summary: "3rd-year CSE student building scalable web & mobile applications. Passionate about clean architecture, smooth UX, and turning ideas into production-ready software."
  },
  skills: [
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "React Native", level: 88, color: "var(--accent)" },
        { name: "React.js", level: 80, color: "var(--accent)" },
        { name: "JavaScript", level: 82, color: "var(--accent)" },
        { name: "HTML & CSS", level: 90, color: "var(--accent)" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "Django (Python)", level: 85, color: "var(--accent-2)" },
        { name: "Java", level: 75, color: "var(--accent-2)" },
        { name: "SQL / DBMS", level: 78, color: "var(--accent-2)" },
        { name: "Redis", level: 70, color: "var(--accent-2)" },
        { name: "REST APIs", level: 80, color: "var(--accent-2)" }
      ]
    },
    {
      category: "Tools & Concepts",
      icon: "🔧",
      items: [
        { name: "Git & GitHub", level: 85, color: "var(--accent-3)" },
        { name: "DSA & OOPs", level: 78, color: "var(--accent-3)" },
        { name: "AWS (Basics)", level: 55, color: "var(--accent-3)" },
        { name: "MongoDB", level: 65, color: "var(--accent-3)" }
      ]
    }
  ],
  projects: [
    {
      id: "habit",
      title: "Habit Tracker",
      subtitle: "React Native Mobile Application",
      description: "Mobile app for building and monitoring daily routines with interactive day-wise tracking, month/week views, and offline persistence.",
      status: "Completed",
      icon: "📱",
      theme: "thumb-habit",
      tags: ["React Native", "AsyncStorage", "Expo"],
      overview: "A cross-platform mobile app designed to help users build and maintain positive daily routines through interactive tracking and visual progress.",
      features: [
        "Day-wise habit completion tracking with interactive UI",
        "Dynamic month and week-based calendar views",
        "AsyncStorage for local data persistence and offline usage",
        "Real-time UI state updates with React hooks",
        "Clean and minimal mobile-first design"
      ],
      stack: "React Native, JavaScript, AsyncStorage, Expo, React Hooks",
      outcome: "Successfully deployed app that helps users visualize their habit consistency and stay accountable to their goals."
    },
    {
      id: "music",
      title: "Music Player",
      subtitle: "Full Stack Web Application",
      description: "Full-stack music streaming app with React.js frontend, SQL database for playlists and metadata, enhanced UI/UX components.",
      status: "In Progress",
      icon: "🎵",
      theme: "thumb-music",
      tags: ["React.js", "SQL", "Full Stack"],
      overview: "A feature-rich music streaming web application with a React.js frontend and SQL-powered backend for playlist and metadata management.",
      features: [
        "React.js frontend with modern UI/UX components",
        "SQL database for playlists, tracks, and metadata",
        "Custom audio player with full playback controls",
        "Playlist creation and management system",
        "Responsive design for all screen sizes"
      ],
      stack: "React.js, SQL, JavaScript, CSS3, Node.js",
      outcome: "Currently in active development. Core music playback and playlist features are functional."
    },
    {
      id: "lms",
      title: "Classify X — LMS App",
      subtitle: "Multi-Course Learning Management System",
      description: "Multi-course learning management system mobile app with dynamic routing, backend-driven content upload, and clean mobile UI.",
      status: "Completed",
      icon: "📚",
      theme: "thumb-lms",
      tags: ["React Native", "Expo Router", "Backend"],
      overview: "A mobile learning management system built with React Native and Expo Router that supports multi-course navigation with backend-driven content.",
      features: [
        "Multi-course navigation with Expo Router dynamic routing",
        "Backend-driven content upload system without login requirement",
        "Clean, optimized mobile UI for smooth learning experience",
        "Dynamic routing with automatic screen transitions",
        "Scalable architecture for adding new courses easily"
      ],
      stack: "React Native, Expo Router, JavaScript, Backend API",
      outcome: "Completed LMS app supporting multiple courses with a clean UI that prioritizes ease of content access."
    },
    {
      id: "fee",
      title: "Fee Management System",
      subtitle: "APSSDC Internship Project",
      description: "Production-ready online fee management system built during internship at APSSDC with Django, backend APIs, and secure transaction database.",
      status: "Completed",
      icon: "💼",
      theme: "thumb-other",
      tags: ["Django", "Python", "PostgreSQL"],
      overview: "A production-ready fee management system built during my internship at APSSDC, handling secure fee processing for institutional use.",
      features: [
        "Django-based backend with Python for business logic",
        "RESTful APIs for fee processing, payments, and tracking",
        "Secure database solutions for financial transaction management",
        "Admin dashboard for fee monitoring and reporting",
        "Collaborative development with a production deployment"
      ],
      stack: "Django, Python, PostgreSQL, REST APIs, HTML/CSS",
      outcome: "Successfully deployed in production at APSSDC, handling real institutional fee processing workflows."
    },
    {
      id: "civix",
      title: "CIVIX – Civic Engagement",
      subtitle: "Infosys Springboard 6.0 Project",
      description: "Built a full-stack civic engagement platform that enables citizens to create/sign petitions, participate in public polls, and track government responses.",
      status: "Completed",
      icon: "⚖️",
      theme: "thumb-other",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      overview: "A comprehensive digital governance platform designed to bridge the gap between citizens and officials through structured engagement modules.",
      features: [
        "Role-based authentication system (Citizen / Official)",
        "Petition lifecycle management (create, edit, sign, track status)",
        "Geo-tagged petitions with category-based filtering",
        "Public polling and voting system with live sentiment tracking",
        "Governance dashboard for officials to respond to issues",
        "Analytics and reporting system with export functionality"
      ],
      stack: "React, Node.js, Express, MongoDB, Git, Postman",
      outcome: "Improved transparency by providing real-time tracking and enabled structured civic participation through multiple integrated modules."
    }
  ],
  experience: [
    {
      period: "2026 — 8 Weeks Internship",
      role: "Full Stack Developer",
      org: "Infosys Springboard 6.0 · CIVIX Platform",
      points: [
        "Developed a full-stack platform for civic engagement with petitions, polling, and governance tracking",
        "Implemented role-based authentication and petition lifecycle management system",
        "Built polling system with real-time voting and sentiment analytics",
        "Designed dashboard for officials to respond and generate reports"
      ]
    },
    {
      period: "2024 — Internship",
      role: "Full Stack Developer",
      org: "APSSDC · Andhra Pradesh State Skill Development Corporation",
      points: [
        "Developed an Online Fee Management System using Django and Python for production use",
        "Designed and implemented RESTful backend APIs for fee processing and real-time tracking",
        "Integrated secure database solutions for transaction management and data integrity",
        "Collaborated with a team to deliver a production-ready system end-to-end"
      ]
    },
    {
      period: "2023 — Present",
      role: "B.Tech in Computer Science",
      org: "Manav Rachna University · Specialization: Full Stack Development",
      points: [
        "Pursuing B.Tech CSE with specialization in Full Stack Development, graduating 2027",
        "Built 4+ real-world projects including mobile apps, LMS platforms, and management systems",
        "Earned certifications from LinkedIn Learning, Infosys Springboard, and MongoDB",
        "Developed proficiency in React, Django, Java, and cloud fundamentals"
      ]
    }
  ],
  certifications: [
    { name: "LinkedIn Learning", type: "Professional Development", icon: "🔗", color: "rgba(0,119,181,0.1)" },
    { name: "Infosys Springboard", type: "Technical Certification", icon: "🌱", color: "rgba(6,214,160,0.1)" },
    { name: "MongoDB", type: "Database Certification", icon: "🍃", color: "rgba(0,237,100,0.1)" }
  ]
};
