import React, { useState } from 'react';
import { Flex, FormControl, Input, Button, Text } from 'native-base';
import { useAppDispatch } from '../stores/hooks';
import server from '../common/server';
import { API, COLORS } from '../common/constants';
import { useNavigation } from '@react-navigation/native';

export default function ScanSearch() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState({});
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const sendSearchRequest = async () => {
    if (!search) return;
    const resp = await server.get(`${API.factor}/${search}`, { dispatch });
    setResult(resp)
    navigation.navigate('ScanResults', {
      title: 'Results',
      response: { ...resp.data, uri: null }
    })
  }

  return (
    <Flex direction="column" align="center"  height="100%" marginX="4">
      <FormControl marginY="2">
        <FormControl.Label _text={{ bold: true, color: 'black'  }}>Description</FormControl.Label>
        <Input placeholder="Cotton" value={search} onChangeText={(text) => {
            setSearch(text);
            setResult('')
          }} size="lg" marginY="1"  _focus={{borderColor: COLORS.primary, borderWidth: 1}} />
      </FormControl>
      {result?.label && <Text>Label: {result.label}</Text>}
      <Text>{result?.description}</Text>
      {result?.factor && <Text>Factor: {result.factor}</Text>}

      {!result && (
        <Button  borderWidth={1} alignItems="center" onPress={sendSearchRequest} backgroundColor={COLORS.primary} width="100%">
          <Text color="white" bold>Submit</Text>
        </Button>
      )}

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