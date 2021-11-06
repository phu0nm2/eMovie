import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../../../components/MovieItem";
import { fetchMovies } from "../../../store/actions/movie";

const MovieList = () => {
  const dispatch = useDispatch();
  const { loading, movieList } = useSelector((state) => state.movieList);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {movieList?.map((movies) => {
            return (
              <Grid key={movies.maPhim} item xs={12} sm={6} md={3}>
                <MovieItem movies={movies} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default MovieList;
