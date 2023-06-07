import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instituteName1: "",
  instituteName2: "",
  instituteName3: "",
  courseName1: "",
  courseName2: "",
  courseName3: "",
  courseFromDuration1: "",
  courseFromDuration2: "",
  courseFromDuration3: "",
  courseToDuration1: "",
  courseToDuration2: "",
  courseToDuration3: "",
  coursePercentage1: "",
  coursePercentage2: "",
  coursePercentage3: "",
};

const educationDetailsSlice = createSlice({
  name: "educationDetails",
  initialState: initialState,
  reducers: {
    graduation(state, action) {
      state.instituteName1 = action.payload.instituteName1;
      state.courseName1 = action.payload.courseName1;
      state.courseFromDuration1 = action.payload.courseFromDuration1;
      state.courseToDuration1 = action.payload.courseToDuration1;
      state.coursePercentage1 = action.payload.coursePercentage1;
    },
    seniorSecondary(state, action) {
      state.instituteName2 = action.payload.instituteName2;
      state.courseName2 = action.payload.courseName2;
      state.courseFromDuration2 = action.payload.courseFromDuration2;
      state.courseToDuration2 = action.payload.courseToDuration2;
      state.coursePercentage2 = action.payload.coursePercentage2;
    },
    highSchool(state, action) {
      state.instituteName3 = action.payload.instituteName3;
      state.courseName3 = action.payload.courseName3;
      state.courseFromDuration3 = action.payload.courseFromDuration3;
      state.courseToDuration3 = action.payload.courseToDuration3;
      state.coursePercentage3 = action.payload.coursePercentage3;
    },
  },
});

export const educationDetailsActions = educationDetailsSlice.actions;
export default educationDetailsSlice.reducer;
