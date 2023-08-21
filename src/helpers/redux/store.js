import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "../redux/slices/workers";
import selectedWorkerIdReducer from "./slices/selectedWorkerId";
import shiftStructuresReducer from "./slices/shiftStructures";
import persistConfig from "./persistConfig"; // Import your persistConfig
import { persistReducer } from "redux-persist";

const persistedWorkersReducer = persistReducer(
  { ...persistConfig, key: "workers" },
  workersReducer
);

const persistedShiftStructuresReducer = persistReducer(
  { ...persistConfig, key: "shiftStructures" },
  shiftStructuresReducer
);

const persistedSelectedWorkerIdReducer = persistReducer(
  { ...persistConfig, key: "selectedWorkerId" },
  selectedWorkerIdReducer
);

export default configureStore({
  reducer: {
    workers: persistedWorkersReducer,
    selectedWorkerId: persistedSelectedWorkerIdReducer,
    shiftStructures: persistedShiftStructuresReducer,
  },
});
