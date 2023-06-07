import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { achievementsActions as actions } from "../../redux/achievementsSlice";
import Form from "../../components/Form/Form";

function Achievements() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.achievements);

  const [values, setValues] = useState({
    achievement1: selector.achievement1,
    achievement2: selector.achievement2,
    achievement3: selector.achievement3,
    achievement4: selector.achievement4,
  });

  const inputs = [
    {
      id: 1,
      name: "achievement1",
      label: "Achievement 1",
      placeholder: "Max 75 characters allowed",
      type: "text",
      required: true,
      maxlength: 75,
      errorMessage: "Only letters are allowed.",
      pattern: "^[a-zA-Z0-9][a-zA-Z0-9:.,@#!+-%*&() ]+$",
    },
    {
      id: 2,
      name: "achievement2",
      label: "Achievement 2",
      placeholder: "Max 75 characters allowed",
      type: "text",
      required: true,
      maxlength: 75,
      errorMessage: "Only letters are allowed.",
      pattern: "^[a-zA-Z0-9][a-zA-Z0-9:.,@#!+-%*&() ]+$",
    },
    {
      id: 3,
      name: "achievement3",
      label: "Achievement 3",
      placeholder: "Max 75 characters allowed",
      type: "text",
      maxlength: 75,
      errorMessage: "Only letters are allowed.",
      pattern: "^[a-zA-Z0-9][a-zA-Z0-9:.,@#!+-%*&( ]+$",
    },
    {
      id: 4,
      name: "achievement4",
      label: "Achievement 4",
      placeholder: "Max 75 characters allowed",
      type: "text",
      maxlength: 75,
      errorMessage: "Only letters are allowed.",
      pattern: "^[a-zA-Z0-9][a-zA-Z0-9:.,@#!+-%*&() ]+$",
    },
  ];

  const submit = () => {
    dispatch(actions.achievements(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Achievements"
      prev="/projectDetails/project2"
      next="/downloadResume"
    />
  );
}

export default Achievements;
