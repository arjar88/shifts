import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector } from "react-redux";

const ShiftStructureDropdown = () => {
  const [age, setAge] = useState("");
  const { shiftStructures } = useSelector((state) => state.shiftStructures);
  console.log(shiftStructures, "dwsd");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const styles = {
    textFieldStyle: {
      width: "14em",
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
        {shiftStructures.map((structure) => (
          <MenuItem key={structure.id} value={structure}>
            {structure.name}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default ShiftStructureDropdown;
