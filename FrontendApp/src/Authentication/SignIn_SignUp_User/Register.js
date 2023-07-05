import React, { useRef, useState, useEffect } from "react";
import loginImg from "../../imgs/RegisterImage.svg";
import { RegisterWrapper } from "./Auth.styles.js";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, registerWithEmailAndPassword } from "../Firebase/Firebase";
import RegisterSuccessDialog from "../../Components/Popups/RegisterSuccessPopup";
import LoadingButton from "@mui/lab/LoadingButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LiquidButtonWrapper from "../../Utility/Styles/CustomButtonStyles/LiquidButton.styles.js";
import ErrorNotification from "../../Components/Snackbar/ErrorSnackbar";
import RegisterationConfirmPopup from "../../Components/Popups/RegisterationConfirmPopup";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; 
const EMAIL_REGEX =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Register(props) {
  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [error, setError] = useState('');
  const [confirmModalOpen, setConfirmModalOpen] = useState(false); 

  useEffect(() => {
    userRef.current.focus();
    return () => {};
  }, []);

  useEffect(() => {
    setIsLoading(false);
    if (isLoading) {
      auth.onAuthStateChanged((user) => {
        if (user !== null) {
          //we are loggedIn, so direct to Home
          const timer = setTimeout(() => {
            setIsLoading(false);
          }, 3000);
          return () => clearTimeout(timer) && setIsLoading(false);
        } else {
        }
      });
    }
    return () => setIsLoading(true);
  }, [isLoading]);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
    return () => {};
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    return () => {};
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
    return () => {};
  }, [pwd, matchPwd]);

  const register = async () => {
    if (!username) alert("Please enter name");
    
    await registerWithEmailAndPassword(username, email, pwd)
    .then((message) => {
      // handle successful registration message
      // eslint-disable-next-line eqeqeq
      if(message == undefined || message == ''){
        setOpen(true);
        setErrorOpen(false);
      }else{
        setErrorOpen(true);
        setError(message.toString());
      }
    })
    .catch((error) => {
      // handle registration error
      setError(error);
    });

    setConfirmModalOpen(false);
    setUsername("");
    setEmail("");
    setPwd("");
    setMatchPwd("");
  };

  const OpenConfirmRegisterationModal = () => {
    setConfirmModalOpen(true);
  }

  return (
    <>


      {errorOpen && (
          <ErrorNotification
            message={error}
            setIsOpen={setErrorOpen}
            isOpen={errorOpen}
          />
      )}
      {confirmModalOpen && (
          <RegisterationConfirmPopup 
            username={username}
            email={email}
            registerUser={register}
            confirmModalOpen={confirmModalOpen}
            setConfirmModalOpen={setConfirmModalOpen}
          />
      )}
      {open ? 
      (
        <section>
          <RegisterSuccessDialog open={open} setOpen={setOpen} />
        </section>
      ) : 
      (
        <RegisterWrapper>
          <div className="TitleReg">
            <h1>E-Algo-ViZ</h1>
          </div>
          <div className="regbase-container" ref={props.containerRef}>  
            <div className="regheader">Register</div>
            <div className="regcontent">
              <div className="image">
                <img
                  style={{ width: "60%", height: "60%" }}
                  src={loginImg}
                  alt="Registerimg"
                />
              </div>
              <div className="regform">
                <div className="regform-group">
                  <label htmlFor="username">
                    Username
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validName ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validName || !username ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username: e.g. John Smith"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && username && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens only allowed.
                  </p>
                </div>
                <div className="regform-group">
                  <label htmlFor="Email">
                    Email
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validEmail ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validEmail || !email ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="text"
                    id="Email"
                    placeholder="Email: e.g. jhon01@gmail.com"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Max 64 characters.Must have Domain and @ symbol.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>
                <div className="regform-group">
                  <label htmlFor="password">
                    {" "}
                    Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validPwd || !pwd ? "hide" : "invalid"}
                    />
                  </label>

                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 - 24 characters.Must include Upper and Lowercase <br />
                    letter, a number and a special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </div>
                <div className="regform-group">
                  <label htmlFor="confirm_pwd">
                    {" "}
                    Confirm Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    placeholder="Confirm Password"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>
                </div>
              </div>
            </div>
            <div className="regfooter">
              <LiquidButtonWrapper>
                <LoadingButton
                  disabled={!validName || !validPwd || !validMatch ? true : false}
                  type="button"
                  icon={null}
                  loadingPosition="end"
                  variant="contained"
                  className="liquidButton" 
                  style={{fontSize: "16px", color: "white", marginTop: "8px", width: "180px"}}
                  loading={isLoading}
                  onClick={OpenConfirmRegisterationModal}
                >
                  <span className="liquidButton__text">REGISTER</span>
                  <span className="liquidButton__icon"><AppRegistrationIcon style={{color: "white"}} /></span>
                  <span className="liquidButton__liquid"></span>
                </LoadingButton>
              </LiquidButtonWrapper>
            </div>
          </div>
        </RegisterWrapper>
      )}
    </>
  );
}
