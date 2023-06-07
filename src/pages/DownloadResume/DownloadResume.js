import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import ReactToPrint from "react-to-print";
import Button from "../../components/Button/Button";
import Resume from "../../components/Resume/Resume";
import classes from "./DownloadResume.module.css";
import BeatLoader from "react-spinners/BeatLoader";

function DownloadResume() {
  const resumeRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loader}>
          <BeatLoader color={"#303030"} loading={loading} size={10} />
          <span>Hold On!</span>
        </div>
      ) : (
        <>
          <div className={classes.buttonContainer}>
            <Button
              type="button"
              title="< Go Back"
              styleName="moveButton"
              onClick={() => {
                navigate("/achievements");
              }}
            />
            <ReactToPrint
              pageStyle="@page { size: 8.5in 10.5in }"
              documentTitle="Resume"
              trigger={() => {
                return (
                  <Button
                    type="button"
                    title="Download"
                    styleName="moveButton"
                  />
                );
              }}
              content={() => resumeRef.current}
            />
          </div>
          <Resume className={classes.resumeContainer} ref={resumeRef} />
          <span className={classes.showMobileMsg}>
            Due to resolution issues, Resume can't be previewed on your mobile
            device.
          </span>
          <span className={classes.showMobileMsg}>
            To Preview Resume, select 'view as Desktop Site' in Browser Settings
            or simply download the Resume.
          </span>
        </>
      )}
    </div>
  );
}

export default DownloadResume;
