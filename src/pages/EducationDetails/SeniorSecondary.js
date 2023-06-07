import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationDetailsActions as actions } from "../../redux/educationDetailsSlice";
import Form from "../../components/Form/Form";

function SeniorSecondary() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.educationDetails);

  const [values, setValues] = useState({
    instituteName2: selector.instituteName2,
    courseName2: selector.courseName2,
    courseFromDuration2: selector.courseFromDuration2,
    courseToDuration2: selector.courseToDuration2,
    coursePercentage2: selector.coursePercentage2,
  });

  const inputs = [
    {
      id: 1,
      name: "instituteName2",
      label: "Institute Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z ]+$",
    },
    {
      id: 2,
      name: "courseName2",
      label: "Course Name",
      type: "text",
      required: true,
      maxlength: 55,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z0-9 ]+$",
    },
    {
      id: 3,
      name: "courseFromDuration2",
      label: "Start Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid start date.",
    },
    {
      id: 4,
      name: "courseToDuration2",
      label: "End Date",
      type: "month",
      required: true,
      errorMessage: "Enter a valid end date.",
    },
    {
      id: 5,
      name: "coursePercentage2",
      label: "Percentage (%)",
      type: "text",
      required: true,
      maxlength: 10,
      errorMessage: "Please enter a valid percentage.",
      pattern: "^100([.]0{1,2})?)$|(^d{1,2}([.]d{1,2})?)$",
    },
  ];

  const submit = () => {
    dispatch(actions.seniorSecondary(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Senior Secondary"
      prev="/educationDetails/graduation"
      next="/educationDetails/highSchool"
    />
  );
}

export default SeniorSecondary;
