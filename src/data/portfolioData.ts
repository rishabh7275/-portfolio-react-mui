import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Rishabh Tiwari',
    shortName: 'Rishabh',
    eyebrow: "HELLO, I'M RISHABH TIWARI",
    title: 'Building digital experiences with',
    highlightWord: 'purpose.',
    bio: "I'm a software developer with a strong foundation in modern frontend engineering (React, TypeScript, Material UI) and Core Java backend fundamentals. I focus on creating fast, accessible, and user-centric web applications.",
    detailedBio: [
      'Currently passed a B.Tech in Information Technology at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, following a Diploma in IT (74%) from MMPIT Chandauli.',
      'Experienced in building modular web applications with React, TypeScript, and Material UI, as well as database-driven desktop software using Java and MySQL.',
      'Passionate about clean architecture, responsive layouts, data structures & algorithms, and writing readable, maintainable code.',
    ],
    location: 'Ghaziabad / Uttar Pradesh, India',
    availability: 'Available for internships & full-time roles',
    statusText: 'Open to opportunities',
    resumeUrl: '/assets/Rishabh_Tiwari_Resume.pdf',
    resumeFileName: 'Rishabh_Tiwari_Resume.pdf',
    avatarUrl: '/assets/photorishabh.jpg',
  },

  socials: {
    github: 'https://github.com/rishabh7275',
    linkedin: 'https://linkedin.com/in/rishabhtiwari746425/',
    email: 'rishabhtiwari2917@gmail.com',
    whatsapp: 'https://wa.me/916388746425?text=Hi%20Rishabh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.',
    location: 'Ghaziabad, India',
  },

  skills: [
    {
      title: 'Frontend Development',
      categoryKey: 'frontend',
      description: 'Building responsive, accessible, and type-safe user interfaces.',
      items: [
        'React.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Material UI (MUI)',
        'HTML5',
        'CSS3',
        'Responsive Design',
      ],
    },
    {
      title: 'Backend & Database',
      categoryKey: 'backend',
      description: 'Foundational backend logic, relational schemas, and data persistence.',
      items: [
        'Core Java',
        'MySQL',
        'REST APIs',
        'MongoDB',
      ],
    },
    {
      title: 'Tools & Workflow',
      categoryKey: 'tools',
      description: 'Developer tooling, version control, and rapid build systems.',
      items: [
        'Git & GitHub',
        'Vite',
        'VS Code',
        'IntelliJ IDEA',
        'Debugging & DevTools',
        'Command Line / Bash',
      ],
    },
  ],

  projects: [
    {
      id: 'taskflow',
      number: '01',
      title: 'TaskFlow',
      category: 'Productivity · Web App',
      categoryType: 'frontend',
      description:
        'A comprehensive task management and productivity application designed to organize daily workflows, track priorities, and break down complex milestones.',
      detailedOverview:
        'TaskFlow is an interactive productivity system that combines Kanban board task management, day planning, and an integrated TaskFlow AI assistant. Built with React and Material UI, it offers a distraction-free environment for organizing work.',
      features: [
        'Interactive Kanban task board with status tracking (To Do, In Progress, Done)',
        'Built-in TaskFlow AI assistant modal for breaking large tasks into manageable steps',
        'Priority tagging (High, Medium, Low) and due-date scheduling',
        'Full responsive layout tailored for desktop, tablet, and mobile browsers',
        'Optimized state flow with smooth micro-interactions and instant feedback',
      ],
      challenges:
        'Managing complex task state transitions smoothly while keeping the interface responsive and providing immediate tactile feedback during task updates.',
      tech: ['React', 'TypeScript', 'Material UI', 'Vite', 'CSS3'],
      github: 'https://github.com/rishabh7275/taskflow',
      live: '',
      previewImage: '/assets/taskflow_clean.png',
      icon: '✳',
      statusBadge: 'Live Project',
    },
    {
      id: 'gamehub',
      number: '02',
      title: 'GameHub',
      category: 'Gaming · Web Platform',
      categoryType: 'frontend',
      description:
        'A responsive web-based gaming platform featuring interactive mini-games such as Tic-Tac-Toe, Quiz trivia, and Snake with clean game logic.',
      detailedOverview:
        'GameHub gathers lightweight, engaging mini-games into a single modern web application. Developed with React and Vite, the platform demonstrates component modularity, state-driven animations, and responsive canvas/grid mechanics.',
      features: [
        'Modular game architecture with multiple playable games (Tic-Tac-Toe, Quiz, Snake)',
        'Timed multiple-choice trivia challenge with automatic scoring',
        'Classic 2D Snake game with responsive directional controls and collision detection',
        'Clean, accessible UI with smooth state transitions and victory highlights',
        'Cross-device compatibility across desktop screens and mobile touch targets',
      ],
      challenges:
        'Implementing performant game tick loops and keyboard event bindings in React without causing excessive component re-renders or input lag.',
      tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'CSS3', 'React Router'],
      github: 'https://github.com/rishabh7275/gamehub-react',
      live: '',
      previewImage: '/assets/gamehub_tictactoe.png',
      icon: '⌘',
      statusBadge: 'Open Source',
    },
    {
      id: 'portfolio',
      number: '03',
      title: 'Personal Portfolio Website',
      category: 'Personal Portfolio · Web Development',
      categoryType: 'frontend',
      description:
        'A personal portfolio website showcasing my skills, projects, education, and professional experience with a clean and responsive user interface.',
      detailedOverview:
        'A responsive portfolio website designed to present my technical skills, development projects, and professional journey.',
      features: [
        'Responsive design for desktop, tablet, and mobile devices',
        'Dedicated sections for skills, projects, and education',
        'Professional contact and social media links',
        'Clean user interface with smooth navigation',
      ],
      challenges:
        'Creating a clean, responsive layout and organizing portfolio content for a better user experience.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'PASTE_YOUR_OLD_PORTFOLIO_GITHUB_REPOSITORY_LINK',
      live: '',
      previewImage: '/assets/portfolio.png',
      icon: '💻',
      statusBadge: 'Personal Project',
    },
  ],

  experience: [
    {
      id: 'pronttera-internship',
      role: 'Software Engineer Intern',
      company: 'Pronttera',
      period: 'July 2026 – October 2026',
      duration: '3 months',
      workArrangement: 'Hybrid',
      description:
        'Assisting with software and web application development, working on frontend and backend modules, API integration, database operations, debugging, testing, performance optimization, and writing maintainable code.',
      responsibilities: [
        'Assisting with software and web application development across modern frontend and backend modules',
        'Collaborating on RESTful API integration and database operations',
        'Identifying, debugging, and resolving application issues through structured testing',
        'Writing clean, maintainable, and type-safe code following team standards',
        'Participating in bug fixing, code refinements, and performance optimization workflows',
      ],
      skills: ['React', 'TypeScript', 'Next.js', 'REST APIs', 'Debugging', 'Testing', 'MySQL', 'Git'],
    },
  ],

  certifications: [
    {
      id: 'dsa-apna-college',
      title: 'Alpha: Data Structures & Algorithms with Java',
      issuer: 'Apna College',
      date: 'Completed',
      image: '/assets/java.jpg',
      skills: ['Data Structures', 'Algorithms', 'Java', 'Problem Solving', 'Time Complexity'],
    },
    {
      id: 'java-infosys',
      title: 'Java Programming Course Completion',
      issuer: 'Infosys Springboard',
      date: 'Completed',
      skills: ['Object-Oriented Programming (OOP)', 'Java Core', 'Exception Handling', 'Collections'],
    },
  ],

  education: [
    {
      period: '2023 — 2026',
      degree: 'B.Tech — Information Technology',
      institution: 'Ajay Kumar Garg Engineering College (AKGEC)',
      location: 'Ghaziabad, Uttar Pradesh',
      score: '6.8 CGPA',
      description:
        'Focusing on Software Engineering, Data Structures & Algorithms, Database Management Systems, and Web Technologies.',
    },
    {
      period: '2020 — 2023',
      degree: 'Diploma — Information Technology',
      institution: 'Mahamaya Polytechnic of Information Technology (MMPIT)',
      location: 'Chandauli, Uttar Pradesh',
      score: '74% Aggregate',
      description:
        'Built a strong foundation in computer fundamentals, programming, logic design, and database systems.',
    },
    {
      period: '2020',
      degree: 'Secondary School Examination (Class X)',
      institution: 'Shams National School',
      location: 'Ghazipur, Uttar Pradesh',
      score: '64% Aggregate',
      description: 'Completed general secondary education with strong analytical and mathematical coursework.',
    },
  ],

  contactConfig: {
    serviceType: 'mailto',
    formspreeEndpoint: '', // Configure your Formspree endpoint (e.g., https://formspree.io/f/your_id) here when ready
  },
};
