import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  achievement1: "",
  achievement2: "",
  achievement3: "",
  achievement4: "",
};

const achievementsSlice = createSlice({
  name: "achievements",
  initialState: initialState,
  reducers: {
    achievements(state, action) {
      state.achievement1 = action.payload.achievement1;
      state.achievement2 = action.payload.achievement2;
      state.achievement3 = action.payload.achievement3;
      state.achievement4 = action.payload.achievement4;
    },
  },
});

export const achievementsActions = achievementsSlice.actions;
export default achievementsSlice.reducer;
