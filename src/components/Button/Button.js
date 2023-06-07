import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={classes[props.styleName]}
      type={props.type}
      title={props.title}
      valid={props.valid}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span className={classes[props.styleName +"Title"]}>
        {props.title}
      </span>
    </button>
  );
}

export default Button;
