import { Grid, Typography } from "@material-ui/core";
import { Divider } from "@mui/material";
import moment from "moment";
import React from "react";
import TheaterShowtime from "../TheaterShowtime";
import "./css/style.css";

const TheaterItem = ({ value, theaterSystem, index, dateValue }) => {
    const filterShowTime = (showtimeList) => {
        const firstShowDay = dateValue;
        const filteredDateArr = showtimeList.filter(
            (showingDay) =>
                moment(showingDay.ngayChieuGioChieu).format("L") ===
                    firstShowDay && showingDay
        );
        return filteredDateArr.length > 0 ? filteredDateArr : null;
    };

    return (
        <div
            value={value}
            index={0}
            role="tabpanel"
            hidden={value !== index}
            id={index}
        >
            {theaterSystem?.map((theater) => (
                <div key={theater.maCumRap} className="theater__item">
                    {Boolean(filterShowTime(theater.lichChieuPhim)) ? (
                        <>
                            <Typography className="theater__item--title">
                                {theater.tenCumRap}
                            </Typography>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    className="theater__item--info"
                                >
                                    <img
                                        src={theater.hinhAnh}
                                        alt="theater-img"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TheaterShowtime
                                        showTime={filterShowTime(
                                            theater.lichChieuPhim
                                        )}
                                        key={index}
                                    />
                                </Grid>
                            </Grid>
                            <Divider className="theater__item--divider" />
                        </>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default TheaterItem;
