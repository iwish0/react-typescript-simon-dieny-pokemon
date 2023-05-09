import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthenticationService } from './services/authentication-service';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props) => {
        const isAuthenticated = AuthenticationService.isAuthenticated;
        if (!isAuthenticated) {
            return <Redirect to={{ pathname: '/login' }} />
        }

        return <Component {...props} />
    }} />
);