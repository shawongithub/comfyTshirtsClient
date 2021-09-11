import React, { useContext } from "react";
import {
    Route,
    Redirect
} from "react-router-dom";
import { UserContext } from "../../App";

const ProtectedRoute = ({ children, ...rest }) => {
    const [user] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.signIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;