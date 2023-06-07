import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";
import classes from "./Resume.module.css";

const Resume = forwardRef((props, ref) => {
  const personalDetails = useSelector((state) => state.personalDetails);
  const profileLinks = useSelector((state) => state.profileLinks);
  const educationDetails = useSelector((state) => state.educationDetails);
  const workExperience = useSelector((state) => state.workExperience);
  const projectDetails = useSelector((state) => state.projectDetails);
  const achievements = useSelector((state) => state.achievements);

  const personalInput = {
    firstName: personalDetails.firstName,
    middleName: personalDetails.middleName,
    lastName: personalDetails.lastName,
    email: personalDetails.email,
    contactNumber: personalDetails.contactNumber,
    dob: personalDetails.dob,
  };

  const profileInput = {
    linkedin: profileLinks.linkedin,
    github: profileLinks.github,
    portfolio: profileLinks.portfolio,
    leetcode: profileLinks.leetcode,
    gfg: profileLinks.gfg,
    codechef: profileLinks.codechef,
  };

  const educationInput = {
    instituteName1: educationDetails.instituteName1,
    courseName1: educationDetails.courseName1,
    courseFromDuration1: educationDetails.courseFromDuration1,
    courseToDuration1: educationDetails.courseToDuration1,
    coursePercentage1: educationDetails.coursePercentage1,

    instituteName2: educationDetails.instituteName2,
    courseName2: educationDetails.courseName2,
    courseFromDuration2: educationDetails.courseFromDuration2,
    courseToDuration2: educationDetails.courseToDuration2,
    coursePercentage2: educationDetails.coursePercentage2,

    instituteName3: educationDetails.instituteName3,
    courseName3: educationDetails.courseName3,
    courseFromDuration3: educationDetails.courseFromDuration3,
    courseToDuration3: educationDetails.courseToDuration3,
    coursePercentage3: educationDetails.coursePercentage3,
  };

  const workInput = {
    companyName1: workExperience.companyName1,
    jobTitle1: workExperience.jobTitle1,
    jobLocation1: workExperience.jobLocation1,
    workFromDuration1: workExperience.workFromDuration1,
    workToDuration1: workExperience.workToDuration1,

    companyName2: workExperience.companyName2,
    jobTitle2: workExperience.jobTitle2,
    jobLocation2: workExperience.jobLocation2,
    workFromDuration2: workExperience.workFromDuration2,
    workToDuration2: workExperience.workToDuration2,
  };

  const projectInput = {
    projectTitle1: projectDetails.projectTitle1,
    overview1: projectDetails.overview1,
    deployedLink1: projectDetails.deployedLink1,
    githubLink1: projectDetails.githubLink1,

    projectTitle2: projectDetails.projectTitle2,
    overview2: projectDetails.overview2,
    deployedLink2: projectDetails.deployedLink2,
    githubLink2: projectDetails.githubLink2,
  };

  const achievementInput = {
    achievement1: achievements.achievement1,
    achievement2: achievements.achievement2,
    achievement3: achievements.achievement3,
    achievement4: achievements.achievement4,
  };

  return (
    <div ref={ref} className={classes.pageContainer}>
      <div className={classes.a4Container}>
        <div className={classes.nameContainer}>
          <span>{personalInput.firstName || "First Name"}</span>
          {personalInput.middleName && (
            <span>{personalInput.middleName || "Middle Name"}</span>
          )}
          <span>{personalInput.lastName || "Last Name"}</span>
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.detailContainer}>
            <span className={classes.logo}>
              <AiFillMail />
            </span>
            <span className={classes.text}>
              {personalInput.email || "xyz@gmail.com"}
            </span>
          </div>
          <div className={classes.detailContainer}>
            <span className={classes.logo}>
              <AiFillPhone />
            </span>
            <span className={classes.text}>
              +91 {personalInput.contactNumber || "99888 XXXXX"}
            </span>
          </div>
          <div className={classes.detailContainer}>
            <span className={classes.logo}>
              <FaBirthdayCake />
            </span>
            <span className={classes.text}>
              {personalInput.dob || "yyyy-mm-dd"}
            </span>
          </div>
        </div>
        <div className={classes.profileContainer}>
          <a
            href={profileInput.linkedin || ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href={profileInput.github || ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {profileInput.portfolio && (
            <a
              href={profileInput.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          )}
          {profileInput.leetcode && (
            <a
              href={profileInput.leetcode}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leetcode
            </a>
          )}
          {profileInput.gfg && (
            <a
              href={profileInput.gfg}
              target="_blank"
              rel="noopener noreferrer"
            >
              GFG
            </a>
          )}
          {profileInput.codechef && (
            <a
              href={profileInput.codechef}
              target="_blank"
              rel="noopener noreferrer"
            >
              Codechef
            </a>
          )}
        </div>
        <hr />
        <div className={classes.educationContainer}>
          <span className={classes.educationHeading}>EDUCATION DETAILS:</span>
          <div className={classes.educationInner}>
            <span className={classes.institute}>
              ➣ {educationInput.instituteName1 || "XYZ Institute of Technology"}
            </span>
            <span className={classes.dates}>
              {educationInput.courseFromDuration1 || "mm/yyyy"} to{" "}
              {educationInput.courseToDuration1 || "mm/yyyy"}
            </span>
          </div>
          <div className={classes.educationInner}>
            <span className={classes.course}>
              {educationInput.courseName1 || "Computer Science Engineering"}
            </span>
            <span className={classes.course}>
              CGPA: {educationInput.coursePercentage1 || ""}
            </span>
          </div>
          <div className={classes.educationInner}>
            <span className={classes.institute}>
              ➣ {educationInput.instituteName2 || "ABC Public School"}
            </span>
            <span className={classes.dates}>
              {educationInput.courseFromDuration2 || "mm/yyyy"} to{" "}
              {educationInput.courseToDuration2 || "mm/yyyy"}
            </span>
          </div>
          <div className={classes.educationInner}>
            <span className={classes.course}>
              {educationInput.courseName2 || "CBSE Boards 12th"}
            </span>
            <span className={classes.course}>
              Percentage: {educationInput.coursePercentage2 || "%"}
            </span>
          </div>
          <div className={classes.educationInner}>
            <span className={classes.institute}>
              ➣ {educationInput.instituteName3 || "ABC Public School"}
            </span>
            <span className={classes.dates}>
              {educationInput.courseFromDuration3 || "mm/yyyy"} to{" "}
              {educationInput.courseToDuration3 || "mm/yyyy"}
            </span>
          </div>
          <div className={classes.educationInner}>
            <span className={classes.course}>
              {educationInput.courseName3 || "CBSE Boards 10th"}
            </span>
            <span className={classes.course}>
              Percentage: {educationInput.coursePercentage3 || "%"}
            </span>
          </div>
        </div>
        <hr />
        <div className={classes.workContainer}>
          <span className={classes.workHeading}>WORK EXPERIENCE:</span>
          <div className={classes.workInner}>
            <span className={classes.company}>
              ➣ {workInput.companyName1 || "Job 1"}
            </span>
            <span className={classes.dates}>
              {workInput.workFromDuration1 || "mm/yyyy"} to{" "}
              {workInput.workToDuration1 || "mm/yyyy"}
            </span>
          </div>
          <div className={classes.workInner}>
            <span className={classes.title}>
              {workInput.jobTitle1 || "Job Title 1"}
            </span>
            <span className={classes.title}>
              ({workInput.jobLocation1 || "Job Location 1"})
            </span>
          </div>
          <div className={classes.workInner}>
            <span className={classes.company}>
              ➣ {workInput.companyName2 || "Job 2"}
            </span>
            <span className={classes.dates}>
              {workInput.workFromDuration2 || "mm/yyyy"} to{" "}
              {workInput.workToDuration2 || "mm/yyyy"}
            </span>
          </div>
          <div className={classes.workInner}>
            <span className={classes.title}>
              {workInput.jobTitle2 || "Job Title 2"}
            </span>
            <span className={classes.title}>
              ({workInput.jobLocation2 || "Job Location 2"})
            </span>
          </div>
        </div>
        <hr />
        <div className={classes.projectContainer}>
          <span className={classes.projectHeading}>PERSONAL PROJECTS:</span>
          <div className={classes.projectInner}>
            <span className={classes.title}>
              ➣ {projectInput.projectTitle1 || "Project Name"}
            </span>
          </div>
          <div className={classes.projectInner}>
            <span className={classes.overview}>
              {projectInput.overview1 || "Project Overview"}
            </span>
          </div>
          <div className={classes.projectInner}>
            {projectInput.deployedLink1 && (
              <a
                href={projectInput.deployedLink1 || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Link
              </a>
            )}
            {projectInput.githubLink1 && (
              <a
                href={projectInput.githubLink1 || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            )}
          </div>
          <div className={classes.projectInner}>
            <span className={classes.title}>
              ➣ {projectInput.projectTitle2 || "Project Name"}
            </span>
          </div>
          <div className={classes.projectInner}>
            <span className={classes.overview}>
              {projectInput.overview2 || "Project Overview"}
            </span>
          </div>
          <div className={classes.projectInner}>
            {projectInput.deployedLink2 && (
              <a
                href={projectInput.deployedLink2 || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Link
              </a>
            )}
            {projectInput.githubLink2 && (
              <a
                href={projectInput.githubLink2 || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            )}
          </div>
        </div>
        <hr />
        <div className={classes.achievementContainer}>
          <span className={classes.achievementHeading}>ACHIEVEMENTS:</span>
          <div className={classes.achievementDetails}>
            <span className={classes.achievements}>
              ➣ {achievementInput.achievement1 || "Achievement 1"}
            </span>
            <span className={classes.achievements}>
              ➣ {achievementInput.achievement2 || "Achievement 2"}
            </span>
            {achievementInput.achievement3 && (
              <span className={classes.achievements}>
                ➣ {achievementInput.achievement3}
              </span>
            )}
            {achievementInput.achievement4 && (
              <span className={classes.achievements}>
                ➣ {achievementInput.achievement4}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
