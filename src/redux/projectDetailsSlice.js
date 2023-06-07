import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectTitle1: "",
  overview1: "",
  deployedLink1: "",
  githubLink1: "",
  projectTitle2: "",
  overview2: "",
  deployedLink2: "",
  githubLink2: "",
};

const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState: initialState,
  reducers: {
    project1(state, action) {
      state.projectTitle1 = action.payload.projectTitle1;
      state.overview1 = action.payload.overview1;
      state.deployedLink1 = action.payload.deployedLink1;
      state.githubLink1 = action.payload.githubLink1;
    },
    project2(state, action) {
      state.projectTitle2 = action.payload.projectTitle2;
      state.overview2 = action.payload.overview2;
      state.deployedLink2 = action.payload.deployedLink2;
      state.githubLink2 = action.payload.githubLink2;
    },
  },
});

export const projectDetailsActions = projectDetailsSlice.actions;
export default projectDetailsSlice.reducer;
