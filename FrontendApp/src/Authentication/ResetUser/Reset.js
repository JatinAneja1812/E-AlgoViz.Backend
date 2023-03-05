import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import Button from "@mui/material/Button";
import ErrorNotification from "../../Components/Snackbar/ErrorSnackbar";
import { sendPasswordResetEmail } from "firebase/auth";
import SuccessPwdResetSnackbar from "../../Components/Snackbar/SuccessPwdResetSnackbar";
import ResetPasswordWrapper from "./Reset.styles";

function Reset(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err) {
      setError(true);
      setEmail("");
    }
  };

  const handleReset = () => {
    const timer = setTimeout(() => {
      sendPasswordReset(email);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {error && (
        <ErrorNotification
          message={"Invalid Email !! Try Again."}
          setIsOpen={setError}
          isOpen={error}
        />
      )}
      {success && (
        <SuccessPwdResetSnackbar
          message={"Change Password link is Successfully Sent to you Email."}
          setIsOpen={setSuccess}
          isOpen={success}
        />
      )}

      <ResetPasswordWrapper className="reset">
        <div className="reset__container">
          <h5>Please enter Registered Email-Address: </h5>
          <input
            type="text"
            className="reset__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <Button id="reset__btn" variant="contained" onClick={handleReset}>
            Send password reset email
          </Button>
          <button
            className="cancel_btn"
            onClick={() => props.setUserReset(false)}
          >
            Cancel
          </button>
        </div>
      </ResetPasswordWrapper>
    </>
  );
}
export default Reset;
