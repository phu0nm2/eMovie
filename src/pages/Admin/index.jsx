import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../NotFound";
import AddMovie from "./AdminMovieForm";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminMovie from "./Movie";
import AdminUser from "./User";
import AdminAddShowtime from "./AdminAddShowtime";
import EditUser from "./AdminUserForm/EditUser";
import AddUser from "./AdminUserForm/AddUser";

const Admin = () => {
  const { path } = useRouteMatch();

    return (
        <AdminWrapper>
            <Switch>
                <Route path={`${path}/films/addnew`} component={AddMovie} exact />
                <Route path={`${path}/films/edit/:id`} component={AddMovie} exact />
                <Route path={`${path}/films/showtime/:id`} component={AdminAddShowtime} exact />
                <Route path={`${path}/films`} component={AdminMovie} exact />
          
                <Route path={`${path}/users`} component={AdminUser} exact />
                <Route path={`${path}/users/edit/:id`} component={EditUser} exact />
                <Route path={`${path}/users/addnew`} component={AddUser} exact />
          
                <Route path="*" component={NotFound} />
            </Switch>
        </AdminWrapper>
    );
};

const AdminWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <AdminHeader />
      <AdminSidebar />
      {children}
    </React.Fragment>
  );
};

export default Admin;
