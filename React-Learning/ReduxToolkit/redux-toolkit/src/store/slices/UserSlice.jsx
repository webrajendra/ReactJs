import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});
console.log(users.actions)
export { users };