import React from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import resumeSvg from "../../assets/resume.svg";
import classes from "./HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.outerContainer}>
        <div className={classes.alignLeft}>
          <p className={classes.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={classes.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={classes.alignRight}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
      <div className={classes.moveButtonContainer}>
        <Button
          styleName="makeResumeButton"
          title="Proceed"
          onClick={() => {
            navigate("/personalDetails");
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
