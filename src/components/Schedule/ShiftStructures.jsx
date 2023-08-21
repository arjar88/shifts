import ShiftDataTable from "./ShiftDataTable";
import ShiftStructureDropdown from "./ShiftStructureDropdown";
import Grid from "@mui/material/Grid";
const ShiftStructures = () => {
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
        <ShiftDataTable />
      </Grid>
    </Grid>
  );
};

export default ShiftStructures;
