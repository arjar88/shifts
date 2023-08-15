import { display } from "@mui/system";
import { useSelector } from "react-redux";
import WorkerCard from "./WorkerCard";
import Grid from "@mui/material/Grid";

//will display the worker cards to see overall workers.
const Workers = () => {
  const workers = useSelector((state) => state.workers.workers);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={5}
      >
        {workers.map((w, i) => (
          <Grid key={i} item>
            <WorkerCard worker={w} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Workers;
