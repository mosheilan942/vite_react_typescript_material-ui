import React, { useState, useRef } from 'react'
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField, FormControl, Checkbox, Box, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCart from "./ShoppingCart";
import MyModal from "./MyModal";
import TabsMain from "./TabsMain";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  const [age, setAge] = React.useState('');
  const valueRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const sendValue = () => {
    if (valueRef.current && textRef.current) {
      textRef.current.textContent = valueRef.current.value;
      return console.log(valueRef.current.value);
    }
  };


  return (
    <>
      <h1 ref={textRef}></h1>
      <Button
        variant="outlined"
        color="info"
        onClick={() => sendValue()}
        endIcon={<InfoIcon />}>
        Use text
      </Button>
      <TextField
        label='text...'
        inputRef={valueRef}
        sx={{
          backgroundColor: 'pink'
        }}
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 45,
            },
          }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              backgroundColor: 'red'
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <br />
      <br />
      <ShoppingCart />
      <br />
      <br />
      <br />
      <MyModal />
      <br />
      <br />
      <br />
      <TabsMain/>
    </>

  )
}

export default App