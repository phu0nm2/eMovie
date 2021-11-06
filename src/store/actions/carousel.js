// call api carousel
import { createAction } from ".";
import { movieApi } from "../../api/movieApi";
import { actionTypes } from "./type";

export const fetchCarousels = () => async dispatch => {
  try {
    dispatch(createAction(actionTypes.FETCH_CAROUSEL_REQUEST, {}));
    const { data } = await movieApi.getBanners();
    dispatch(createAction(actionTypes.FETCH_CAROUSEL_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_CAROUSEL_FAILURE, err));
  }
};
