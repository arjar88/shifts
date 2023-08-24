import { useSelector } from "react-redux";
import ShiftDataTable from "./ShiftDataTable";
import ShiftStructureDropdown from "./ShiftStructureDropdown";
import Grid from "@mui/material/Grid";
const ShiftStructures = () => {
  const selectedStructure = useSelector(
    (state) => state.shiftStructures.selectedStructure
  );
  return (
    <Grid
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="flex-end"
      container
    >
      <Grid item>
        <ShiftStructureDropdown />
      </Grid>
      <Grid item>
        <ShiftDataTable selectedStructure={selectedStructure} />
      </Grid>
    </Grid>
  );
};

export default ShiftStructures;
