// src/data/portfolioData.js
// Resume data for Ihtisham Zameer – .NET Full Stack Developer

export const personalInfo = {
  name: 'Ihtisham Zameer',
  title: '.NET Full Stack Developer',
  roles: [
    '.NET Full Stack Developer',
    'ASP.NET Core Specialist',
    'React.js Developer',
    'Backend Engineer',
  ],
  tagline:
    'Building robust, scalable enterprise-grade web applications with ASP.NET Core, C#, and React.js.',
  email: 'ihtishamzameer49@gmail.com',
  phone: '+92 310 5317050',
  github: 'https://github.com/ihtishamzameer',
  linkedin: 'https://www.linkedin.com/in/ihtishamzameer',
  location: 'Rawalpindi, Pakistan',
  profileImage: '/profile.png',
  resumeUrl: '/Ihtisham_Zameer_Resume (1).pdf',
}

export const aboutText = `I am Ihtisham Zameer, a dedicated .NET Full Stack Developer based in Rawalpindi, Pakistan with over 2 years of professional experience designing, building, and shipping high-performance enterprise web applications. My expertise spans the complete full-stack development lifecycle, leveraging ASP.NET Core, C#, and SQL Server on the backend along with dynamic React.js on the frontend.

Promoted from Intern to Junior .NET Developer within 6 months for strong delivery on a company-wide HRM platform built on Clean Architecture and MediatR (CQRS), I specialize in RESTful API design, Entity Framework Core, automated reporting, and secure database architecture. As a .NET Full Stack Developer, Ihtisham Zameer is passionate about translating complex business requirements into scalable, maintainable software solutions.`

export const skills = {
  'Languages & Frameworks': [
    { name: 'C#', level: 95, icon: '⚙️' },
    { name: '.NET / .NET Core', level: 92, icon: '🔷' },
    { name: 'ASP.NET Core Web API', level: 90, icon: '🌐' },
    { name: 'JavaScript', level: 85, icon: '🟡' },
    { name: 'HTML5 & CSS3', level: 90, icon: '🎨' },
    { name: 'Bootstrap', level: 85, icon: '🅱️' },
  ],
  'Architecture & Patterns': [
    { name: 'Clean Architecture', level: 90, icon: '🏛️' },
    { name: 'MediatR (CQRS)', level: 88, icon: '🔄' },
    { name: 'RESTful API Design', level: 92, icon: '🔌' },
    { name: 'SOLID Principles', level: 85, icon: '📚' },
  ],
  'Databases & ORM': [
    { name: 'SQL Server', level: 90, icon: '🗄️' },
    { name: 'MySQL', level: 80, icon: '🐬' },
    { name: 'Entity Framework Core', level: 92, icon: '🧩' },
    { name: 'T-SQL & LINQ', level: 88, icon: '🔍' },
  ],
  'Tools & DevOps': [
    { name: 'Git & GitHub', level: 90, icon: '🐙' },
    { name: 'MudBlazor / Radzen', level: 85, icon: '🧱' },
    { name: 'Postman / Swagger', level: 95, icon: '📮' },
    { name: 'Telerik Reporting', level: 80, icon: '📊' },
  ],
}

