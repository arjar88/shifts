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

  const headers = [
    "First Name",
    "Last Name",
    "Age",
    "Salary",
    "Travel",
    "Location",
    "Phone Number",
    "Email",
    "101 Form",
  ];

  return (
    <div>
      <Grid container>
        <Grid item>
          <DataTable worker={selectedWorker} headers={headers}></DataTable>
        </Grid>
      </Grid>
    </div>
  );
};
export default WorkerInfo;
