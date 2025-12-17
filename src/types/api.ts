export interface User {
  _id: string;
  id?: string;
  name: string;
  email: string;
  role: 'member' | 'officer' | 'admin';
  officerType?: 'IT' | 'Logistics' | 'Communications' | 'Finance';
  avatar?: string;
  createdAt: string;
}

export interface Club {
  _id: string;
  id?: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  memberCount: number;
  recentEvents: string[];
  createdAt: string;
}

export interface Event {
  _id: string;
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  clubId?: string;
  createdAt: string;
}

export interface JobAlert {
  _id: string;
  id?: string;
  title: string;
  description: string;
  type: 'IT' | 'Logistics' | 'Communications' | 'Finance' | 'General';
  postedBy: string | { _id: string; name: string };
  postedDate: string;
  deadline: string;
  status: 'open' | 'claimed' | 'closed';
  claimedBy?: string | { _id: string; name: string };
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export interface Message {
  _id: string;
  id?: string;
  author: { _id: string; name: string };
  content: string;
  createdAt: string;
  isOfficerOnly: boolean;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user?: User;
}

export interface ApiError {
  success: false;
  error: string;
}

// Helper to normalize MongoDB _id to id
export const normalizeId = <T extends { _id: string; id?: string }>(item: T): T & { id: string } => ({
  ...item,
  id: item._id,
});

export const normalizeIds = <T extends { _id: string; id?: string }>(items: T[]): (T & { id: string })[] =>
  items.map(normalizeId);
