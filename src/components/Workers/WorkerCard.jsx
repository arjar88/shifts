import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectWorker } from "../../helpers/redux/slices/selectedWorker";

const WorkerCard = ({ worker }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWorkerInfo = (worker) => {
    dispatch(selectWorker(worker));
    navigate("/workerinfo");
  };
  return (
    <div>
      <Card
        sx={{
          width: "12em",
          height: "17em",
          boxShadow: "3em",
          marginTop: "1em",
        }}
        elevation={6}
      >
        <CardContent>
          <Grid
            spacing={8}
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} />
            </Grid>
            <Grid item style={{ marginTop: -20 }}>
              <Typography
                sx={{
                  fontSize: "1.2em",
                  marginTop: "0.5em",
                }}
                color="text.secondary"
              >
                {worker.fName + " " + worker.lName}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={() => handleWorkerInfo(worker)}
                sx={{ height: "1.6em", textTransform: "none" }}
                size="large"
                variant="contained"
              >
                <Typography>Worker Info</Typography>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkerCard;
