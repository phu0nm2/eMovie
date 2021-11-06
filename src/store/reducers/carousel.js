import { actionTypes } from "../actions/type";

const initialState = {
  carouselList: [],
  loading: false,
  error: null,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_CAROUSEL_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_CAROUSEL_SUCCESS: {
      state.carouselList = payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case actionTypes.FETCH_CAROUSEL_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducers;
