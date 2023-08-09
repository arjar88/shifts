import DataTable from "../WorkerDataTable";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useSelector } from "react-redux";

const WorkerInfo = () => {
  const selectedWorker = useSelector(
    (state) => state.selectedWorker.selectedWorker
  );
  console.log(selectedWorker, "worker");

  return (
    <div>
      <Grid container>
        <Grid item>
          <DataTable worker={selectedWorker}></DataTable>
        </Grid>
      </Grid>
    </div>
  );
};
export default WorkerInfo;
