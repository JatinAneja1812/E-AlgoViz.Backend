import React, { useState } from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import InstructionMainPopup from "./InstructionMainPopup";
import "./ModalStyles/InstructionPopup1Styles.css";

const InstructionModalPopup1 = (props) => {
  const [show, setShow] = useState(true);
  const [showtutorial, setShowTutorial] = useState(false);
  const [checked, setChecked] = useState(false);

  const tutorialClose = () => {
    setShow(false);
    if(checked === true) {
      props.setInstructionModalDisable(checked);
      sessionStorage.setItem("InstructionDisabled", props.isInstructionModalDisabled);
    }
  };

  const handleTutorialPopup = () => {
    setShowTutorial(true);
  };

  const onChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="popupmain" style={{ display: show ? "block" : "none" }}>
        <div className="popup">
          <div className="switch_container">
            <Switch
              className="switch"
              checked={checked}
              onChange={onChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="switch_text">Disable Instructions</div>
          </div>
          <h1 id="heading">SHORTWAY PREDICTOR</h1>
          <p id="writeup" style={{ marginLeft: "15px", marginRight: "15px" }}>
            ShortWay Predictor is a visualizing tool that shows how different
            pathfinding algorithms work to find the shorted path between two
            Nodes and avoid obstacles on the way.
            <br />
            <br />
            <strong style={{ fontSize: "15px" }}>
              If you want to dive right in, feel free to press the "Exit" button
              below. Otherwise, press "INSTRUCTIONS" to expore more about this
              App!
            </strong>
            <br />
            <br />
            <strong style={{ fontSize: "15px" }}>
              You can 'DISABLE' this popup my turning off the Switch and
              Pressing Exit. Popup will be disabled until you will not Logged
              Out.
            </strong>
          </p>
          <h1 id="heading2">
            <b>SHORTEST PATH VISUALISER</b>
          </h1>
          <p id="instructions">
            <Button
              id="b1"
              style={{
                width: "258px",
                color: "#ffffff",
                background: "#13547a",
              }}
              type="button"
              className="btn btn-info"
              onClick={handleTutorialPopup}
            >
              INSTRUCTIONS FOR THE VISUALISER
            </Button>
          </p>
          <p id="exit" align="left">
            <Button
              id="b2"
              type="button"
              style={{ color: "rgb(2, 254, 225)" }}
              className="btn btn-warning"
              onClick={tutorialClose}
            >
              Exit
            </Button>
          </p>
        </div>
      </div>
      {showtutorial === true && (
        <InstructionMainPopup
          setShowTutorial={setShowTutorial}
          showtutorial={showtutorial}
        />
      )}
    </div>
  )
};

export default InstructionModalPopup1;
