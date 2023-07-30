import ScheduleDataTable from "./ScheduleDataTable";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const Schedule = () => {
  const { workers } = useSelector((state) => state.workers);

  return (
    <div>
      <ScheduleDataTable workers={workers}></ScheduleDataTable>
      <Button
        sx={{ height: "1.6em", textTransform: "none" }}
        size="large"
        variant="contained"
      >
        Create Schedule
      </Button>
    </div>
  );
};

export default Schedule;
