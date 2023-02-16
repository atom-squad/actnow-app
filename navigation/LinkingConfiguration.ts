/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import LeaderboardScreen from '../screens/LeaderBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              DashboardScreen: 'dashboard',
            },
          },
          Actions: {
            screens: {
              ActionsScreen: 'actions',
            },
          },
          Scan: {
            screens: {
              ScanScreen: 'scan',
            },
          },
          Leaderboard: {
            screens: {
              LeaderboardScreen: 'leaderboard',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
