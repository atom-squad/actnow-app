/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ActionsScreen from '../screens/ActionsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { ScanScreen } from '../screens/ScanScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LeaderboardScreen from '../screens/LeaderBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';

import ActionIcon from '../assets/images/actionIcon.svg';
import DashboardIcon from '../assets/images/dashboardIcon.svg';
import ScanIcon from '../assets/images/scanIcon.svg';
import CloseIcon from '../assets/images/closeIcon.svg';
import LeaderboardIcon from '../assets/images/leaderboardIcon.svg';
import SettingsIcon from '../assets/images/settingsIcon.svg';
import { Box, Button, Icon, IconButton, Text } from 'native-base';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import QuizzModal from '../screens/QuizzModal';
import CompletionScreen from '../screens/CompletionScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const EmptyScanTab = () => {
  const navigation = useNavigation();
  // useEffect(() => {
    
  //   navigation.navigate('ScanContainer', {
  //     onGoBack: () => console.log('Will go back from nextComponent'),
  //   });
  // }, [])
  return <></>;
};

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ScanContainer" component={ScanScreen} options={{ title: 'Scan' }  } />
      <Stack.Screen name="CompletionModal" component={CompletionScreen} options={{ headerShown: false, presentation: "fullScreenModal" }   } />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
        <Stack.Screen name="QuizzModal" component={QuizzModal} options={{ title: 'Daily Quizz', headerRight: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <CloseIcon fill={"#000"} />
            </Pressable>
          ), }  } />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ navigation }: RootTabScreenProps<'Dashboard'>) => {
          return ({
            title: 'Dashboard',
            tabBarIcon: ({ color }) => <TabBarIcon icon={DashboardIcon} isFocussed={navigation.isFocused()}/>,
          })}
        }
      />
      <BottomTab.Screen
        name="Actions"
        component={ActionsScreen}
        options={({ navigation }: RootTabScreenProps<'Actions'>) => ({
          title: 'Actions',
          tabBarIcon: ({ color }) => <TabBarIcon icon={ActionIcon} isFocussed={navigation.isFocused()}/>
        })}
      />
      <BottomTab.Screen
        name="Scan"
        component={EmptyScanTab}
        options={({ navigation }: RootTabScreenProps<'Scan'>) => ({
          title: 'Scan',
          tabBarIcon: ({ color }) => <Pressable onPress={() => navigation.navigate('ScanContainer')}><TabBarIcon icon={ScanIcon} isFocussed={navigation.isFocused()}/></Pressable>,
        })}
      />
      <BottomTab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={({ navigation }: RootTabScreenProps<'Leaderboard'>) => ({
          title: 'Leaderboard',
          tabBarIcon: ({ color }) => <TabBarIcon icon={LeaderboardIcon} isFocussed={navigation.isFocused()}/>,
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }: RootTabScreenProps<'Settings'>) => ({
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon icon={SettingsIcon} isFocussed={navigation.isFocused()}/>,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  icon: any;
  color?: string;
  isFocussed: boolean;
}) => {

  const Icon = props.icon;
  return (
    <Box opacity={props.isFocussed ? '1' : '.3'}>
      <Icon />
    </Box>
  );
}
