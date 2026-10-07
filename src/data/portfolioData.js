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
  whatsappUrl: 'https://wa.me/923105317050?text=Hi%20Ihtisham,%20I%20saw%20your%20portfolio!',
  gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=ihtishamzameer49@gmail.com',
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
    slug: 'smartcorp-hrm',
    title: 'SmartCorp HRM',
    subtitle: 'Enterprise Human Resource & Payroll Management Platform',
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
    images: [
      '/smartcorp-1.png',
      '/smartcorp-2.png',
      '/smartcorp-3.png',
      '/smartcorp-4.png'
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
    caseStudy: {
      problem: 'TechtaGone Technologies required a unified, robust enterprise platform to digitize manual employee records, streamline daily attendance, automate complex monthly payroll calculations, and enforce role-based security across 150+ personnel.',
      role: '.NET Full Stack Developer (Lead Module Engineer)',
      techStackDetails: [
        { name: 'ASP.NET Core 8 Web API', usage: 'Backend RESTful API architecture following Clean Architecture design patterns' },
        { name: 'MediatR (CQRS Pattern)', usage: 'Separation of commands and queries for decoupled, maintainable request pipelines' },
        { name: 'SQL Server & EF Core', usage: 'Relational database schema, 40+ database migrations, T-SQL indexes, and LINQ queries' },
        { name: 'MudBlazor & Radzen', usage: 'Modern responsive web interfaces for HR administrators and employees' },
        { name: 'Telerik Reporting', usage: 'Automated calculation and generation of PDF/Excel payroll summaries' },
      ],
      keyChallenges: [
        'Handling high concurrency during peak morning attendance check-ins without database locking.',
        'Executing atomic transactions across MediatR command handlers for complex leave deduction logic.',
        'Managing 40+ Entity Framework Core schema migrations with zero downtime and 100% data integrity.',
      ],
      outcome: 'Adopted company-wide by 150+ employees. Cut monthly manual payroll processing effort by 60–70% while maintaining 0 security incidents across all confidential employee records.',
    },
  },
  {
    id: 2,
    slug: 'smartpay',
    title: 'SmartPay: Payroll System',
    subtitle: 'High-Precision Validation & Enterprise Payroll Calculation Engine',
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
    caseStudy: {
      problem: 'Payroll calculation routines suffered from edge-case validation errors when receiving manual CSV uploads and custom overtime inputs, leading to accounting reconciliation delays.',
      role: '.NET Backend Developer Intern',
      techStackDetails: [
        { name: 'ASP.NET Core', usage: 'Validation filters and pipeline middleware for requests' },
        { name: 'C# / FluentValidation', usage: 'Strongly typed business validation rules for payroll data' },
        { name: 'SQL Server', usage: 'Stored procedures and atomic transactional updates' },
      ],
      keyChallenges: [
        'Refactoring legacy calculation logic without breaking historical payroll records.',
        'Enforcing strict payload size and MIME-type validation for document uploads.',
      ],
      outcome: 'Resolved 20+ existing payroll bugs, eliminated data-entry validation failures, and secured promotion to Junior .NET Developer within 6 months.',
    },
  },
  {
    id: 3,
    slug: 'plagiarism-checker',
    title: 'Plagiarism Checker System',
    subtitle: 'AI-Powered NLP Document Similarity & Plagiarism Detection Engine',
    description:
      'An AI-powered plagiarism detection web application architected by Ihtisham Zameer using Flask API, React.js, and Sentence Transformers for semantic similarity scoring.',
    tech: ['Flask API', 'React.js', 'NLP', 'Python', 'SQL Server'],
    github: 'https://github.com/ihtishamzameer',
    live: null,
    status: 'Final Year Project', 
    featured: true,
    highlights: [
      'Built as a 3-member team final year project',
      'Owned full backend API development in ASP.NET Core',
      'Implemented NLP-based semantic similarity scoring',
    ],
    caseStudy: {
      problem: 'Academic institutions needed an automated tool capable of checking student submissions not only for exact text matches, but also for semantic rephrasing and structural similarity.',
      role: 'Backend Architect & Full Stack Developer',
      techStackDetails: [
        { name: 'Flask API', usage: 'Core microservices backend managing user roles, submission queues, and reports' },
        { name: 'Python & Sentence Transformers', usage: 'Vector embedding generation and cosine similarity calculation' },
        { name: 'React.js Frontend', usage: 'Interactive UI with visual heatmap highlight of flagged text sections' },
        { name: 'SQL Server', usage: 'Indexing document embeddings and metadata storage' },
      ],
      keyChallenges: [
        'Optimizing similarity scoring performance across large multi-page documents.',
        'Designing a clean API bridge between ASP.NET Core Web API and Python NLP scripts.',
      ],
      outcome: 'Delivered as a successful Final Year Capstone Project, earning top academic marks and demonstrating seamless integration between .NET enterprise backends and Python AI models.',
    },
  },
]

