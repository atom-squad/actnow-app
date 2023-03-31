import { FormControl, Select } from "native-base";
import * as React from "react";
import { COLORS } from "../common/constants";

const SelectDepartment = ({organization, setDepartment, errors}) => {

    return (
      <FormControl marginY="2"  isRequired isInvalid={'department' in errors}>
          <FormControl.Label _text={{ bold: true,  color: 'black', fontFamily: 'albert-semibold' }}>Department</FormControl.Label>
          <Select minWidth="200" accessibilityLabel="Select your Department" placeholder="Select your Department" onValueChange={itemValue => setDepartment(itemValue)}  marginY="1" size="lg" 
            _selectedItem={{
              backgroundColor: COLORS.greenPrimary,
              color: COLORS.white
            }} >
              {(organization && organization.departments && organization.departments.length > 0)?
                organization.departments.map((department) => (
                  <Select.Item label={department.name} value={department.id} key={department.id} />
                ))
                : <></>
              }
          </Select>
          <FormControl.ErrorMessage _text={{
            fontSize: 'xs',
            color: COLORS.darkOrange
            }}>
            Department required
          </FormControl.ErrorMessage>
      </FormControl>
    );
  }

  export default SelectDepartment;