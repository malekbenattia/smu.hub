export interface User {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'officer' | 'admin';
  officerType?: 'IT' | 'Logistics' | 'Communications' | 'Finance';
  avatar?: string;
  joinedDate: string;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  memberCount: number;
  recentEvents: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  clubId?: string;
}

export interface JobAlert {
  id: string;
  title: string;
  description: string;
  type: 'IT' | 'Logistics' | 'Communications' | 'Finance' | 'General';
  postedBy: string;
  postedDate: string;
  deadline: string;
  status: 'open' | 'claimed' | 'closed';
  claimedBy?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Message {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  timestamp: string;
  isOfficerOnly: boolean;
}

export const mockUsers: User[] = [
  { id: '1', name: 'Mrs. Mariem Ben Aissa', email: 'mariem.benaissa@smu.edu', role: 'admin', joinedDate: '2020-01-15' },
  { id: '2', name: 'Hechem', email: 'hechem@smu.edu', role: 'officer', officerType: 'IT', joinedDate: '2021-09-01' },
  { id: '3', name: 'Baha', email: 'baha@smu.edu', role: 'officer', officerType: 'Communications', joinedDate: '2022-01-10' },
  { id: '4', name: 'Skander', email: 'skander@smu.edu', role: 'officer', officerType: 'Logistics', joinedDate: '2021-06-15' },
  { id: '5', name: 'Wassim', email: 'wassim@smu.edu', role: 'officer', officerType: 'Finance', joinedDate: '2022-03-20' },
  { id: '6', name: 'Malek', email: 'malek@smu.edu', role: 'member', joinedDate: '2023-09-01' },
  { id: '7', name: 'Maria Garcia', email: 'maria.g@smu.edu', role: 'member', joinedDate: '2023-09-01' },
  { id: '8', name: 'David Kim', email: 'david.k@smu.edu', role: 'member', joinedDate: '2024-01-15' },
];

export const mockClubs: Club[] = [
  {
    id: '1',
    name: 'IEEE SMU',
    description: 'The IEEE Student Branch at SMU fosters technical innovation, professional development, and networking opportunities for engineering and technology students.',
    logo: '/clubs/ieee-logo.png',
    category: 'Technology',
    memberCount: 85,
    recentEvents: ['Tech Talks', 'Workshops', 'Hackathons'],
  },
  {
    id: '2',
    name: 'Securinets SMU',
    description: 'A cybersecurity club dedicated to promoting information security awareness, organizing CTF competitions, and training future security experts.',
    logo: '/clubs/securinets-logo.png',
    category: 'Technology',
    memberCount: 60,
    recentEvents: ['CTF Competitions', 'Security Workshops', 'Awareness Campaigns'],
  },
  {
    id: '3',
    name: 'Melodies Club SMU',
    description: 'The music club of SMU where students explore their musical talents, perform at events, and share their passion for all genres of music.',
    logo: '/clubs/melodies-logo.png',
    category: 'Arts',
    memberCount: 45,
    recentEvents: ['Open Mic Nights', 'Music Workshops', 'Campus Concerts'],
  },
  {
    id: '4',
    name: 'Enactus SMU',
    description: 'A community of student leaders using entrepreneurial action to empower people and shape a better world through social impact projects.',
    logo: '/clubs/enactus-logo.png',
    category: 'Social Entrepreneurship',
    memberCount: 70,
    recentEvents: ['Social Projects', 'Business Competitions', 'Community Outreach'],
  },
  {
    id: '5',
    name: 'JCI SMU Tunis',
    description: 'Junior Chamber International chapter empowering young people to create positive change through leadership development and community impact.',
    logo: '/clubs/jci-logo.png',
    category: 'Social Entrepreneurship',
    memberCount: 55,
    recentEvents: ['Leadership Training', 'Community Service', 'Networking Events'],
  },
  {
    id: '6',
    name: 'Libertad Radio Club SMU',
    description: 'The campus radio station bringing entertainment, music, and student voices to the SMU community through live broadcasts and podcasts.',
    logo: '/clubs/libertad-radio-logo.png',
    category: 'Entertainment',
    memberCount: 35,
    recentEvents: ['Live Shows', 'Podcast Series', 'Music Events'],
  },
  {
    id: '7',
    name: 'Lions SMU Nation',
    description: 'Part of Lions Clubs International, dedicated to community service, humanitarian efforts, and making a positive impact locally and globally.',
    logo: '/clubs/lions-logo.png',
    category: 'NGOs',
    memberCount: 50,
    recentEvents: ['Charity Drives', 'Community Service', 'Humanitarian Projects'],
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Welcome Week Festival',
    description: 'Join us for an exciting week of activities, performances, and networking opportunities for new and returning students.',
    date: '2024-09-05',
    time: '10:00 AM - 6:00 PM',
    location: 'Main Campus Quad',
  },
  {
    id: '2',
    title: 'Leadership Workshop Series',
    description: 'Develop your leadership skills through interactive workshops led by industry professionals.',
    date: '2024-09-12',
    time: '2:00 PM - 5:00 PM',
    location: 'Student Center, Room 301',
  },
  {
    id: '3',
    title: 'Annual Club Fair',
    description: 'Discover all student organizations and find your community. Over 20 clubs will be represented.',
    date: '2024-09-15',
    time: '11:00 AM - 4:00 PM',
    location: 'University Commons',
  },
  {
    id: '4',
    title: 'Charity Gala Night',
    description: 'A formal evening of entertainment and fundraising for local community initiatives.',
    date: '2024-10-20',
    time: '7:00 PM - 11:00 PM',
    location: 'Grand Ballroom',
  },
  {
    id: '5',
    title: 'End of Semester Celebration',
    description: 'Celebrate the end of the semester with food, music, and awards for outstanding contributions.',
    date: '2024-12-10',
    time: '5:00 PM - 9:00 PM',
    location: 'Student Life Plaza',
  },
];

export const mockJobAlerts: JobAlert[] = [
  {
    id: '1',
    title: 'Event Setup Volunteers Needed',
    description: 'Help set up chairs, tables, and decorations for the Welcome Week Festival.',
    type: 'Logistics',
    postedBy: 'Skander',
    postedDate: '2024-08-28',
    deadline: '2024-09-04',
    status: 'open',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Social Media Content Creator',
    description: 'Create engaging posts and stories for our upcoming events. Experience with Canva preferred.',
    type: 'Communications',
    postedBy: 'Baha',
    postedDate: '2024-08-30',
    deadline: '2024-09-10',
    status: 'open',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Website Update Assistant',
    description: 'Help update the Student Life website with new event information and photos.',
    type: 'IT',
    postedBy: 'Hechem',
    postedDate: '2024-08-25',
    deadline: '2024-09-01',
    status: 'claimed',
    claimedBy: 'Malek',
    priority: 'medium',
  },
  {
    id: '4',
    title: 'Budget Report Compilation',
    description: 'Assist in compiling budget reports for Q3 club activities.',
    type: 'Finance',
    postedBy: 'Wassim',
    postedDate: '2024-08-29',
    deadline: '2024-09-15',
    status: 'open',
    priority: 'low',
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    authorId: '2',
    authorName: 'Hechem',
    content: 'IT systems check completed for Welcome Week. All good to go!',
    timestamp: '2024-08-30T10:30:00',
    isOfficerOnly: true,
  },
  {
    id: '2',
    authorId: '3',
    authorName: 'Baha',
    content: 'Social media campaign for Club Fair is live. Please share on your personal accounts!',
    timestamp: '2024-08-30T14:15:00',
    isOfficerOnly: true,
  },
  {
    id: '3',
    authorId: '1',
    authorName: 'Mrs. Mariem Ben Aissa',
    content: 'Great work everyone! Let\'s have a quick sync meeting tomorrow at 3 PM.',
    timestamp: '2024-08-30T16:00:00',
    isOfficerOnly: true,
  },
];