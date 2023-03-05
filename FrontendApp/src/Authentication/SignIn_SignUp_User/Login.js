import loginImg from "../../imgs/LoginIcon.svg";
import "./Auth.styles.css";
import React, { useState, useEffect, useRef } from "react";
import { auth } from "../Firebase/Firebase";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import ErrorNotification from "../../Components/Snackbar/ErrorSnackbar";
import Reset from "../ResetUser/Reset";

export default function Login(props) {
  const userRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userReset, setUserReset] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    setError(null);
    
    const timer =  setTimeout(async () => {
      await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error)
        setError(error);
      });
    
      if(error != null)
      {
        setEmail("");
        setPassword("");
        setIsOpen(true);
        navigate("/");
        setIsLoading(false);
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("userName");
        return () => clearTimeout(timer) && setIsLoading(false);
      }
      else{
        auth.onAuthStateChanged((user) => {
          console.log(user)
          //we are loggedIn, so direct to Home
          let path = "/homepage";
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("userName", JSON.stringify(user.displayName));
          const timer = setTimeout(() => {
            navigate(path);
            setIsLoading(false);
          }, 3000);
          return () => clearTimeout(timer) && setIsLoading(false);
        });
      }
    }, 3000);
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
          message={"Wrong Credential. Try Again."}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}

      {userReset && <Reset setUserReset={setUserReset} />}
      <div className="base-container" ref={props.containerRef}>
        <div className="mainheader">ShortWay Predictor</div>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img
              style={{ width: "100%", height: "100%" }}
              src={loginImg}
              alt="loginImg"
            />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
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
                type="password"
                placeholder="password"
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
          <LoadingButton
            disabled={!email || !password ? true : false}
            color="primary"
            loadingPosition="end"
            endIcon={<LoginIcon />}
            variant="contained"
            className="btn"
            style={{fontSize: "16px"}}
            onClick={handleLogin}
            loading={isLoading === false ? false : true}
          >
            Login
          </LoadingButton>
        </div>
        <br />
        <div>
          <Link id="reset" onClick={handleReset} underline="hover">
            Forget Password?
          </Link>
        </div>
      </div>
    </>
  );
}
