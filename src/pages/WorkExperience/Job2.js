import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workExperienceActions as actions } from "../../redux/workExperienceSlice";
import Form from "../../components/Form/Form";

function Job1() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.workExperience);
  const [disabled, setDisabled] = useState(!selector.isSaved2);

  const [values, setValues] = useState({
    companyName2: selector.companyName2,
    jobTitle2: selector.jobTitle2,
    jobLocation2: selector.jobLocation2,
    workFromDuration2: selector.workFromDuration2,
    workToDuration2: selector.workToDuration2,
  });

  const inputs = [
    {
      id: 1,
      name: "companyName2",
      label: "Company Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only letters are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 2,
      name: "jobLocation2",
      label: "Job Location",
      type: "text",
      required: true,
      maxlength: 35,
      errorMessage: "Only letters are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 3,
      name: "jobTitle2",
      label: "Job Title",
      type: "text",
      required: true,
      maxlength: 35,
      errorMessage: "Alphabets, '@' and '-' are allowed.",
      pattern: "^[a-zA-Z0-9:@- ]+$",
    },
    {
      id: 4,
      name: "workFromDuration2",
      label: "Start Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid start date.",
    },
    {
      id: 5,
      name: "workToDuration2",
      label: "End Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid end date.",
    },
  ];

  const submit = () => {
    dispatch(actions.job2(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      disabled={disabled}
      setDisabled={setDisabled}
      dispatch={submit}
      name="Work Experience 2"
      prev="/workExperience/job1"
      next="/projectDetails/project1"
    />
  );
}

export default Job1;
