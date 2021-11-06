import { adminTypes } from "../../actions/type"

const adminMovieInitialState = {
    loading: false,
    error: null,
    movieList: [],
    editingMovie: null,
    notify: '',
    theaterList: [],
    selectedTheaterSystem: [],
}

const adminMovieReducer = (state = adminMovieInitialState, { type, payload }) => {
    switch (type) {
        case adminTypes.ADMIN_GET_MOVIES_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_GET_MOVIES_SUCCESS:
            state.loading = false;
            state.error = null;
            state.movieList = payload;
            return { ...state };
        case adminTypes.ADMIN_GET_MOVIES_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_ADD_MOVIE_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_ADD_MOVIE_SUCCESS:
            state.loading = false;
            state.error = null;
            state.movieList = payload;
            return { ...state };
        case adminTypes.ADMIN_ADD_MOVIE_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_GET_MOVIE_BY_ID_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_GET_MOVIE_BY_ID_SUCCESS:
            state.loading = false;
            state.error = null;
            state.editingMovie = payload;
            return { ...state };
        case adminTypes.ADMIN_GET_MOVIE_BY_ID_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_EDIT_MOVIE_BY_ID_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_EDIT_MOVIE_BY_ID_SUCCESS:
            state.loading = false;
            state.error = null;
            state.editingMovie = payload;
            return { ...state };
        case adminTypes.ADMIN_EDIT_MOVIE_BY_ID_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_DELETE_MOVIE_BY_ID_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_DELETE_MOVIE_BY_ID_SUCCESS:
            state.loading = false;
            state.error = null;
            state.notify = payload;
            return { ...state };
        case adminTypes.ADMIN_DELETE_MOVIE_BY_ID_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_GET_THEATER_LIST_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_GET_THEATER_LIST_SUCCESS:
            state.loading = false;
            state.error = null;
            state.theaterList = payload;
            return { ...state };
        case adminTypes.ADMIN_GET_THEATER_LIST_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_GET_THEATER_ITEM_BY_ID_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_GET_THEATER_ITEM_BY_ID_SUCCESS:
            state.loading = false;
            state.error = null;
            state.selectedTheaterSystem = payload;
            return { ...state };
        case adminTypes.ADMIN_GET_THEATER_ITEM_BY_ID_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.ADMIN_ADD_SHOWTIME_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_ADD_SHOWTIME_SUCCESS:
            state.loading = false;
            state.error = null;
            state.notify = payload;
            return { ...state };
        case adminTypes.ADMIN_ADD_SHOWTIME_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case adminTypes.CLEAR_FORM:
            state.editingMovie = null;
            return { ...state };
        
        default:
            return state
    }
}

export default adminMovieReducer;
