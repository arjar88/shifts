import DataTable from "../WorkerDataTable";
import Grid from "@mui/system/Unstable_Grid/Grid";

const WorkerInfo = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <DataTable></DataTable>
        </Grid>
      </Grid>
    </div>
  );
};
export default WorkerInfo;
