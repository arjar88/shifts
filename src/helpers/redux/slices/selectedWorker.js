import { createSlice } from "@reduxjs/toolkit";

export const selectedWorkerSlice = createSlice({
  name: "selectedWorker",
  initialState: {
    selectedWorker: {},
  },
  reducers: {
    selectWorker: (state, action) => {
      state.selectedWorker = action.payload;
    },
  },
});
export const { selectWorker } = selectedWorkerSlice.actions;

export default selectedWorkerSlice.reducer;
