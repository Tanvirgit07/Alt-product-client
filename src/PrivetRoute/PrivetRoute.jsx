import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return (
            <div className="h-[50vh] flex justify-center">
                <span className="loading h-screen loading-spinner loading-lg"></span>
            </div>
        )
    }
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};


PrivetRoute.propTypes = {
    children:PropTypes.node
}

export default PrivetRoute;