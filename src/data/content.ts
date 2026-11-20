import type {
  Certification,
  ExperienceItem,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
} from '@/types'

export const profile = {
  name: 'Mohammad Ali Shkeir',
  roles: [
    'Software Engineer',
    'Backend Developer',
    'AI Engineer',
    'Full-Stack Developer',
  ],
  tagline:
    'Building scalable applications using React, Node.js, ASP.NET, FastAPI and AI.',
  summary:
    'Computer and Communications Engineering student focused on software engineering, full-stack and backend development, AI/ML, and computer vision. Internship and project experience building web platforms, REST APIs, Flutter mobile apps, and Unity XR/AR applications. Hands-on work with databases, LLM integration, image processing, and IoT systems using Python, Java, C#, JavaScript, and TypeScript.',
  location: 'Baabda, Lebanon',
  education: {
    school: 'Antonine University, Baabda, Lebanon',
    degree:
      'Bachelor of Engineering in Computer and Communications — Software Engineering and Networks',
    period: 'Expected 2027',
  },
  resumeUrl: '/resume.pdf',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Mhmd-Shkeir', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/mohammad-shkeir',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:mhmd2004shkeir@gmail.com', icon: 'mail' },
]

export const stats: Stat[] = [
  { label: 'Internships', value: 4, suffix: '+' },
  { label: 'Projects', value: 20, suffix: '+' },
  { label: 'Technologies', value: 40, suffix: '+' },
]

export const experience: ExperienceItem[] = [
  {
    id: 'speedy',
    company: 'Speedy Smart',
    role: 'Junior Full-Stack Developer',
    period: 'Oct 2026 – Present',
    bullets: [
      'Building a mobile application and supporting product implementation and testing in Engineering & Products, with contributions across full-stack development, AI integration, and quality assurance.',
    ],
    tags: ['Full-Stack', 'AI Integration', 'QA', 'Mobile'],
  },
  {
    id: 'auvia',
    company: 'TabbeQ AI',
    role: 'XR/AR & Computer Vision Intern',
    period: 'Sep 2025 – Sep 2026',
    bullets: [
      'Developed Unity/C# XR/AR applications with MediaPipe body/pose tracking for exercise counting, robot-drawing AR, portals, and AR fitting mirrors; integrated gesture/voice interaction and optimized real-time tracking.',
      'Researched PCB Automated Optical Inspection (AOI) with Python/OpenCV: defect datasets, object detection, OCR, anomaly detection, and image registration.',
      'Evaluated ORB, SIFT, and AKAZE for image registration and YOLO for object detection; contributed to the proposed inspection pipeline and system architecture.',
    ],
    tags: ['Unity', 'C#', 'MediaPipe', 'OpenCV', 'YOLO', 'Python', 'AR Foundation'],
  },
  {
    id: 'vanrise',
    company: 'Vanrise',
    role: 'Software Development Intern',
    period: '2025',
    bullets: [
      'Developed backend features using ASP.NET MVC (C#), built and tested REST APIs using Postman, and collaborated on frontend/backend integration across the application.',
      'Debugged application issues and optimized database operations, improving application reliability and maintainability.',
    ],
    tags: ['ASP.NET MVC', 'C#', 'REST APIs', 'Postman'],
  },
  {
    id: 'ogero',
    company: 'Ogero Internship',
    role: 'Team Leader — Full-Stack Intern',
    period: '2025',
    bullets: [
      'Led a team building a full-stack Admin Console with React.js, Node.js, JWT, and RBAC, delivering secure role-based access and database-driven workflows.',
      'Coordinated task ownership across the team and organized admin operations end-to-end, from database schema to UI.',
    ],
    tags: ['React.js', 'Node.js', 'JWT', 'RBAC'],
  },
]

