import React from 'react';
import { Box, Flex, HStack, Image, Pressable, Text, View, VStack } from 'native-base';
import { RootTabScreenProps } from '../types';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import UserHeader from '../components/UserHeader';
import { COLORS } from '../common/constants';
import { StyleSheet } from 'react-native';
import { updateToken } from '../stores/slices/userSlice';
import localStorage from '../common/localStorage';

export default function SettingsScreen({ navigation }: RootTabScreenProps<'Settings'>) {

  let { userSection } = useAppSelector((state) => state.dashboard);
  let dispatch = useAppDispatch();
  const logOutIcon = require('../assets/images/logoutIcon.png');

  const handleLogout = async () => {
    await localStorage.removeItem('token');
    dispatch?.(updateToken(''));
  }

  return (
    <Flex direction='column' padding={4} >
      <UserHeader userSection={userSection} />
      <Box marginTop={10} >
        <VStack>
          <Pressable onPress={handleLogout}>
            {({
              isPressed
            }) => {
              return <HStack style={styles.option} backgroundColor={isPressed ? COLORS.lightOrange: ''}>
                <Image source={logOutIcon} alt="logout icon" size={5} resizeMode="contain" paddingX={5} />
                <Text>Log Out</Text>
              </HStack>
            }}
          </Pressable>
        </VStack>
      </Box>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  option: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10
  }
});