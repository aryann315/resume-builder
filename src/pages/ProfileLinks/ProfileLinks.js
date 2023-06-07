import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileLinksActions as actions } from "../../redux/profileLinksSlice";
import Form from "../../components/Form/Form";

function ProfileLinks() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.profileLinks);

  const [values, setValues] = useState({
    linkedin: selector.linkedin,
    github: selector.github,
    portfolio: selector.portfolio,
    leetcode: selector.leetcode,
    gfg: selector.gfg,
    codechef: selector.codechef,
  });

  const inputs = [
    {
      id: 1,
      name: "linkedin",
      label: "LinkedIn",
      type: "url",
      required: true,
      errorMessage: "Please enter a valid LinkedIn URL.",
    },
    {
      id: 2,
      name: "github",
      label: "Github",
      type: "url",
      required: true,
      errorMessage: "Please enter a valid Github URL.",
    },
    {
      id: 3,
      name: "portfolio",
      label: "Portfolio",
      type: "url",
      errorMessage: "Please enter a valid Portfolio URL.",
    },
    {
      id: 4,
      name: "leetcode",
      label: "Leetcode",
      type: "url",
      errorMessage: "Please enter a valid Leetcode Profile URL.",
    },
    {
      id: 5,
      name: "gfg",
      label: "Geeks for Geeks",
      type: "url",
      errorMessage: "Please enter a valid GFG Profile URL.",
    },
    {
      id: 6,
      name: "codechef",
      label: "Codechef",
      type: "url",
      errorMessage: "Please enter a valid Codechef Profile URL.",
    },
  ];

  const submit = () => {
    dispatch(actions.profileLinks(values));
  };

  return (
    <Form
      inputs={inputs}
      values={values}
      setValues={setValues}
      dispatch={submit}
      name="Profile Links"
      prev="/personalDetails"
      next="/educationDetails/graduation"
    />
  );
}

export default ProfileLinks;
