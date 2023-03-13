import { CheckIcon, FormControl, Select } from "native-base";
import React from "react";
import { COLORS } from "../common/constants";

const SelectOrganization = () => {

    const [organization, setOrganization] = React.useState('');
  
    return (
      <FormControl marginY="2" isRequired>
        <FormControl.Label _text={{ bold: true,  color: 'black' }}>Organization</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Select your Organization" placeholder="Select your Organization" selectedValue={organization} onValueChange={itemValue => setOrganization(itemValue)}  marginY="1" size="lg" 
         _selectedItem={{
            backgroundColor: COLORS.greenPrimary
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