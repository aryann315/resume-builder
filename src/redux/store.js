import { configureStore } from "@reduxjs/toolkit";
import personalDetails from "./personalDetailsSlice";
import profileLinks from "./profileLinksSlice";
import educationDetails from "./educationDetailsSlice";
import workExperience from "./workExperienceSlice";
import projectDetails from "./projectDetailsSlice";
import achievements from "./achievementsSlice";

const store = configureStore({
  reducer: {
    personalDetails: personalDetails,
    profileLinks: profileLinks,
    educationDetails: educationDetails,
    workExperience: workExperience,
    projectDetails: projectDetails,
    achievements: achievements,
  },
});

export default store;
