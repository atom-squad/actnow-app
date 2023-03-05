import React, { useState } from 'react';
import { Flex, FormControl, Input, Button, Text } from 'native-base';
import { makeRequest } from '../common/api';
import { useAppDispatch } from '../stores/hooks';

export default function ScanSearch() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState({});
  const dispatch = useAppDispatch();

  const sendSearchRequest = async () => {
    if (!search) return;
    const resp = await makeRequest(`/scanner/factor/${search}`, 'GET', {}, false, dispatch)
    setResult(resp)
    console.info('resp', JSON.stringify(resp));
  }

  return (
    <Flex direction="column" align="center"  height="100%" marginX="4">
      <FormControl marginY="2">
        <FormControl.Label _text={{ bold: true, color: 'black'  }}>Description</FormControl.Label>
        <Input placeholder="Cotton" value={search} onChangeText={(text) => {
            setSearch(text);
            setResult('')
          }} size="lg" marginY="1"  _focus={{borderColor: "#15AA5A", borderWidth: 1}} />
      </FormControl>
      {result?.label && <Text>Label: {result.label}</Text>}
      <Text>{result?.description}</Text>
      {result?.factor && <Text>Factor: {result.factor}</Text>}

      {!result && (
        <Button  borderWidth={1} alignItems="center" onPress={sendSearchRequest} backgroundColor={"#15AA5A"} width="100%">
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