export const BASE_URL =
  'https://actnow.wmdd4950.com'; //'http://localhost:3000';

export const API = {
  signup: `${BASE_URL}/auth/signup`,
  login: `${BASE_URL}/auth/login`,
  orgDptments: `${BASE_URL}/auth/org-departments`,
  user: `${BASE_URL}/user`,
  points: `${BASE_URL}/user/points`,
  actions: `${BASE_URL}/actions`,
  dashboard: `${BASE_URL}/dashboard`,
  leaderboard: `${BASE_URL}/leaderboard`,
  scanner: `${BASE_URL}/scanner`,
  emissions: `${BASE_URL}/scanner/emission`,
  history: `${BASE_URL}/scanner/history`,
  factor: `${BASE_URL}/scanner/factor`,
  quizzQuestions: `${BASE_URL}/quiz/questions`,
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

export const LEVELS = [
  {
    number: 1,
    name: 'Amateur',
    startLimit: 0,
    endLimit: 500
  },
  {
    number: 2,
    name: 'Prairie Fairy',
    startLimit: 501,
    endLimit: 1000
  },
  {
    number: 3,
    name: 'The Enviro',
    startLimit: 1001,
    endLimit: 1500
  },
  {
    number: 4,
    name: 'Tree Hugger',
    startLimit: 1501,
    endLimit: 2000
  },
  {
    number: 5,
    name: 'Ecohippie',
    startLimit: 2001,
    endLimit: 2500
  },
  {
    number: 6,
    name: 'The Ecocrazy',
    startLimit: 2501,
    endLimit: 3000
  },
  {
    number: 7,
    name: 'Nature Lover',
    startLimit: 3001,
    endLimit: 3500
  },
  {
    number: 8,
    name: 'The Ecofreak',
    startLimit: 3501,
    endLimit: 4000
  },
  {
    number: 9,
    name: 'Green Activist',
    startLimit: 4001,
    endLimit: 4500
  },
  {
    number: 10,
    name: 'Environmentalist',
    startLimit: 4501,
    endLimit: 10000
  },
]