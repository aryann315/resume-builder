import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  dob: "",
};

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState: initialState,
  reducers: {
    personalDetails(state, action) {
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.lastName = action.payload.lastName;
      state.dob = action.payload.dob;
      state.email = action.payload.email;
      state.contactNumber = action.payload.contactNumber;
    },
  },
});

export const personalDetailsActions = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
