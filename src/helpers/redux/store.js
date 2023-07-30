import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "../redux/slices/workers";

export default configureStore({
  reducer: {
    workers: workersReducer,
  },
});
