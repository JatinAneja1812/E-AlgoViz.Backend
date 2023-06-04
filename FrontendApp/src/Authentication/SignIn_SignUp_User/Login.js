import loginImg from "../../imgs/LoginImage.svg";
import { LoginWrapper } from "./Auth.styles.js";
import React, { useState, useEffect, useRef } from "react";
import { auth } from "../Firebase/Firebase";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import  LoginIcon from "@mui/icons-material/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import ErrorNotification from "../../Components/Snackbar/ErrorSnackbar";
import Reset from "../ResetUser/Reset";
import LiquidButtonWrapper from "../../Utility/Styles/CustomButtonStyles/LiquidButton.styles.js";
import { startSession, endSession} from "../Storage/Session";

export default function Login(props) {
  const userRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userReset, setUserReset] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);
  

  const handleLogin = () => {
    setIsLoading(true);
  
    const timer = setTimeout(async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user.emailVerified) {
          // Allow 
          const path = "/homepage";
          startSession(user);
          const timeout = setTimeout(() => {
            navigate(path);
            setIsLoading(false);
          }, 3000);
          return () => clearTimeout(timeout) && setIsLoading(false);
        } 
        else 
        {
          setError("Please verify your email before logging in.");
          setEmail("");
          setPassword("");
          setIsOpen(true);
          navigate("/");
          setIsLoading(false);
          
          return () => clearTimeout(timer) && setIsLoading(false);
        }
      } catch (error) {
        setError('Wrong Credential. Try Again.');
        setEmail("");
        setPassword("");
        setIsOpen(true);
        navigate("/");
        setIsLoading(false);
        endSession();
        return () => clearTimeout(timer) && setIsLoading(false);
      }
    }, 15000);
  };


  const handleReset = () => {
    setUserReset(true);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <>
      {isOpen && (
        <ErrorNotification
          message={error}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}

      {userReset && <Reset setUserReset={setUserReset}  userReset={userReset}/>}
      
      <LoginWrapper>
        <div className="TitleLogin">
          <h1>E-Algo-ViZ</h1>
        </div>
        <div className="base-container" ref={props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img
                style={{ width: "80%", height: "80%" }}
                src={loginImg}
                alt="loginImg"
              />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">E-mail Address</label>
                <input
                  disabled={isLoading ? true : false}
                  type="text"
                  placeholder="E-mail Address"
                  id="Email"
                  ref={userRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  disabled={isLoading ? true : false}
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  onKeyDown={handleKeypress}
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <LiquidButtonWrapper>
              <LoadingButton 
                disabled={isLoading ? true : !email || !password ? true : false}
                className="liquidButton"
                icon={null}         
                loadingPosition="end"
                variant="contained"
                style={{fontSize: "16px", color: "white"}}
                onClick={handleLogin}
                loading={isLoading === false ? false : true}
              >
                <span className="liquidButton__text">LOGIN</span>
                <span className="liquidButton__icon"><LoginIcon style={{color: "white"}} /></span>
                <span className={isLoading ? "disabledLiquidButton__liquid" : "liquidButton__liquid"} ></span>
              </LoadingButton>
            </LiquidButtonWrapper>
          </div>
          <br />
          <div>
            <Link id="reset" onClick={handleReset} underline="hover">
              Forget Password?
            </Link>
          </div>
        </div>
      </LoginWrapper>
    </>
  );
}
