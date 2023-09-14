import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedStructureId } from "../../helpers/redux/slices/shiftStructures";

const ShiftStructureDropdown = () => {
  const [selectedStructure, setSelectedStructure] = useState(null);
  const { shiftStructures } = useSelector((state) => state.shiftStructures);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStructure(selectedValue);
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
      value={selectedStructure || ""}
      //Material-UI might internally handle rendering only a specific property (in this case, the name)
      //from the object when displaying the selected value in the dropdown for user-friendliness,
      // even though the whole object is still stored as the value.
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
