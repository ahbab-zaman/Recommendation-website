import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(user){
        return children
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Navigate state={location} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;