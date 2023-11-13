import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SuccessPwdResetSnackbar(props) {
  const [state, setState] = React.useState({
    open: props.isOpen,
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    props.setIsOpen(false)
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
