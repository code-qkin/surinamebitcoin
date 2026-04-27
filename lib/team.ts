export type TeamMember = {
  name:       string
  role:       string
  department: string
  open?:      boolean
}

export const TEAM: TeamMember[] = [
  // Executive & Leadership
  { name: 'Jimmy Samsoedien', role: 'Founder / CEO',                  department: 'Executive & Leadership' },
  { name: 'Rajindra Patti',   role: 'Co-Founder',                     department: 'Executive & Leadership' },
  { name: 'Akash Gobardhan',  role: 'CFO — Chief Financial Officer',   department: 'Executive & Leadership' },
  { name: 'Haroen',           role: 'COO — Chief Operating Officer',   department: 'Executive & Leadership' },
  { name: 'Sharied Kariem',   role: 'CTO — Chief Technology Officer',  department: 'Executive & Leadership' },
  // Blockchain & Development
  { name: 'Max Bucarelli', role: 'Lead Blockchain Developer', department: 'Blockchain & Development' },
  { name: 'Max Bucarelli', role: 'Smart Contract Developer',  department: 'Blockchain & Development' },
  { name: 'Max Bucarelli', role: 'Backend Developer',         department: 'Blockchain & Development' },
  { name: 'Max Bucarelli', role: 'Frontend Developer',        department: 'Blockchain & Development' },
  { name: 'Max Bucarelli', role: 'Security Expert / Auditor', department: 'Blockchain & Development' },
  // Marketing & Community
  { name: 'Reyes / Dayoasseh', role: 'CMO — Chief Marketing Officer', department: 'Marketing & Community' },
  { name: 'Reyes / Dayoasseh', role: 'Social Media Manager',          department: 'Marketing & Community' },
  { name: '',                  role: 'Community Manager',              department: 'Marketing & Community', open: true },
  { name: 'Hodaa Shahin',      role: 'Content Creator',                department: 'Marketing & Community' },
  { name: 'Hodaa Shahin',      role: 'Graphic Designer',               department: 'Marketing & Community' },
  // Business & Partnerships
  { name: '',              role: 'Business Development Manager', department: 'Business & Partnerships', open: true },
  { name: '',              role: 'Investor Relations Manager',   department: 'Business & Partnerships', open: true },
  { name: 'Virano Goelab', role: 'Legal Advisor',               department: 'Business & Partnerships' },
  // Support & Operations
  { name: '', role: 'Moderator',        department: 'Support & Operations', open: true },
  { name: '', role: 'Support Team',     department: 'Support & Operations', open: true },
  { name: '', role: 'Treasury Manager', department: 'Support & Operations', open: true },
]
