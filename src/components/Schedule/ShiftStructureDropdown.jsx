import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedStructureId } from "../../helpers/redux/slices/shiftStructures";

const ShiftStructureDropdown = ({ shiftStructures }) => {
  const [structure, setStructure] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setStructure(event.target.value);
    dispatch(updateSelectedStructureId(event.target.value.id));
  };

  const styles = {
    textFieldStyle: {
      width: "14em",
    },
  };
  return (
    <TextField
      sx={styles.textFieldStyle}
      variant="outlined"
      value={structure}
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
  );
};

export default ShiftStructureDropdown;
