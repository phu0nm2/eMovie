import { Box, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TheaterList from "../../components/TheaterList";
import VideoTrailer from "../../components/VideoTrailer";
import { getMovieById } from "../../store/actions/movie";
import { PlayIcon } from "./../../assets/detailIcon";
import "./style.scss";
import Layout from '../../HOCs/Layout';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movieDetail, loading } = useSelector(
        (state) => state.movieList
    );

    useEffect(() => {
        dispatch(getMovieById(id));
    }, [dispatch, id]);

    return (
        <Layout loading={loading}>
            <div className="detail">
                <div
                    className="detail__bg"
                    style={{ backgroundImage: `url(${movieDetail?.hinhAnh})` }}
                ></div>

                <div className="detail__container">
                    <div className="article">
                        <Grid container>
                            <Grid item xs={12} lg={8}>
                                <a
                                    href={movieDetail?.trailer}
                                    target="_blank"
                                    className="trailerBtn"
                                    rel="noreferrer"
                                >
                                    <PlayIcon />
                                    Trailer
                                </a>

                                <div className="article__content">
                                    <h2>{movieDetail?.tenPhim}</h2>
                                    <ul className="list">
                                        <li>Rating: {movieDetail?.danhGia}</li>
                                        <li>
                                            {movieDetail?.dangChieu
                                                ? "Now Showing"
                                                : movieDetail?.sapChieu
                                                ? "Coming Soon"
                                                : undefined}
                                        </li>
                                        <li>
                                            {moment(
                                                movieDetail?.ngayKhoiChieu
                                            ).format("MMM Do YYYY")}
                                        </li>
                                    </ul>
                                    <p>{movieDetail?.moTa}</p>
                                </div>
                            </Grid>

                            <Grid item xs={12} lg={8}>
                                <VideoTrailer src={movieDetail?.trailer} />
                            </Grid>
                        </Grid>
                    </div>

                    <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: 2 }}>
                        <TheaterList />
                    </Box>
                </div>
            </div>
        </Layout>
    );
};

export default Detail;
