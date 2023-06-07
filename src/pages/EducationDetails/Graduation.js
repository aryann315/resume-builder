import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationDetailsActions as actions } from "../../redux/educationDetailsSlice";
import Form from "../../components/Form/Form";

function Graduation() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.educationDetails);
  
  const [values, setValues] = useState({
    instituteName1: selector.instituteName1,
    courseName1: selector.courseName1,
    courseFromDuration1: selector.courseFromDuration1,
    courseToDuration1: selector.courseToDuration1,
    coursePercentage1: selector.coursePercentage1,
  });

  const inputs = [
    {
      id: 1,
      name: "instituteName1",
      label: "Institute Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 2,
      name: "courseName1",
      label: "Course Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z0-9-|,. ]+$",
    },
    {
      id: 3,
      name: "courseFromDuration1",
      label: "Start Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid start date.",
    },
    {
      id: 4,
      name: "courseToDuration1",
      label: "End Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid end date.",
    },
    {
      id: 5,
      name: "coursePercentage1",
      label: "CGPA",
      type: "number",
      step: "0.1",
      required: true,
      errorMessage: "Please enter a valid CGPA.",
    },
  ];

  const submit = () => {
    dispatch(actions.graduation(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Graduation"
      prev="/profileLinks"
      next="/educationDetails/seniorSecondary"
    />
  );
}

export default Graduation;