export const techStack = [
  { name: 'C#', color: '#9b4993' },
  { name: '.NET', color: '#512bd4' },
  { name: 'React.js', color: '#61dafb' },
  { name: 'SQL Server', color: '#cc2927' },
  { name: 'Entity Framework', color: '#512bd4' },
  { name: 'MediatR', color: '#25a244' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Clean Architecture', color: '#764abc' },
]

export const experience = [
  {
    id: 1,
    role: '.NET Full Stack Developer',
    company: 'TechtaGone Technologies — Islamabad, Pakistan',
    period: 'Aug 2024 – Apr 2026',
    type: 'Full-Time (Intern → Junior → Full Stack)',
    description:
      'Progressed from Intern to full .NET Full Stack Developer in 6 months, owning end-to-end module delivery for an enterprise HR platform used by 150+ employees.',
    achievements: [
      'Designed and built 4 core ASP.NET Core/C# modules (Employee Management, Attendance, Leave, Payroll) using Clean Architecture and MediatR.',
      'Built and maintained 25+ RESTful APIs with SQL Server and EF Core, managing 40+ schema migrations with zero production rollback incidents.',
      'Developed MyWall, an employee engagement module driving a 20% increase in internal communication.',
      'Automated payroll and business-analytics reporting with Telerik Reporting, cutting manual effort by 60–70%.',
      'Implemented role-based authorization for 150+ employee records with zero security incidents.',
      'Designed responsive UIs using MudBlazor, Radzen, HTML, and CSS for internal apps.',
    ],
    tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'MediatR', 'MudBlazor'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'SmartCorp HRM',
    description:
      'An enterprise Human Resource Management platform built by .NET Full Stack Developer Ihtisham Zameer. Adopted company-wide by 150+ employees, utilizing Clean Architecture and MediatR (CQRS) for employee lifecycles, attendance, leave, and automated payroll reporting.',
    tech: [
      'ASP.NET Core',
      'C#',
      'Clean Architecture',
      'MediatR',
      'SQL Server',
      'EF Core',
      'MudBlazor',
      'Telerik Reporting',
    ],
    github: 'https://github.com/ihtishamzameer',
    live: null,
    status: 'Enterprise HR Platform',
    featured: true,
    highlights: [
      'Designed & built 4 core modules: Employee Management, Attendance, Leave, and Payroll for 150+ employees',
      'Architected backend with Clean Architecture & MediatR (CQRS), maintaining 25+ RESTful APIs across 40+ migrations',
      'Engineered MyWall employee engagement feature (feeds, posts, comments), increasing participation by 20%',
      'Automated HR & payroll analytics reporting with Telerik Reporting, cutting manual effort by 60–70%',
      'Implemented role-based authorization ensuring 0 reported security incidents across 150+ employee records',
    ],
  },
  {
    id: 2,
    title: 'SmartPay: Payroll System',
    description:
      'Core payroll engine developed by Ihtisham Zameer for enterprise HR systems, incorporating robust validation pipelines in ASP.NET Core and SQL Server to eliminate data-entry errors.',
    tech: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server'],
    github: 'https://github.com/ihtishamzameer',
    live: null,
    status: 'Internship Project',
    featured: true,
    highlights: [
      'Identified and resolved 20+ bugs in the payroll pipeline',
      'Implemented robust input and file-size validation rules',
      'Significantly reduced data-entry errors in production',
    ],
  },
  {
    id: 3,
    title: 'Plagiarism Checker System',
    description:
      'An AI-powered plagiarism detection web application architected by Ihtisham Zameer using ASP.NET Core Web API, React.js, and Sentence Transformers for semantic similarity scoring.',
    tech: ['ASP.NET Core Web API', 'React.js', 'NLP', 'Python', 'SQL Server'],
    github: 'https://github.com/ihtishamzameer',
    live: null,
    status: 'Final Year Project',
    featured: true,
    highlights: [
      'Built as a 3-member team final year project',
      'Owned full backend API development in ASP.NET Core',
      'Implemented NLP-based semantic similarity scoring',
    ],
  },
]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi',
    period: 'Jun 2021 – Jun 2025',
    description:
      'Final Year Project: Plagiarism Checker System (ASP.NET Core Web API + React.js).',
    grade: 'Completed',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'React Essential Training',
    issuer: 'LinkedIn Learning',
    year: 'Jun 2026',
    icon: '⚛️',
    color: '#61dafb',
  },
  {
    id: 2,
    title: 'Complete Generative AI: Build Pro Web, Mobile & SaaS Apps',
    issuer: 'Udemy',
    year: 'May 2026',
    icon: '🤖',
    color: '#aa3bff',
  },
  {
    id: 3,
    title: 'Certificate of Work Appreciation',
    issuer: 'TechtaGone Technologies',
    year: 'Feb 2025',
    icon: '🏆',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Winner – SQL Database Query Competition',
    issuer: 'BIIT, Rawalpindi',
    year: 'May 2023',
    icon: '🥇',
    color: '#cc2927',
  },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
