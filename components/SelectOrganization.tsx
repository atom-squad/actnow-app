import { CheckIcon, FormControl, Select } from "native-base";
import React from "react";

const SelectOrganization = () => {

    const [organization, setOrganization] = React.useState('');
  
    return (
      <FormControl marginY="2" isRequired>
      <FormControl.Label _text={{ bold: true }}>Organization</FormControl.Label>
      <Select minWidth="200" accessibilityLabel="Select your Organization" placeholder="Select your Organization" selectedValue={organization} onValueChange={itemValue => setOrganization(itemValue)}  marginY="1" size="lg" 
        _selectedItem={{
          backgroundColor: "#15AA5A"
        }} >
          <Select.Item label="Langara" value="langara" />
          <Select.Item label="Lancer Container Lines" value="lancer" />
          <Select.Item label="Lahoti Overseas" value="lahoti" />
          <Select.Item label="LandMarc" value="landmarc" />
          <Select.Item label="Lancor Holdings" value="lancor" />
       </Select>
  </FormControl>
    );
  }

  export default SelectOrganization;