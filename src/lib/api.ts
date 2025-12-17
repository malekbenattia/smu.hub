import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (name: string, email: string, password: string) =>
    api.post('/auth/register', { name, email, password }),
  getMe: () => api.get('/auth/me'),
};

// Users API
export const usersAPI = {
  getAll: () => api.get('/users'),
  getById: (id: string) => api.get(`/users/${id}`),
  create: (data: { name: string; email: string; password: string; role?: string; officerType?: string }) =>
    api.post('/users', data),
  update: (id: string, data: Partial<{ name: string; email: string; role: string; officerType?: string }>) =>
    api.put(`/users/${id}`, data),
  delete: (id: string) => api.delete(`/users/${id}`),
};

// Clubs API
export const clubsAPI = {
  getAll: () => api.get('/clubs'),
  getById: (id: string) => api.get(`/clubs/${id}`),
  create: (data: { name: string; description: string; category: string; logo?: string }) =>
    api.post('/clubs', data),
  update: (id: string, data: Partial<{ name: string; description: string; category: string; logo?: string }>) =>
    api.put(`/clubs/${id}`, data),
  delete: (id: string) => api.delete(`/clubs/${id}`),
};

// Events API
export const eventsAPI = {
  getAll: () => api.get('/events'),
  getById: (id: string) => api.get(`/events/${id}`),
  create: (data: { title: string; description: string; date: string; time: string; location: string; image?: string; clubId?: string }) =>
    api.post('/events', data),
  update: (id: string, data: Partial<{ title: string; description: string; date: string; time: string; location: string }>) =>
    api.put(`/events/${id}`, data),
  delete: (id: string) => api.delete(`/events/${id}`),
};

// Job Alerts API
export const jobAlertsAPI = {
  getAll: () => api.get('/jobalerts'),
  getById: (id: string) => api.get(`/jobalerts/${id}`),
  create: (data: { title: string; description: string; type: string; deadline: string; priority: string }) =>
    api.post('/jobalerts', data),
  update: (id: string, data: Partial<{ title: string; description: string; status: string }>) =>
    api.put(`/jobalerts/${id}`, data),
  claim: (id: string) => api.put(`/jobalerts/${id}/claim`),
  delete: (id: string) => api.delete(`/jobalerts/${id}`),
};

// Messages API
export const messagesAPI = {
  getAll: () => api.get('/messages'),
  create: (data: { content: string }) => api.post('/messages', data),
};

export default api;
