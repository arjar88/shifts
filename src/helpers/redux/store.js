import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "../redux/slices/workers";
import selectedWorkerIdReducer from "./slices/selectedWorkerId";
import shiftStructureReducer from "./slices/shiftStructure";
import persistConfig from "./persistConfig"; // Import your persistConfig
import { persistReducer } from "redux-persist";

const persistedWorkersReducer = persistReducer(
  { ...persistConfig, key: "workers" },
  workersReducer
);

const persistedShiftStructureReducer = persistReducer(
  { ...persistConfig, key: "shiftStructure" },
  shiftStructureReducer
);

const persistedSelectedWorkerIdReducer = persistReducer(
  { ...persistConfig, key: "selectedWorkerId" },
  selectedWorkerIdReducer
);

export default configureStore({
  reducer: {
    workers: persistedWorkersReducer,
    selectedWorkerId: persistedSelectedWorkerIdReducer,
    shiftStructure: persistedShiftStructureReducer,
  },
});
