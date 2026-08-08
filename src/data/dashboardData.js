// src/data/dashboardData.js
// All dashboard data is dummy/placeholder.
// Replace each array/value with a real API call when the backend is ready.

export const statCards = [
  {
    id: 'total-projects',
    label: 'Total Projects',
    value: 24,
    change: 'Increased from last month',
    trend: 'up',
    icon: 'folder',
    featured: true,
  },
  {
    id: 'ended-projects',
    label: 'Ended Projects',
    value: 10,
    change: 'Increased',
    trend: 'up',
    icon: 'check',
    featured: false,
  },
  {
    id: 'running-projects',
    label: 'Running Projects',
    value: 12,
    change: 'Increased',
    trend: 'up',
    icon: 'activity',
    featured: false,
  },
  {
    id: 'pending-project',
    label: 'Pending Projects',
    value: 2,
    change: 'On Discuss',
    trend: 'neutral',
    icon: 'clock',
    featured: false,
  },
]

export const activityData = [
  { day: 'S', fullDay: 'Sun', tasks: 4 },
  { day: 'M', fullDay: 'Mon', tasks: 7 },
  { day: 'T', fullDay: 'Tue', tasks: 10 },
  { day: 'W', fullDay: 'Wed', tasks: 6 },
  { day: 'T', fullDay: 'Thu', tasks: 8 },
  { day: 'F', fullDay: 'Fri', tasks: 3 },
  { day: 'S', fullDay: 'Sat', tasks: 5 },
]

export const recentProjects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'Full-stack shop with React & .NET',
    progress: 78,
    status: 'In Progress',
    color: '#6366f1',
    initials: 'EP',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'Personal portfolio & blog',
    progress: 95,
    status: 'Review',
    color: '#22c55e',
    initials: 'PW',
  },
  {
    id: 3,
    name: 'DevFlow API',
    description: 'REST API for project management',
    progress: 45,
    status: 'In Progress',
    color: '#8b5cf6',
    initials: 'DA',
  },
  {
    id: 4,
    name: 'Authentication System',
    description: 'JWT-based auth service',
    progress: 100,
    status: 'Completed',
    color: '#f59e0b',
    initials: 'AS',
  },
]

export const upcomingTasks = [
  {
    id: 1,
    title: 'Implement JWT refresh token',
    due: 'Due tomorrow',
    priority: 'high',
    done: false,
  },
  {
    id: 2,
    title: 'Create project API endpoints',
    due: 'Due Aug 12',
    priority: 'medium',
    done: false,
  },
  {
    id: 3,
    title: 'Build task board UI',
    due: 'Due Aug 15',
    priority: 'medium',
    done: false,
  },
  {
    id: 4,
    title: 'Add role-based authorization',
    due: 'Due Aug 17',
    priority: 'low',
    done: true,
  },
]

export const overallProgress = 68
