import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationDetailsActions as actions } from "../../redux/educationDetailsSlice";
import Form from "../../components/Form/Form";

function HighSchool() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.educationDetails);

  const [values, setValues] = useState({
    instituteName3: selector.instituteName3,
    courseName3: selector.courseName3,
    courseFromDuration3: selector.courseFromDuration3,
    courseToDuration3: selector.courseToDuration3,
    coursePercentage3: selector.coursePercentage3,
  });

  const inputs = [
    {
      id: 1,
      name: "instituteName3",
      label: "Institute Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 2,
      name: "courseName3",
      label: "Course Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z0-9 ]+$",
    },
    {
      id: 3,
      name: "courseFromDuration3",
      label: "Start Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid start date.",
    },
    {
      id: 4,
      name: "courseToDuration3",
      label: "End Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid end date.",
    },
    {
      id: 5,
      name: "coursePercentage3",
      label: "Percentage (%)",
      type: "text",
      required: true,
      maxlength: 10,
      errorMessage: "Please enter a valid percentage.",
      pattern: "^100([.]0{1,2})?)$|(^d{1,2}([.]d{1,2})?)$",
    },
  ];

  const submit = () => {
    dispatch(actions.highSchool(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="High School"
      prev="/educationDetails/seniorSecondary"
      next="/workExperience/job1"
    />
  );
}

export default HighSchool;
