import { actionTypes } from "../actions/type";

const initialState = {
  cinema: [],
  cinemaTimes: [],
  loading: false,
  error: null,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_CINEMA_TIMES_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_CINEMA_TIMES_SUCCESS: {
      state.cinemaTimes = payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case actionTypes.FETCH_CINEMA_TIMES_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducers;
