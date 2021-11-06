import { adminTypes } from "../../actions/type";

const initialState = {
  isAdmin: false,
  isOpenSidebar: false,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case adminTypes.IS_ADMIN:
      state.isAdmin = payload;
      return { ...state };

    case adminTypes.IS_OPEN_SIDEBAR:
      state.isOpenSidebar = !state.isOpenSidebar;
      return { ...state };

    default:
      return state;
  }
};

export default adminReducer;
