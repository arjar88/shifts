import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Workers from "./components/Workers/Workers";
import WorkerInfo from "./components/Workers/WorkerInfo";
import Schedule from "./components/Schedule/Schedule";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Menu></Menu>
        </Grid>

        <Grid item xs={10}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createSchedule" element={<Schedule />}></Route>
            <Route path="/workers" element={<Workers />}></Route>
            <Route path="/workerinfo" element={<WorkerInfo />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
