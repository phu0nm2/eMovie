import "./index.scss";
import { Link } from "react-router-dom";

const MovieItem = (movie) => {
  const { hinhAnh, tenPhim, moTa, maPhim } = movie.movies;
  return (
    <div>
      <Link to={`/movie/${maPhim}`}>
        <div className="movie-content">
          <div className="movie-home-card">
            <img className="movie-home-img" src={hinhAnh} alt="" />
          </div>
        </div>
        <h4 className="text-white movie-home-title">{tenPhim}</h4>
        <p className="text-gray-100 movie-home-text">
          {moTa.substr(0, 40) + ".."}
        </p>
      </Link>
    </div>
  );
};

export default MovieItem;
