import { Button } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import './css/style.css';

const TheaterShowtime = ({ showTime }) => {
    return (
        <>
            {
                showTime.map((item) => (
                    <Button
                        key={item.maLichChieu}
                        className="showtime__btn"
                        variant="outlined"
                    >
                        <Link to={`/ticketroom/${item.maLichChieu}`}>
                            {moment(item.ngayChieuGioChieu).format("LT")}
                        </Link>
                    </Button>
                ))
            }
        </>
    );
};

export default TheaterShowtime;
