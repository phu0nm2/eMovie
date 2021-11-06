import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const createRoute = condition => ({ path, component: RouteComponent, redirectPath }) => (
    <Route 
        path={path}
        render={routeProps => {
            if (condition()) {
                return <RouteComponent { ...routeProps } />
            }
            return <Redirect to={redirectPath} />;
        }} 
    />
)

export const AuthRoute = createRoute(() => !localStorage.getItem('token'));
export const PrivateRoute = createRoute(() => localStorage.getItem('token'));