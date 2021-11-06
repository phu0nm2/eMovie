import { actionTypes } from "../actions/type";

const initialState = {
  movieList: [],
  movieDetail: null,
  selectedMovie: null,
  error: null,
  loading: false,
  bookingTicket: [],
  bookTicket: {},
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      state.loading = false;
      state.error = null;
      state.movieList = payload;
      return { ...state };
    case actionTypes.FETCH_MOVIES_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.FETCH_MOVIE_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      state.loading = false;
      state.error = null;
      state.movieDetail = payload;
      return { ...state };
    case actionTypes.FETCH_MOVIE_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.FETCH_SHOWTIME_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_SHOWTIME_SUCCESS:
      state.loading = false;
      state.error = null;
      state.selectedMovie = payload;
      return { ...state };
    case actionTypes.FETCH_SHOWTIME_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.POST_BOOK_TICKET_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.POST_BOOK_TICKET_SUCCESS:
      state.loading = false;
      state.error = null;
      state.bookTicket = payload;
      return { ...state };
    case actionTypes.POST_BOOK_TICKET_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.BOOKING_TICKET:
      const cloneBookingTicket = [...state.bookingTicket];
      const foundIndex = cloneBookingTicket.findIndex(
        (seatSelect) => seatSelect.maGhe === payload.maGhe
      );

      if (foundIndex !== -1) {
        cloneBookingTicket.splice(foundIndex, 1);
      } else {
        cloneBookingTicket.push(payload);
      }
      return { ...state, bookingTicket: cloneBookingTicket };

    default:
      return state;
  }
};

export default reducers;
