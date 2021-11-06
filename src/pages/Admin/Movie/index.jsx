import { SearchOutlined } from "@mui/icons-material";
import { Button, Input, Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createAction } from "../../../store/actions";
import { getAdminMovieList } from "../../../store/actions/Admin/movie";
import { adminTypes } from "../../../store/actions/type";
import MovieItem from "./MovieItem";
import "./style.scss";

const AdminMovie = () => {
    const dispatch = useDispatch();
    const { movieList } = useSelector((state) => state.adminMovie);
    const [movieName, setMovieName] = React.useState(null);
    const [page, setPage] = React.useState(1);

    const onSearch = (value) => setMovieName(!!value ? value : null);
    const handleChangePage = (page) => setPage(page);
    const handleAddnewClick = () => {
        dispatch(createAction(adminTypes.CLEAR_FORM));
    }

    React.useEffect(() => {
        dispatch(
            getAdminMovieList({
                tenPhim: movieName,
                soTrang: page,
            })
        );
    }, [dispatch, movieName, page]);

    return (
        <div className="admin--movie__wrapper">
            <div className="admin--movie">
                <div className="admin--movie__title">
                    <h2>Movie List</h2>
                    <span className="admin--movie__title--stat">
                        {movieList.totalCount} total
                    </span>
                    <div className="admin--movie__title--wrap">
                        <Button className="admin--movie__add" type="button" onClick={handleAddnewClick}>
                            <Link to="/admin/films/addnew">Add New</Link>
                        </Button>
                        
                        <Input.Search
                            placeholder="Find Movie..."
                            onSearch={onSearch}
                            enterButton
                            className="admin--movie__search"
                            suffix={
                                <SearchOutlined
                                    style={{ color: "#2f80ed", fontSize: 18 }}
                                />
                            }
                        />
                    </div>
                </div>

                <div className="admin--movie__content">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Movie name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movieList?.items?.map((movieItem, index) => (
                                <MovieItem movieItem={movieItem} key={index} />
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="admin--movie__pagination">
                    <Pagination
                        responsive
                        current={movieList?.currentPage}
                        defaultCurrent={1}
                        total={movieList?.totalCount}
                        onChange={handleChangePage}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminMovie;
