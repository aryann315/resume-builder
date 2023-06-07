import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName1: "",
  jobTitle1: "",
  jobLocation1: "",
  workFromDuration1: "",
  workToDuration1: "",
  companyName2: "",
  jobTitle2: "",
  jobLocation2: "",
  workFromDuration2: "",
  workToDuration2: "",
};

const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState: initialState,
  reducers: {
    job1(state, action) {
      state.companyName1 = action.payload.companyName1;
      state.jobTitle1 = action.payload.jobTitle1;
      state.jobLocation1 = action.payload.jobLocation1;
      state.workFromDuration1 = action.payload.workFromDuration1;
      state.workToDuration1 = action.payload.workToDuration1;
    },
    job2(state, action) {
      state.companyName2 = action.payload.companyName2;
      state.jobTitle2 = action.payload.jobTitle2;
      state.jobLocation2 = action.payload.jobLocation2;
      state.workFromDuration2 = action.payload.workFromDuration2;
      state.workToDuration2 = action.payload.workToDuration2;
    },
  },
});

export const workExperienceActions = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
