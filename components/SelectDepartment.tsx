import { FormControl, Select } from "native-base";
import * as React from "react";
import { COLORS } from "../common/constants";

const SelectDepartment = () => {

    const [department, setDepartment] = React.useState('');

    return (
      <FormControl marginY="2"  isRequired>
          <FormControl.Label _text={{ bold: true,  color: 'black' }}>Department</FormControl.Label>
          <Select minWidth="200" accessibilityLabel="Select your Department" placeholder="Select your Department" selectedValue={department} onValueChange={itemValue => setDepartment(itemValue)}  marginY="1" size="lg" 
            _selectedItem={{
              backgroundColor: COLORS.greenPrimary
            }} >
              <Select.Item label="Marketing" value="marketing" />
              <Select.Item label="Finance" value="finance" />
              <Select.Item label="Human Resource" value="hr" />
              <Select.Item label="Customer Service" value="cs" />
              <Select.Item label="IT" value="it" />
          </Select>
      </FormControl>
    );
  }

  export default SelectDepartment;