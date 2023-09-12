import { useSelector } from "react-redux";
import ShiftDataTable from "./ShiftDataTable";
import ShiftStructureDropdown from "./ShiftStructureDropdown";
import Grid from "@mui/material/Grid";
const ShiftStructures = () => {
  const { shiftStructures } = useSelector((state) => state.shiftStructures);
  const { selectedStructureId } = useSelector((state) => state.shiftStructures);

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
        <ShiftDataTable
          shiftStructures={shiftStructures}
          selectedStructureId={selectedStructureId}
        />
      </Grid>
    </Grid>
  );
};

export default ShiftStructures;
