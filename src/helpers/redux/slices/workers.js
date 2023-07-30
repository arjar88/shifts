import { createSlice } from "@reduxjs/toolkit";

export const workersSlice = createSlice({
  name: "medicine",
  initialState: {
    workers: [
      {
        fName: "Chana leah",
        lName: "Levin",
        age: 23,
        salary: 50,
        travel: true,
        location: "Ashdod",
        pNumber: "0503323456",
        email: "worker@gmail.com",
        formFilled: true,
        weekOne: { morning: true, night: false },
        weekTwo: { morning: true, night: false },
      },
      {
        fName: "John",
        lName: "Doe",
        age: 30,
        salary: 70,
        travel: false,
        location: "New York",
        pNumber: "1234567890",
        email: "john.doe@example.com",
        formFilled: false,
        weekOne: { morning: false, night: true },
        weekTwo: { morning: false, night: true },
      },
      {
        fName: "Emma",
        lName: "Smith",
        age: 28,
        salary: 60,
        travel: true,
        location: "London",
        pNumber: "9876543210",
        email: "emma.smith@example.com",
        formFilled: true,
        weekOne: { morning: true, night: true },
        weekTwo: { morning: false, night: false },
      },
      {
        fName: "Michael",
        lName: "Johnson",
        age: 35,
        salary: 80,
        travel: true,
        location: "Los Angeles",
        pNumber: "5551234567",
        email: "michael.johnson@example.com",
        formFilled: false,
        weekOne: { morning: true, night: false },
        weekTwo: { morning: true, night: false },
      },
      {
        fName: "Sophia",
        lName: "Garcia",
        age: 25,
        salary: 55,
        travel: false,
        location: "Barcelona",
        pNumber: "34987654321",
        email: "sophia.garcia@example.com",
        formFilled: true,
        weekOne: { morning: false, night: true },
        weekTwo: { morning: true, night: false },
      },
    ],
  },
  reducers: {
    addWorkers: (state, action) => {
      state.push(...action.payload);
    },
  },
});
export const { addWorkers, decrement } = workersSlice.actions;

export default workersSlice.reducer;
