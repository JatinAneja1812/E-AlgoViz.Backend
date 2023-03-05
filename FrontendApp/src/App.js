import React, { useState, useEffect, useRef } from "react";
import ApplicationWrapper from "./App.styles";
import Login from "./Authentication/SignIn_SignUp_User/Login";
import Register from "./Authentication/SignIn_SignUp_User/Register";

export default function App() {

  const [isLogginActive, setIsLogginActive] = useState(true);
  let usedRef = document.getElementsByClassName("rightSide");
  let CurrRef = useRef(null);

  useEffect(() => {
    usedRef.className = document.getElementsByClassName("right");
  }, [usedRef]);

  const changeState = (e) => {

    if (isLogginActive) {
      usedRef.className = "left";

    } else {
      usedRef.className = "right";
    }
    CurrRef = (usedRef)
    CurrRef.current = usedRef.current
    setIsLogginActive(!isLogginActive);
  };

  let current = isLogginActive ? "Register" : "Login";
  let currentActive = isLogginActive ? "Login" : "Register";


  return (
    <ApplicationWrapper>
        <div className="App">
          <div className="login">
            <div className="container">
              {isLogginActive && <Login containerRef={(ref) => (CurrRef= ref)} />}
              {!isLogginActive && <Register containerRef={(ref) => (CurrRef = ref)} />}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              className={usedRef}
              onClick={(e) => changeState(e)}
            />
          </div>
        </div>
    </ApplicationWrapper>
  );
}

const RightSide = (props) => {
  return (
    <div
      className={props.className.className === "left"? "left" : "right" }
      onClick={props.onClick}
    >
      <div className="inner-container" >
        <div className={props.current === "Login" ? "text" : "regtext"} >
          {props.current}
        </div>
      </div>
    </div>
  );
};