export const projects: Project[] = [
  {
    id: 'smart-university',
    title: 'Smart University IoT Platform',
    description:
      'Flutter app for campus attendance and classroom management, with facial-recognition attendance, IoT sensor monitoring, and real-time dashboards.',
    longDescription:
      'Built a cross-platform Flutter application with separate student and administrator interfaces, backed by a FastAPI and MongoDB service layer. Integrated AI-based facial recognition for attendance (with human verification) and real-time IoT sensor monitoring, exposing REST APIs and live dashboards for attendance and classroom conditions.',
    tags: ['Flutter', 'FastAPI', 'MongoDB', 'Firebase', 'Face Recognition', 'IoT'],
    repos: [
      {
        label: 'Code',
        url: 'https://github.com/Mhmd-Shkeir/smart-university_iot_mobile',
      },
    ],
  },
  {
    id: 'money-transfer',
    title: 'Money Transfer System',
    description:
      'Laravel-based money transfer and agent management platform with role-based access across Admin, Agent, and Client roles.',
    longDescription:
      'Built a full-stack money transfer and agent management system in Laravel, letting clients send and receive funds through authorized agents. Implements role-based access for Admin, Agent, and Client, wallet balance tracking, transaction history, and secure authentication using an MVC architecture over MySQL.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'RBAC'],
    repos: [
      {
        label: 'Code',
        url: 'https://github.com/Mhmd-Shkeir/money-transfer-system-laravel',
      },
    ],
  },
  {
    id: 'admin-console',
    title: 'Admin Console',
    description:
      'Full-stack admin console with secure role-based access and database-driven workflows, built while leading a team at Ogero.',
    longDescription:
      'Led a team building a full-stack Admin Console on Node.js and Express with JWT authentication and RBAC, delivering secure role-based access and database-driven workflows. Coordinated task ownership across the team from database schema to UI.',
    tags: ['Node.js', 'Express.js', 'JWT', 'RBAC'],
    repos: [
      {
        label: 'Code',
        url: 'https://github.com/Mhmd-Shkeir/Admin_client_console-Nodejs',
      },
    ],
  },
  {
    id: 'psyconnect',
    title: 'PsyConnect',
    description:
      'Psychotherapist booking management system with role-based access for Admin, Patient, and Therapist roles.',
    longDescription:
      'Worked on a psychotherapist booking platform in ASP.NET Core MVC with role-based access for Admin, Patient, and Therapist: appointment booking and scheduling, session notes, and database-driven dashboards over SQL Server.',
    tags: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'RBAC'],
    repos: [{ label: 'Code', url: 'https://github.com/Mhmd-Shkeir/PsyConnect' }],
  },
  {
    id: 'semantic-search',
    title: 'Semantic Search Engine',
    description:
      'Semantic document retrieval system supporting PDF, Word, XML, JSON, and HTML documents with NLP-based indexing.',
    longDescription:
      'Built a semantic document retrieval system supporting PDF, Word, XML, JSON, and HTML documents using NLP-based indexing and relevance ranking. Optimized search performance through MongoDB query-history caching.',
    tags: ['Java', 'JavaFX', 'MongoDB', 'NLP'],
  },
  {
    id: 'autocare-pro',
    title: 'AutoCare Pro',
    description:
      'JavaFX vehicle maintenance management system for automotive service centers, with service tracking, payments, and PDF receipt generation.',
    longDescription:
      'Built a desktop vehicle-maintenance management system in JavaFX for an OOP coursework project, developed with two teammates. Manages customers, vehicles, and maintenance services end-to-end — tracking service status, payments and discounts, and generating PDF receipts — backed by SQL Server over JDBC.',
    tags: ['Java', 'JavaFX', 'SQL Server', 'JDBC', 'OOP'],
    repos: [
      {
        label: 'Code',
        url: 'https://github.com/Mhmd-Shkeir/autocare-pro-javafx',
      },
    ],
  },
  {
    id: 'sneaker-recognition',
    title: 'Sneaker Recognition Platform',
    description:
      'AI-powered sneaker recognition platform with price prediction, similarity search, and inventory management.',
    longDescription:
      'Built a full-stack sneaker recognition platform: a ResNet50 model classifies uploaded sneaker images, a CatBoost regressor predicts market price, and FAISS powers visual similarity search, all served through a Flask REST API with a React frontend and MongoDB/GridFS-backed inventory management.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'Flask', 'React', 'MongoDB', 'FAISS'],
    repos: [{ label: 'Code', url: 'https://github.com/Mhmd-Shkeir/Multimedia' }],
  },
  {
    id: 'workout-detection',
    title: 'Workout Detection',
    description:
      'Real-time workout and gesture detection built in Unity for AR/XR fitness tracking use cases.',
    longDescription:
      'Built a real-time workout-detection application using object tracking and gesture recognition in Unity, tuned for responsive AR/XR tracking performance during the Auvia-TabbeqAI internship.',
    tags: ['Unity', 'C#', 'AR Foundation', 'Computer Vision'],
  },
  {
    id: 'autoencoder',
    title: 'Image Compression Autoencoder',
    description:
      'Deep convolutional autoencoders for image compression and denoising, built with TensorFlow and Keras.',
    longDescription:
      'Implemented deep convolutional autoencoders to compress images into lower-dimensional representations and reconstruct them with minimal quality loss, and to denoise corrupted images through unsupervised learning. Experimented with different encoder-decoder architectures on MNIST and CIFAR-10.',
    tags: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    repos: [
      { label: 'Code', url: 'https://github.com/Mhmd-Shkeir/Autoencoder_object_detector' },
    ],
  },
  {
    id: 'tic-tac-toe-ai',
    title: 'Tic Tac Toe vs AI',
    description:
      'Tic Tac Toe game with four AI difficulty levels, from random moves to an unbeatable Minimax with Alpha-Beta pruning.',
    longDescription:
      'Built a Tic Tac Toe game in Python (Tkinter) with four AI difficulty levels: Easy (random moves), Normal (rule-based heuristics), Hard (Minimax), and Insane (Minimax with Alpha-Beta pruning, unbeatable). Includes a match scoring system and a modern UI with hover effects.',
    tags: ['Python', 'Tkinter', 'Minimax', 'Alpha-Beta Pruning'],
    repos: [
      { label: 'Code', url: 'https://github.com/Mhmd-Shkeir/Tic-Tac-Toe-Game-Vs-Ai' },
    ],
  },
  {
    id: 'movie-review-platform',
    title: 'Movie Review Platform',
    description:
      'IMDb-style movie listing and review platform in Laravel, with public browsing/search and a role-based admin dashboard.',
    longDescription:
      'Built a Laravel Blade movie review platform with public movie listing, search, and detail pages, plus authenticated user reviews. Includes email-verified signup, role-based admin and user dashboards with distinct views, and a full admin panel for managing movies and users (search, edit, delete, stats) protected by role middleware.',
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'RBAC'],
    repos: [{ label: 'Code', url: 'https://github.com/Mhmd-Shkeir/Mini-projects' }],
  },
  {
    id: 'master-erp',
    title: 'Master Business ERP',
    description:
      'ERP workflows with role-based access and an LLM layer for natural-language database queries, daily briefs, and approval-based email drafts.',
    longDescription:
      'Built ERP-related business workflows with role-based access and LLM integration. The assistant answers natural-language questions against the database, produces daily briefs, and drafts emails that need approval before sending, all through role-filtered tools so each user only reaches what their role allows.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Groq', 'OpenAI SDK'],
    repos: [{ label: 'Code', url: 'https://github.com/Mhmd-Shkeir/master-business-app' }],
  },
  {
    id: 'lumina-chat',
    title: 'Lumina Chat',
    description:
      'Flutter messaging app with real-time chat, presence, read receipts, translation, and an LLM assistant.',
    longDescription:
      'Built a Flutter and Firebase messaging application with real-time messaging, presence, and read receipts, using Riverpod and GoRouter. Adds message translation and a Groq-powered LLM assistant.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'GoRouter', 'Groq'],
    repos: [{ label: 'Code', url: 'https://github.com/Mhmd-Shkeir/Chatting_app' }],
  },
  {
    id: 'wall-touch',
    title: 'Wall Touch',
    description:
      'Detects touches on a wall with a single webcam, using hand tracking and depth estimation, and drives a balloon math game.',
    longDescription:
      'Built a Unity system that detects a touch on a wall from one webcam. A homography maps four calibrated corners to wall coordinates, BlazeHand models running in Unity Inference Engine track the fingertip, and Depth Anything V2 Small estimates depth to tell a real touch from a hand hovering nearby. The tap events drive a balloon math game. Touch detection is reliable enough for a demo, and a side-angle camera improves it further.',
    tags: ['Unity', 'C#', 'Inference Engine', 'Depth Estimation', 'Computer Vision'],
    repos: [{ label: 'Code', url: 'https://github.com/Mhmd-Shkeir/Wall-Touch' }],
  },
]

