import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  type SelectChangeEvent,
} from '@mui/material';
import CustomButton from './components/ui/CustomButton';

function App() {
  const [age, setAge] = useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack>
      <FormControl
        fullWidth
        sx={{
          minWidth: '250px',
          gap: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'10'}>Ten</MenuItem>
          <MenuItem value={'20'}>Twenty</MenuItem>
          <MenuItem value={'30'}>Thirty</MenuItem>
        </Select>
        <CustomButton variant="primary">Click me</CustomButton>
        <CustomButton variant="outline">Click me</CustomButton>
        <CustomButton variant="primary" disabled>
          Click me
        </CustomButton>
      </FormControl>
    </Stack>
  );
}

export default App;
