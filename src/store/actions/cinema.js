import { createAction } from ".";
import { movieApi } from "../../api/movieApi";
import { actionTypes } from "./type";

export const fetchCinemaTimes = () => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_CINEMA_TIMES_REQUEST, {}))
    const { data } = await movieApi.getMoviesByCinema();
    dispatch(createAction(actionTypes.FETCH_CINEMA_TIMES_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_CINEMA_TIMES_FAILURE, err));
  }
};
