import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" replace></Navigate>;
};

PrivateRouter.propTypes = {
    children: PropTypes.node
}

export default PrivateRouter;