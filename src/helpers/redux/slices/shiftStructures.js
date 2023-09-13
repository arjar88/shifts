import { createSlice } from "@reduxjs/toolkit";

export const shiftStructureSlice = createSlice({
  name: "shiftStructureSlice",
  initialState: {
    //look in notebook for new object structure
    shiftStructures: [
      {
        id: 53495,
        name: "primary",
        structure: [
          //when the user selects the number of shifts,the corresponding
          //index in workersPerShift property will show how many there are
          { day: "Sunday", numOfShifts: 1, workersPerShift: [] },
          { day: "Monday", numOfShifts: 1, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: 1, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: 1, workersPerShift: [] },
          { day: "Thursday", numOfShifts: 1, workersPerShift: [] },
          { day: "Friday", numOfShifts: 2, workersPerShift: [] },
          { day: "Saturday", numOfShifts: 2, workersPerShift: [] },
        ],
      },
      {
        id: 4566,
        name: "secondary",
        structure: [
          { day: "Sunday", numOfShifts: 2, workersPerShift: [] },
          { day: "Monday", numOfShifts: 2, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: 2, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: 2, workersPerShift: [] },
          { day: "Thursday", numOfShifts: 2, workersPerShift: [] },
          { day: "Friday", numOfShifts: 2, workersPerShift: [] },
          { day: "Saturday", numOfShifts: 2, workersPerShift: [] },
        ],
      },
      {
        id: 45664,
        name: "random",
        structure: [
          { day: "Sunday", numOfShifts: 2, workersPerShift: [] },
          { day: "Monday", numOfShifts: 2, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: 2, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: 2, workersPerShift: [] },
          { day: "Thursday", numOfShifts: 2, workersPerShift: [] },
          { day: "Friday", numOfShifts: 2, workersPerShift: [] },
          { day: "Saturday", numOfShifts: 2, workersPerShift: [] },
        ],
      },
      {
        id: 98233,
        name: "night",
        structure: [
          { day: "Sunday", numOfShifts: 2, workersPerShift: [] },
          { day: "Monday", numOfShifts: 2, workersPerShift: [] },
          { day: "Tuesday", numOfShifts: 2, workersPerShift: [] },
          { day: "Wednesday", numOfShifts: 2, workersPerShift: [] },
          { day: "Thursday", numOfShifts: 2, workersPerShift: [] },
          { day: "Friday", numOfShifts: 2, workersPerShift: [] },
          { day: "Saturday", numOfShifts: 2, workersPerShift: [] },
        ],
      },
    ],
    selectedStructureId: null,
  },
  reducers: {
    updateShiftStructure: (state, action) => {
      const { id, day, propName, value } = action.payload;
      const strucToUpdate = state.shiftStructures.find((s) => s.id === id);
      const strucDay = strucToUpdate.structure.find((s) => s.day === day);
      strucDay[propName] = value;
    },
    updateSelectedStructureId: (state, action) => {
      state.selectedStructureId = action.payload;
    },
  },
});
export const { updateShiftStructure, updateSelectedStructureId } =
  shiftStructureSlice.actions;

export default shiftStructureSlice.reducer;
