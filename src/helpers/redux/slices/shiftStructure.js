import { createSlice } from "@reduxjs/toolkit";

export const shiftStructureSlice = createSlice({
  name: "shiftStructureSlice",
  initialState: {
    shiftStructure: [
      { day: "Sunday", numOfShifts: null, workersPerShift: [] },
      { day: "Monday", numOfShifts: null, workersPerShift: [] },
      { day: "Tuesday", numOfShifts: null, workersPerShift: [] },
      { day: "Wednesday", numOfShifts: null, workersPerShift: [] },
      { day: "Thursday", numOfShifts: null, workersPerShift: [] },
      { day: "Friday", numOfShifts: null, workersPerShift: [] },
      { day: "Saturday", numOfShifts: null, workersPerShift: [] },
    ],
  },
  reducers: {
    updateShiftStructure: (state, action) => {},
  },
});
export const { selectWorkerId } = shiftStructureSlice.actions;

export default shiftStructureSlice.reducer;
