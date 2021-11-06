import React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarPopup = ({ error }) => {
    return (
        <Snackbar
            open={!!error}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={!!error ? 'error' : 'success'}>{!!error && error}</Alert>
        </Snackbar>
    );
};

export default SnackbarPopup;
