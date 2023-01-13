// eslint-disable-next-line
import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const LoginRoute = ({children}) => {
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to='/sign-in'/>
    }

  return children
}

export default LoginRoute