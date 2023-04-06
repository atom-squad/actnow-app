import React, { useEffect, useState } from 'react';
import { Flex, FormControl, Input, Button, Text, Box, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useAppDispatch } from '../stores/hooks';

export default function ScanHistory() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    const resp = await server.get(API.history, { dispatch });
    setHistory(resp.data)
  }
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <ScrollView padding={4}>
      <Flex direction="column" align="center"  height="100%" marginTop="24px">
      {history.map(item => <Box key={Math.random()} flexDirection="row" borderWidth={1} borderColor={COLORS.green60} padding="16px" width="100%" borderRadius={10} marginBottom="16px">
        <Box borderWidth={1} borderColor={COLORS.green60} borderRadius={10} alignItems="center" justifyContent="center" paddingX="4px">
          <Text bold fontSize={18} color={COLORS.black}>+25</Text>
          <Text fontSize={10} color={COLORS.black}>Pts</Text>
        </Box>
        <Box paddingX="12px" flexWrap="wrap" width="50%">
          <Text bold>{item.scanObject}</Text>
          <Box flexGrow={1} flexDirection="row">
            <Text style={{flex: 1, width: 1}}>{item.category}</Text>
          </Box>
        </Box>
        <Box paddingLeft="12px">
          <Text textAlign="right">Co2e:</Text>
          <Text bold>{item.scanValue}</Text>
        </Box>
      </Box>)}
    </Flex>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};