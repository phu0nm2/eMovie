import { createAction } from ".";
import { actionTypes } from "./type";
import { movieApi } from "./../../api/movieApi";
import { BookTicket } from "../../model/bookTicket";

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_MOVIE_REQUEST, {}));
    const { data } = await movieApi.getMovieById(id);
    dispatch(createAction(actionTypes.FETCH_MOVIE_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_MOVIE_FAIL, err));
  }
};

export const getShowtimeById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_SHOWTIME_REQUEST, {}));
    const { data } = await movieApi.getShowtimeByMovieId(id);
    dispatch(createAction(actionTypes.FETCH_SHOWTIME_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_SHOWTIME_FAIL, err));
  }
};

export const postBookTicket =
  (bookTicket = new BookTicket()) =>
  async (dispatch) => {
    try {
      dispatch(createAction(actionTypes.POST_bOOK_TICKET_REQUEST, {}));
      const { data } = await movieApi.postBookTicket(bookTicket);
      dispatch(
        createAction(actionTypes.POST_bOOK_TICKET_SUCCESS, data.content)
      );
      localStorage.getItem("token", data.content.accessToken);
    } catch (err) {
      console.log(err.response.data);
      dispatch(createAction(actionTypes.POST_bOOK_TICKET_FAIL, err));
    }
  };
