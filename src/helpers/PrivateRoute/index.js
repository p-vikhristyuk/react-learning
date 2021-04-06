import React from 'react';
import {
    Redirect,
    Route
} from 'react-router-dom';

const PrivateRoute = ({component = <></>, access = false, ...rest}) => {
    return (
        <>
            <Route
                {...rest}
                render={() => access ? component : <Redirect to={{pathname: "/error-page/403"}}/>}
            />
        </>
    )
};

export default PrivateRoute;
