import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "../redux/slices/workers";
import selectedWorkerIdReducer from "./slices/selectedWorkerId";

export default configureStore({
  reducer: {
    workers: workersReducer,
    selectedWorkerId: selectedWorkerIdReducer,
  },
});
