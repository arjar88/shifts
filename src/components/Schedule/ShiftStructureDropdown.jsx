import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const ShiftStructureDropdown = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const styles = {
    textFieldStyle: {
      width: "12em",
    },
  };
  return (
    <>
      <TextField
        sx={styles.textFieldStyle}
        variant="outlined"
        value={age}
        onChange={handleChange}
        select
        label="Shift Structures"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>
    </>
  );
};

export default ShiftStructureDropdown;
