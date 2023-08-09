import { createSlice } from "@reduxjs/toolkit";

export const selectedWorkerIdSlice = createSlice({
  name: "selectedWorkerId",
  initialState: {
    selectedWorkerId: "",
  },
  reducers: {
    selectWorkerId: (state, action) => {
      state.selectedWorkerId = action.payload;
    },
  },
});
export const { selectWorkerId } = selectedWorkerIdSlice.actions;

export default selectedWorkerIdSlice.reducer;
