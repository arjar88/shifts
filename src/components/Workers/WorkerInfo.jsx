import DataTable from "../WorkerDataTable";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useSelector } from "react-redux";

const WorkerInfo = () => {
  const selectedWorkerId = useSelector(
    (state) => state.selectedWorkerId.selectedWorkerId
  );
  const { workers } = useSelector((state) => state.workers);
  const selectedWorker = workers.find(
    (worker) => worker.id === selectedWorkerId
  );
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
