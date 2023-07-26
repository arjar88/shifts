import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/system/Unstable_Grid/Grid";

const WorkerCard = ({ name }) => {
  console.log("was in worker component");
  return (
    <div>
      <Card
        sx={{
          width: "11em",
          height: "18em",
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
                  marginTop: "1em",
                }}
                color="text.secondary"
              >
                {name}
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <Button
                sx={{ height: "1.6em", textTransform: "none" }}
                size="large"
                variant="contained"
              >
                <Typography>See Worker</Typography>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkerCard;
