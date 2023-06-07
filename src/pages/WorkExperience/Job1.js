import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workExperienceActions as actions } from "../../redux/workExperienceSlice";
import Form from "../../components/Form/Form";

function Job1() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.workExperience);

  const [values, setValues] = useState({
    companyName1: selector.companyName1,
    jobTitle1: selector.jobTitle1,
    jobLocation1: selector.jobLocation1,
    workFromDuration1: selector.workFromDuration1,
    workToDuration1: selector.workToDuration1,
  });

  const inputs = [
    {
      id: 1,
      name: "companyName1",
      label: "Company Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 2,
      name: "jobLocation1",
      label: "Job Location",
      type: "text",
      required: true,
      maxlength: 35,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 3,
      name: "jobTitle1",
      label: "Job Title",
      type: "text",
      required: true,
      maxlength: 35,
      errorMessage: "Alphabets, '@' and '-' are allowed.",
      pattern: "^[a-zA-Z0-9:@- ]+$",
    },
    {
      id: 4,
      name: "workFromDuration1",
      label: "Start Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid start date.",
    },
    {
      id: 5,
      name: "workToDuration1",
      label: "End Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid end date.",
    },
  ];

  const submit = () => {
    dispatch(actions.job1(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Work Experience 1"
      prev="/educationDetails/highSchool"
      next="/workExperience/job2"
    />
  );
}

export default Job1;
