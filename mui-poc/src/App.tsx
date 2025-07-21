import { useState } from "react";
import "./App.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  type SelectChangeEvent,
} from "@mui/material";

function App() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack>
      <FormControl fullWidth sx={{ minWidth: "250px" }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default App;
