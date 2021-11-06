import { TextField } from "@material-ui/core";
import { DatePicker } from "@mui/lab";
import React from "react";
import "./css/style.css";

const ShowtimePicker = ({ dateValue, handleChangeDateValue }) => {
    return (
        <DatePicker
            value={dateValue}
            onChange={handleChangeDateValue}
            renderInput={(params) => (
                <TextField {...params} className="datePicker" />
            )}
        />
    );
};

export default ShowtimePicker;
