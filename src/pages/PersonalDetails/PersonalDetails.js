import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personalDetailsActions as actions } from "../../redux/personalDetailsSlice";
import Form from "../../components/Form/Form";

function PersonalDetails() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.personalDetails);

  const [values, setValues] = useState({
    firstName: selector.firstName,
    middleName: selector.middleName,
    lastName: selector.lastName,
    dob: selector.dob,
    email: selector.email,
    contactNumber: selector.contactNumber,
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      maxlength: 12,
      errorMessage: "Only alphabets are allowed",
      pattern: "^[a-zA-Z]+$",
    },
    {
      id: 2,
      name: "middleName",
      label: "Middle Name",
      type: "text",
      maxlength: 12,
      errorMessage: "Only alphabets are allowed",
      pattern: "^[a-zA-Z]+$",
    },
    {
      id: 3,
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      maxlength: 12,
      errorMessage: "Only alphabets are allowed",
      pattern: "^[a-zA-Z]+$",
    },
    {
      id: 4,
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: true,
      errorMessage: "Enter a valid date of birth.",
    },
    {
      id: 5,
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      errorMessage: "Enter a valid email address.",
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    },
    {
      id: 6,
      name: "contactNumber",
      label: "Contact Number (+91)",
      type: "text",
      required: true,
      errorMessage: "Enter a valid contact number.",
      pattern: "^([0|+[0-9]{1,5})?([7-9][0-9]{9})$",
    },
  ];

  const submit = () => {
    dispatch(actions.personalDetails(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Personal Details"
      prev="/"
      next="/profileLinks"
    />
  );
}

export default PersonalDetails;

