import { createSlice } from "@reduxjs/toolkit";

export const shiftStructureSlice = createSlice({
  name: "shiftStructureSlice",
  initialState: {
    //look in notebook for new object structure
    shiftStructures: [
      {
        id: 53495,
        name: "primary shift",
        structure: [
          //when the user selects the number of shifts,the corresponding
          //index in workersPerShift property will show how many there are
          { day: "Sunday", numOfShifts: null, workersPerShift: [] },
          { day: "Monday", numOfShifts: null, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: null, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: null, workersPerShift: [] },
          { day: "Thursday", numOfShifts: null, workersPerShift: [] },
          { day: "Friday", numOfShifts: null, workersPerShift: [] },
          { day: "Saturday", numOfShifts: null, workersPerShift: [] },
        ],
      },
      {
        id: 4566,
        name: "secondary shift",
        structure: [
          { day: "Sunday", numOfShifts: null, workersPerShift: [] },
          { day: "Monday", numOfShifts: null, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: null, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: null, workersPerShift: [] },
          { day: "Thursday", numOfShifts: null, workersPerShift: [] },
          { day: "Friday", numOfShifts: null, workersPerShift: [] },
          { day: "Saturday", numOfShifts: null, workersPerShift: [] },
        ],
      },
      {
        id: 45664,
        name: "random shift",
        structure: [
          { day: "Sunday", numOfShifts: null, workersPerShift: [] },
          { day: "Monday", numOfShifts: null, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: null, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: null, workersPerShift: [] },
          { day: "Thursday", numOfShifts: null, workersPerShift: [] },
          { day: "Friday", numOfShifts: null, workersPerShift: [] },
          { day: "Saturday", numOfShifts: null, workersPerShift: [] },
        ],
      },
      {
        id: 98233,
        name: "night shift",
        structure: [
          { day: "Sunday", numOfShifts: null, workersPerShift: [] },
          { day: "Monday", numOfShifts: null, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: null, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: null, workersPerShift: [] },
          { day: "Thursday", numOfShifts: null, workersPerShift: [] },
          { day: "Friday", numOfShifts: null, workersPerShift: [] },
          { day: "Saturday", numOfShifts: null, workersPerShift: [] },
        ],
      },
    ],
  },
  reducers: {
    updateShiftStructure: (state, action) => {
      const { index, propName, value } = action.payload;
      state.shiftStructures[index][propName] = value;
    },
  },
});
export const { updateShiftStructure } = shiftStructureSlice.actions;

export default shiftStructureSlice.reducer;
