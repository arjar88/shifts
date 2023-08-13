import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["workers", "selectedWorkerId"], // Reducers to persist
};

export default persistConfig;