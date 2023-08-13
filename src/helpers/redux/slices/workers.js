import { createSlice } from "@reduxjs/toolkit";

export const workersSlice = createSlice({
  name: "workers",
  initialState: {
    //root-level property because it's directly nested under the initialState object of your Redux slice.
    workers: [
      {
        id: 3232,
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
        role: { title: "Shift Manager", roleId: 3 },
      },
      {
        id: 3443433,
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
        role: { title: "Manager", roleId: 2 },
      },
      {
        id: 38978732,
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
        role: { title: "Cashier", roleId: 4 },
      },
      {
        id: 2121232,
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
        role: { title: "worker", roleId: 5 },
      },
      {
        id: 3323223552,
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
        role: { title: "worker", roleId: 5 },
      },
      {
        id: 332872232,
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
        role: { title: "worker", roleId: 5 },
      },
      {
        id: 332872235,
        fName: "Noah",
        lName: "Brown",
        age: 22,
        salary: 45,
        travel: false,
        location: "Sydney",
        pNumber: "61234567890",
        email: "noah.brown@example.com",
        formFilled: true,
        weekOne: { morning: true, night: true },
        weekTwo: { morning: true, night: true },
        role: { title: "worker", roleId: 5 },
      },
      {
        id: 332872236,
        fName: "Liam",
        lName: "Martinez",
        age: 27,
        salary: 60,
        travel: true,
        location: "Los Angeles",
        pNumber: "13287654321",
        email: "liam.martinez@example.com",
        formFilled: true,
        weekOne: { morning: true, night: true },
        weekTwo: { morning: false, night: true },
        role: { title: "manager", roleId: 2 },
      },
      {
        id: 332872237,
        fName: "Ava",
        lName: "Nguyen",
        age: 24,
        salary: 55,
        travel: false,
        location: "Tokyo",
        pNumber: "81234567890",
        email: "ava.nguyen@example.com",
        formFilled: true,
        weekOne: { morning: true, night: true },
        weekTwo: { morning: true, night: false },
        role: { title: "worker", roleId: 5 },
      },
      // Add more objects here with different names and IDs...
      {
        id: 332872238,
        fName: "Jackson",
        lName: "Kim",
        age: 29,
        salary: 70,
        travel: true,
        location: "Seoul",
        pNumber: "82123456789",
        email: "jackson.kim@example.com",
        formFilled: true,
        weekOne: { morning: true, night: false },
        weekTwo: { morning: false, night: true },
        role: { title: "manager", roleId: 2 },
      },
      {
        id: 332872239,
        fName: "Sophie",
        lName: "Lee",
        age: 26,
        salary: 58,
        travel: true,
        location: "Paris",
        pNumber: "33123456789",
        email: "sophie.lee@example.com",
        formFilled: false,
        weekOne: { morning: false, night: true },
        weekTwo: { morning: true, night: false },
        role: { title: "worker", roleId: 5 },
      },
      {
        id: 332872240,
        fName: "Henry",
        lName: "Gupta",
        age: 31,
        salary: 72,
        travel: true,
        location: "Mumbai",
        pNumber: "91234567890",
        email: "henry.gupta@example.com",
        formFilled: true,
        weekOne: { morning: true, night: true },
        weekTwo: { morning: true, night: true },
        role: { title: "manager", roleId: 2 },
      },
      // Add more objects here with different names and IDs...
      {
        id: 332872241,
        fName: "Mia",
        lName: "Gonzalez",
        age: 23,
        salary: 52,
        travel: false,
        location: "Mexico City",
        pNumber: "52123456789",
        email: "mia.gonzalez@example.com",
        formFilled: true,
        weekOne: { morning: true, night: false },
        weekTwo: { morning: false, night: true },
        role: { title: "worker", roleId: 5 },
      },
    ],
  },
  reducers: {
    addWorkers: (state, action) => {
      state.push(...action.payload);
    },
    updateWorker: (state, action) => {
      const { workerId, propName, value } = action.payload;
      const index = state.workers.findIndex((worker) => worker.id === workerId);

      const workerToUpdate = state.workers[index];
      workerToUpdate[propName] = value;
      state.workers[index] = workerToUpdate;
    },
  },
});
export const { addWorkers, updateWorker } = workersSlice.actions;

export default workersSlice.reducer;
