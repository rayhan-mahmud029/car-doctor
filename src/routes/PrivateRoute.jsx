import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()

    if (user){
        return children;
    }
    return <Navigate to='/login' replace={true} state={{from: location}}/>
};

export default PrivateRoute;