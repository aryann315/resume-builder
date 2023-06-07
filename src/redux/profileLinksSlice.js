import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  linkedin: "",
  github: "",
  portfolio: "",
  leetcode: "",
  gfg: "",
  codechef: "",
};

const profileLinksSlice = createSlice({
  name: "profileLinks",
  initialState: initialState,
  reducers: {
    profileLinks(state, action) {
      state.linkedin = action.payload.linkedin;
      state.github = action.payload.github;
      state.portfolio = action.payload.portfolio;
      state.leetcode = action.payload.leetcode;
      state.gfg = action.payload.gfg;
      state.codechef = action.payload.codechef;
    },
  },
});

export const profileLinksActions = profileLinksSlice.actions;
export default profileLinksSlice.reducer;
