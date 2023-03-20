/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuizzModal from './screens/QuizzModal';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  SignUp: undefined;
  SignUpOne: undefined;
  SignUpTwo: undefined;
  InitialScreen: undefined;
  LogIn: undefined;
  ScanMain: undefined;
  ScanContainer: undefined;
  ScanHistory: undefined;
  ScanResults: { title: string, response: any };
  ScanSearch: undefined;
  ActionsMain: undefined;
  ActionsType: {actionType: any} ;
  ActionsCongrats: {totalPoints: any, totalUserPoints: number} ;
  QuizzModal: undefined;
  CompletionModal: { points: number };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Dashboard: undefined;
  Actions: undefined;
  Scan: undefined;
  Leaderboard: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
