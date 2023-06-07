import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage/HomePage";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
import ProfileLinks from "./pages/ProfileLinks/ProfileLinks";
import EducationDetails from "./pages/EducationDetails/EducationDetails";
import Graduation from "./pages/EducationDetails/Graduation";
import SeniorSecondary from "./pages/EducationDetails/SeniorSecondary";
import HighSchool from "./pages/EducationDetails/HighSchool";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Job1 from "./pages/WorkExperience/Job1";
import Job2 from "./pages/WorkExperience/Job2";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Project1 from "./pages/ProjectDetails/Project1";
import Project2 from "./pages/ProjectDetails/Project2";
import Achievements from "./pages/Achievement/Achievements";
import DownloadResume from "./pages/DownloadResume/DownloadResume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/personalDetails",
        element: <PersonalDetails />,
      },
      {
        path: "/profileLinks",
        element: <ProfileLinks />,
      },
      {
        path: "/educationDetails",
        element: <EducationDetails />,
        children: [
          {
            path: "/educationDetails/graduation",
            element: <Graduation />,
          },
          {
            path: "/educationDetails/seniorSecondary",
            element: <SeniorSecondary />,
          },
          {
            path: "/educationDetails/highSchool",
            element: <HighSchool />,
          },
        ],
      },
      {
        path: "/workExperience",
        element: <WorkExperience />,
        children: [
          {
            path: "/workExperience/job1",
            element: <Job1 />,
          },
          {
            path: "/workExperience/job2",
            element: <Job2 />,
          },
        ],
      },
      {
        path: "/projectDetails",
        element: <ProjectDetails />,
        children: [
          {
            path: "/projectDetails/project1",
            element: <Project1 />,
          },
          {
            path: "/projectDetails/project2",
            element: <Project2 />,
          },
        ],
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/downloadResume",
        element: <DownloadResume />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
