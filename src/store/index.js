import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import carouselList from "./reducers/carousel";
import movieList from "./reducers/movie";
import cinema from "./reducers/cinema";
import user from "./reducers/user";
import admin from "./reducers/Admin";
import adminMovie from "./reducers/Admin/movie";
import adminUser from "./reducers/Admin/user";

const rootReducer = combineReducers({
  carouselList,
  movieList,
  cinema,
  user,
  admin,
  adminMovie,
  adminUser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
