import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage, // the storage engine where the persisted state will be stored
  whitelist: ["workers", "selectedWorkerId"], // Reducers to persist
};

export default persistConfig;
