export const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://actnow.wmdd4950.com' : 'http://localhost:3000';

export const API = {
  signup: `${BASE_URL}/auth/signup`,
  login: `${BASE_URL}/auth/login`,
  user: `${BASE_URL}/user`,
  actions: `${BASE_URL}/actions`,
  dashboard: `${BASE_URL}/dashboard`,
  leaderboard: `${BASE_URL}/leaderboard`,
  scanner: `${BASE_URL}/scanner`,
};