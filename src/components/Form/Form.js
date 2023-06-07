import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import classes from "./Form.module.css";
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/ClipLoader";

function Form({ inputs, values, setValues, dispatch, name, prev, next }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [disabledInput, setDisabledInput] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setDisabledInput(true);
    }, 1500);

    dispatch();
  };

  const editHandler = () => {
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setSaved(false);
      setDisabledInput(false);
    }, 1500);
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loader}>
          <BeatLoader color={"#303030"} loading={loading} size={10} />
          <span>Hold On!</span>
        </div>
      ) : (
        <form onSubmit={submitHandler} className={classes.formContainer}>
          <span className={classes.title}>{name}</span>
          <span className={classes.instruction}>
            Fields marked with asterisk ( <span>*</span> ) are mandatory.
          </span>
          {[...Array(3)].map((e, i) => (
            <div key={i} className={classes.inputContainer}>
              {inputs.slice(2 * i, 2 * i + 2).map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  disabled={disabledInput}
                />
              ))}
            </div>
          ))}
          <div className={classes.buttonContainer}>
            {!saving && saved && (
              <Button
                type="button"
                title="< Prev"
                styleName="moveButton"
                onClick={() => {
                  navigate(prev);
                }}
              />
            )}
            {!saved && !saving && (
              <Button type="Submit" title="Save" styleName="moveButton" />
            )}
            {!saving && saved && (
              <Button
                type="button"
                title="Edit"
                styleName="moveButton"
                onClick={editHandler}
              />
            )}
            {saving && (
              <ClipLoader color={"#303030"} saving={saving} size={15} />
            )}
            {!saving && saved && (
              <Button
                type="button"
                title="Next >"
                styleName="moveButton"
                onClick={() => {
                  navigate(next);
                }}
              />
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
