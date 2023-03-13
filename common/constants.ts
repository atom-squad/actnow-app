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
  emissions: `${BASE_URL}/scanner/emissions`,
  factor: `${BASE_URL}/scanner/factor`,
};

export const COLORS = {
  primary: '#15AA5A',
  white: '#FFFFFF',
  black: '#000000',
  grayLight: '#DBE1E3',
  gray1: '#D1D3D6',
  gray2: '#A1A5AC',
  gray3: '#8B928E',
  gray4: '#4F5552',
purple700: '#3B0060',
purple500Dark: '#7312AD',
purple500Light: '#A43EE2',
purple300: '#C67EF2',
purple100: '#EDDEF7',
background:'#FCFDFD',
redAccent: '#EF4C5F',
darkOrange: '#FF642F',
primaryOrange: '#F89344',
lightOrange: '#F0D5C1',
greenPrimary: '#15AA5A',
green60: '#005F2C',
green40: '#C9F9DF',
green20:'#45CB83',
darkGreen: '#003619'
}