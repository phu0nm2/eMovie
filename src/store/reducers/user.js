import { authTypes } from "../actions/type";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authTypes.SIGN_UP_REQUEST:
            state.loading = true;
            return { ...state };
        case authTypes.SIGN_UP_SUCCESS:
            state.loading = false;
            state.error = null;
            return { ...state };
        case authTypes.SIGN_UP_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case authTypes.SIGN_IN_REQUEST:
            state.loading = true;
            return { ...state };
        case authTypes.SIGN_IN_SUCCESS:
            state.currentUser = payload;
            state.loading = false;
            state.error = null;
            return { ...state };
        case authTypes.SIGN_IN_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case authTypes.REFRESH_TOKEN_REQUEST:
            state.loading = true;
            return { ...state };
        case authTypes.REFRESH_TOKEN_SUCCESS:
            state.currentUser = payload;
            state.loading = false;
            state.error = null;
            return { ...state };
        case authTypes.REFRESH_TOKEN_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case authTypes.LOG_OUT_REQUEST:
            state.loading = true;
            return { ...state };
        case authTypes.LOG_OUT_SUCCESS:
            state.loading = false;
            state.currentUser = null;
            state.error = null;
            return { ...state };
        case authTypes.LOG_OUT_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        case authTypes.EDIT_USER_REQUEST:
            state.loading = true;
            return { ...state };
        case authTypes.EDIT_USER_SUCCESS:
            state.currentUser = payload;
            state.loading = false;
            state.error = null;
            return { ...state };
        case authTypes.EDIT_USER_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        default: return state;
    }
}

export default userReducer;
