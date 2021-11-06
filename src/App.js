import { useEffect } from "react";
import { Route, Switch } from "react-router";

import { movieApi } from "./api/movieApi";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TicketRoom from "./pages/TicketRoom";

import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import UserProfile from './pages/UserProfile';
import { AuthRoute, PrivateRoute } from "./HOCs/Routes";
import { useDispatch } from "react-redux";
import { refreshToken } from "./store/actions/user";
import Admin from "./pages/Admin";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!!token) dispatch(refreshToken(token));
  }, [dispatch]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        await movieApi.getAll();
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, []);

  

  return (
    <Switch>
      <AuthRoute path="/signin" component={SignIn} redirectPath="/" />
      <AuthRoute path="/signup" component={SignUp} redirectPath="/" />

      <PrivateRoute path="/profile" component={UserProfile} redirectPath="/signin" />
      <PrivateRoute path="/admin" component={Admin} redirectPath="/signin" />
      
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/ticketroom/:id" component={TicketRoom} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
