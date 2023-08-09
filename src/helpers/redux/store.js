import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "../redux/slices/workers";
import selectedWorkerReducer from "./slices/selectedWorker";

export default configureStore({
  reducer: {
    workers: workersReducer,
    selectedWorker: selectedWorkerReducer,
  },
});
