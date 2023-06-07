import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectDetailsActions as actions } from "../../redux/projectDetailsSlice";
import Form from "../../components/Form/Form";

function Project1() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.projectDetails);

  const [values, setValues] = useState({
    projectTitle2: selector.projectTitle2,
    overview2: selector.overview2,
    deployedLink2: selector.deployedLink2,
    githubLink2: selector.githubLink2,
  });

  const inputs = [
    {
      id: 1,
      name: "projectTitle2",
      label: "Project Title",
      type: "text",
      required: true,
      maxlength: 25,
      errorMessage: "Only alphabets are allowed.",
      pattern: "^[a-zA-Z][a-zA-Z ]+",
    },
    {
      id: 2,
      name: "overview2",
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
      name: "deployedLink2",
      label: "Deployed Link",
      type: "url",
      errorMessage: "Please enter a valid Deployed Link.",
    },
    {
      id: 4,
      name: "githubLink2",
      label: "Github Link",
      type: "url",
      errorMessage: "Please enter a valid Github Link.",
    },
  ];

  const submit = () => {
    dispatch(actions.project2(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Project 2"
      prev="/projectDetails/project1"
      next="/achievements"
    />
  );
}

export default Project1;
