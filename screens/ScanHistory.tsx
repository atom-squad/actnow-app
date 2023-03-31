import React, { useEffect, useState } from 'react';
import { Flex, FormControl, Input, Button, Text, Box } from 'native-base';
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
    console.info(resp.data)
    setHistory(resp.data)
    // navigation.navigate('ScanResults', {
    //   title: 'Results',
    //   response: { ...resp.data, uri: null }
    // })
  }
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Flex direction="column" align="center"  height="100%" marginX="4" marginTop="24px">
    {/* <FormControl marginY="2">
      <FormControl.Label _text={{ bold: true, color: 'black'  }}>Description</FormControl.Label>
      <Input placeholder="Cotton" value={search} onChangeText={(text) => {
          setSearch(text);
          setResult('')
        }} size="lg" marginY="1"  _focus={{borderColor: COLORS.primary, borderWidth: 1}} />
    </FormControl> */}
    {/* {result?.label && <Text>Label: {result.label}</Text>}
    <Text>{result?.description}</Text>
    {result?.factor && <Text>Factor: {result.factor}</Text>}

    {!result && (
      <Button  borderWidth={1} alignItems="center" onPress={sendSearchRequest} backgroundColor={COLORS.primary} width="100%">
        <Text color="white" bold>Submit</Text>
      </Button>
    )} */}
    {history.map(item => <Box flexDirection="row" borderWidth={1} borderColor={COLORS.green60} padding="16px" width="100%" borderRadius={10} marginBottom="16px">
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
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};