/** Shown first; everything else sits behind "More projects". */
export const featuredProjectIds = [
  'master-erp',
  'sneaker-recognition',
  'smart-university',
  'lumina-chat',
  'wall-touch',
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cpp' },
      { name: 'C#', icon: 'csharp' },
      { name: 'JavaScript (ES6+)', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'PHP', icon: 'php' },
      { name: 'SQL', icon: 'sql' },
      { name: 'NoSQL', icon: 'nosql' },
    ],
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    skills: [
      { name: 'Object-Oriented Programming', icon: 'oop' },
      { name: 'Data Structures & Algorithms', icon: 'dsa' },
      { name: 'MVC', icon: 'mvc' },
      { name: 'Software Design', icon: 'softwaredesign' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Flask', icon: 'flask' },
      { name: 'ASP.NET MVC', icon: 'aspnet' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'REST APIs', icon: 'restapi' },
      { name: 'JWT', icon: 'jwt' },
      { name: 'RBAC', icon: 'rbac' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'AngularJS', icon: 'angularjs' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Blade', icon: 'blade' },
      { name: 'JavaFX', icon: 'javafx' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQL Server', icon: 'sqlserver' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PL/SQL', icon: 'plsql' },
    ],
  },
  {
    id: 'mobile-xr',
    name: 'Mobile & XR',
    skills: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Dart', icon: 'dart' },
      { name: 'Unity', icon: 'unity' },
      { name: 'AR Foundation', icon: 'arfoundation' },
      { name: 'XR Interaction Toolkit', icon: 'xrtoolkit' },
      { name: 'Vuforia', icon: 'vuforia' },
      { name: 'Mixed Reality', icon: 'mixedreality' },
      { name: 'Virtual Reality (VR)', icon: 'vr' },
      { name: 'Augmented Reality (AR)', icon: 'ar' },
    ],
  },
  {
    id: 'ai-cv',
    name: 'AI & Computer Vision',
    skills: [
      { name: 'Machine Learning', icon: 'machinelearning' },
      { name: 'Deep Learning', icon: 'deeplearning' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'NLP', icon: 'nlp' },
      { name: 'YOLO', icon: 'yolo' },
      { name: 'CatBoost', icon: 'catboost' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'MediaPipe', icon: 'mediapipe' },
      { name: 'Computer Vision', icon: 'computervision' },
      { name: 'Image Classification', icon: 'imageclassification' },
      { name: 'Object Detection', icon: 'objectdetection' },
      { name: 'Autoencoders', icon: 'autoencoders' },
    ],
  },
  {
    id: 'llm',
    name: 'LLM & Retrieval',
    skills: [
      { name: 'Groq', icon: 'groq' },
      { name: 'OpenAI API/SDK', icon: 'openai' },
      { name: 'Ollama', icon: 'ollama' },
      { name: 'Function Calling', icon: 'functioncalling' },
      { name: 'CLIP Embeddings', icon: 'clip' },
      { name: 'FAISS Vector Search', icon: 'faiss' },
    ],
  },
  {
    id: 'iot',
    name: 'IoT & Embedded',
    skills: [
      { name: 'Raspberry Pi', icon: 'raspberrypi' },
      { name: 'GrovePi', icon: 'grovepi' },
      { name: 'MQTT', icon: 'mqtt' },
      { name: 'RFID', icon: 'rfid' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Android Studio', icon: 'androidstudio' },
    ],
  },
]

export const certifications: Certification[] = [
  {
    title: 'AI & Machine Learning Course',
    issuer: 'Antonine University',
    period: '2024 – 2026',
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'Udemy',
    period: '2024',
  },
  {
    title: 'CCNA Coursework',
    issuer: 'Antonine University',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Self-Paced',
  },
  {
    title: 'Linux Fundamentals',
    issuer: 'Self-Paced',
  },
]
