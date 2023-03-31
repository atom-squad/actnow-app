import { CheckIcon, FormControl, Select } from "native-base";
import React from "react";
import { COLORS } from "../common/constants";

const SelectOrganization = ({organizationsList, setOrganization, errors}) => {
  
    return (
      <FormControl marginY="2" isRequired isInvalid={'organization' in errors}>
        <FormControl.Label _text={{ bold: true,  color: 'black', fontFamily: 'albert-semibold' }}>Organization</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Select your Organization" placeholder="Select your Organization" onValueChange={itemValue => setOrganization(itemValue)}  marginY="1" size="lg" 
         _selectedItem={{
            backgroundColor: COLORS.greenPrimary,
            color: COLORS.white
          }} >
            {(organizationsList.length > 0)?
              organizationsList.map((org, index) => (
                <Select.Item label={org.name} value={index} key={index} />
              ))
            : <></> 
            }
       </Select>
       <FormControl.ErrorMessage _text={{
          fontSize: 'xs',
          color: COLORS.darkOrange
          }}>
          Organization required
        </FormControl.ErrorMessage>
      </FormControl>
    );
  }

  export default SelectOrganization;