export const blogPosts = [
  {
    id: 1,
    slug: 'building-rest-api-aspnet-core-clean-architecture',
    title: 'Building Scalable REST APIs with ASP.NET Core & Clean Architecture',
    excerpt: 'A practical guide by .NET Full Stack Developer Ihtisham Zameer on structuring enterprise ASP.NET Core Web APIs using Clean Architecture, MediatR (CQRS), and Entity Framework Core.',
    date: '2026-08-15',
    readTime: '6 min read',
    category: '.NET & C#',
    tags: ['ASP.NET Core', 'Clean Architecture', 'CQRS', 'C#', 'SQL Server'],
    author: {
      name: 'Ihtisham Zameer',
      role: '.NET Full Stack Developer',
      image: '/profile.webp'
    },
    content: `When building enterprise software, architecture choices determine how gracefully an application handles growth, maintainability, and testing. Clean Architecture (popularized by Robert C. Martin) decouples application core domain logic from external dependencies like databases, web frameworks, and UI components.

### 🏛️ Core Layers of Clean Architecture

1. **Domain Layer**: Contains enterprise entities, value objects, domain events, and core business rules. Free of any external dependencies.
2. **Application Layer**: Contains use cases, DTOs, MediatR commands, queries, and interface abstractions.
3. **Infrastructure Layer**: Implements database persistence (EF Core, SQL Server), email providers, and file storage.
4. **API / Presentation Layer**: ASP.NET Core Controllers or Minimal APIs responsible for HTTP request parsing and response formatting.

### 🔄 Why CQRS with MediatR?

Command Query Responsibility Segregation (CQRS) separates read operations (Queries) from write operations (Commands). By using MediatR in ASP.NET Core:
- Handlers stay slim and focused on single responsibilities.
- Cross-cutting concerns like logging, validation (FluentValidation), and caching can be injected seamlessly using MediatR Pipeline Behaviors.

\`\`\`csharp
// Example MediatR Command Handler in ASP.NET Core
public record CreateEmployeeCommand(string FullName, string Email, string Department) : IRequest<int>;

public class CreateEmployeeCommandHandler : IRequestHandler<CreateEmployeeCommand, int>
{
    private readonly IApplicationDbContext _context;
    public CreateEmployeeCommandHandler(IApplicationDbContext context) => _context = context;

    public async Task<int> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
    {
        var entity = new Employee(request.FullName, request.Email, request.Department);
        _context.Employees.Add(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return entity.Id;
    }
}
\`\`\`

By organizing your ASP.NET Core solution this way, your codebase remains clean, testable, and ready for long-term scalability.`,
  },
  {
    id: 2,
    slug: 'react-dotnet-integration-tips',
    title: 'Essential Tips for Integrating React.js with ASP.NET Core Backends',
    excerpt: 'Key strategies for handling JWT authentication, CORS policies, Axios interceptors, and typed API response contracts between React frontend and ASP.NET Core Web API.',
    date: '2026-08-01',
    readTime: '5 min read',
    category: 'Full Stack',
    tags: ['React.js', 'ASP.NET Core', 'JWT', 'REST API', 'JavaScript'],
    author: {
      name: 'Ihtisham Zameer',
      role: '.NET Full Stack Developer',
      image: '/profile.webp'
    },
    content: `Connecting a modern React SPA to an ASP.NET Core backend is one of the most common full-stack architectures in enterprise applications. Here are essential best practices to ensure security, reliability, and clean developer workflows.

### 1. Configured CORS Security

Always configure CORS explicitly in your ASP.NET Core \`Program.cs\` to allow credentials only from trusted frontend domains:

\`\`\`csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("https://ihtisham-phi.vercel.app", "http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});
\`\`\`

### 2. Centralized Axios Instance with Token Refresh Interceptor

Instead of passing headers manually in every component, use an Axios instance with interceptors for automatically injecting JWT bearer tokens and handling token expiration:

\`\`\`javascript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});
\`\`\`

### 3. Consistent API Envelope Responses

Maintain a uniform response DTO contract across all controller endpoints in ASP.NET Core:

\`\`\`csharp
public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; }
    public T Data { get; set; }
}
\`\`\`

This standard makes UI state management predictable and prevents runtime exceptions in React components.`,
  },
  {
    id: 3,
    slug: 'optimizing-entity-framework-core-performance',
    title: 'Optimizing Entity Framework Core Query Performance in SQL Server',
    excerpt: 'Learn how to eliminate N+1 queries, leverage AsNoTracking(), index T-SQL tables effectively, and speed up EF Core database interactions.',
    date: '2026-07-20',
    readTime: '7 min read',
    category: 'Databases & Performance',
    tags: ['Entity Framework', 'SQL Server', 'T-SQL', 'Performance', 'C#'],
    author: {
      name: 'Ihtisham Zameer',
      role: '.NET Full Stack Developer',
      image: '/profile.webp'
    },
    content: `Entity Framework Core provides productive ORM abstractions, but unoptimized LINQ queries can bottleneck SQL Server performance. Here are key performance tuning techniques I use in enterprise applications.

### 1. Disable Change Tracking for Read-Only Queries

By default, EF Core tracks changes for all queried entities. For read-only API endpoints, use \`AsNoTracking()\`:

\`\`\`csharp
// 30-50% faster execution & significantly less memory allocation
var employees = await _context.Employees
    .AsNoTracking()
    .Where(e => e.IsActive)
    .ToListAsync();
\`\`\`

### 2. Prevent the N+1 Query Problem

Always use \`Include()\` and \`ThenInclude()\` or project directly into DTOs using \`Select()\` to combine queries into a single SQL join statement:

\`\`\`csharp
var employeeDTOs = await _context.Employees
    .AsNoTracking()
    .Select(e => new EmployeeDto {
        Id = e.Id,
        Name = e.FullName,
        DepartmentName = e.Department.Name
    })
    .ToListAsync();
\`\`\`

### 3. SQL Server Indexing Strategy

Pair your EF Core queries with proper SQL Server non-clustered indexes on foreign key columns and frequently searched properties (e.g. \`Email\`, \`DepartmentId\`, \`IsActive\`).`,
  },
]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi',
    period: 'Jun 2021 – Jun 2025',
    description:
      'Final Year Project: Plagiarism Checker System (Flask API + React.js).',
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
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

