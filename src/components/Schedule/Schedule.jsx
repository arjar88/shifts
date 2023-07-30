import ScheduleDataTable from "./ScheduleDataTable";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const Schedule = () => {
  const { workers } = useSelector((state) => state.workers);

  return (
    <div>
      <ScheduleDataTable workers={workers}></ScheduleDataTable>
      <Button></Button>
    </div>
  );
};

export default Schedule;
