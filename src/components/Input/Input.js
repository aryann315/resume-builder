import React, { useState } from "react";
import classes from "./Input.module.css";

function Input(props) {
  const [focused, setFocused] = useState(false);
  const onBlur = () => {
    setFocused(true);
  };

  return (
    <div className={classes.container}>
      <label>
        {props.label} {props.required === true ? <span>*</span> : ""}
      </label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        step={props.step}
        value={props.value}
        required={props.required}
        disabled={props.disabled}
        placeholder={props.placeholder}
        pattern={props.pattern}
        focused={focused.toString()}
        maxLength={props.maxlength}
        onChange={props.onChange}
        onBlur={onBlur}
      />
      <span className={classes.errorMessage}>{props.errorMessage}</span>
    </div>
  );
}

export default Input;
