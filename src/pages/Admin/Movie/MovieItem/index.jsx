import {
    CalendarOutlined
} from '@ant-design/icons';
import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteModal from "../../../../components/DeleteModal";
import { deleteMovie } from "../../../../store/actions/Admin/movie";
import "./style.scss";

const MAX_LENGTH_STR = 35;

const MovieItem = ({ movieItem }) => {
    const dispatch = useDispatch();
    const { maPhim, tenPhim, hinhAnh, moTa } = movieItem;
    const { movieList } = useSelector(state => state.adminMovie);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [movieId, setMovieId] = React.useState(null);

    const handleDeleteItem = (event) => {
        setMovieId(event.target.id);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        dispatch(deleteMovie(movieId, movieList?.currentPage));
        setMovieId(null);
    };

    const handleCancel = () => {
        setMovieId(null);
        setIsModalVisible(false);
    };

    return (
        <>
            <DeleteModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <tr className="movie--item">
                <td>
                    <div className="movie--item__text">{maPhim}</div>
                </td>
                <td>
                    <div className="movie--item__img">
                        <img
                            src={hinhAnh}
                            alt="movie--img"
                            className="w-16 h-16"
                        />
                    </div>
                </td>
                <td>
                    <div className="movie--item__text">{tenPhim}</div>
                </td>
                <td>
                    <div className="movie--item__text">
                        {moTa.slice(0, MAX_LENGTH_STR) +
                            (moTa.length > MAX_LENGTH_STR ? "..." : "")}
                    </div>
                </td>
                <td>
                    <div className="movie--item__btns">
                        <Link
                            className="movie--item__btn movie--item__btns--edit"
                            to={`/admin/films/edit/${maPhim}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
                            </svg>
                        </Link>
                        <Link
                            className="movie--item__btn movie--item__btns--showtime"
                            to={`/admin/films/showtime/${maPhim}`}
                        >
                            <CalendarOutlined />
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path>
                            </svg> */}
                        </Link>
                        <Button
                            className="movie--item__btn movie--item__btns--delete"
                            onClick={handleDeleteItem}
                            type="button"
                            id={maPhim}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
                                </svg>
                            }
                        />
                    </div>
                </td>
            </tr>
        </>
    );
};

export default MovieItem;
