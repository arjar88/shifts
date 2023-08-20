import ShiftDataTable from "./ShiftDataTable";
import ShiftStructureDropdown from "./shiftStructureDropdown";
import Grid from "@mui/material/Grid";
const EditShiftStructure = () => {
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

export default EditShiftStructure;
