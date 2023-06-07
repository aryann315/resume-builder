import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectDetailsActions as actions } from "../../redux/projectDetailsSlice";
import Form from "../../components/Form/Form";

function Project1() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.projectDetails);

  const [values, setValues] = useState({
    projectTitle1: selector.projectTitle1,
    overview1: selector.overview1,
    deployedLink1: selector.deployedLink1,
    githubLink1: selector.githubLink1,
  });

  const inputs = [
    {
      id: 1,
      name: "projectTitle1",
      label: "Project Title",
      type: "text",
      required: true,
      maxlength: 25,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z][a-zA-Z ]+",
    },
    {
      id: 2,
      name: "overview1",
      label: "Project Description",
      placeholder: "Max 150 characters allowed",
      type: "text",
      required: true,
      maxlength: 150,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z'.,- ]+$",
    },
    {
      id: 3,
      name: "deployedLink1",
      label: "Deployed Link",
      type: "url",
      errorMessage: "Please enter a valid Deployed Link.",
    },
    {
      id: 4,
      name: "githubLink1",
      label: "Github Link",
      type: "url",
      errorMessage: "Please enter a valid Github Link.",
    },
  ];

  const submit = () => {
    dispatch(actions.project1(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Project 1"
      prev="/workExperience/job2"
      next="/projectDetails/project2"
    />
  );
}

export default Project1;
