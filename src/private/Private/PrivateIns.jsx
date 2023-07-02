import { useContext } from "react";
import { Authcontext } from "../provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../shared/loading/Loading";

// eslint-disable-next-line react/prop-types
const PrivateIns = ({ children }) => {
    const { user, loading, userRole } = useContext(Authcontext)
    const loacation = useLocation()
    if (loading) {
        return <Loading para={true}></Loading>
    }
    if (userRole.role == 'isntaractor') {
        return children
    }
    if (user) {

        return <Navigate to={'/'} state={{ from: loacation }}></Navigate>
    }
    return <Navigate to={'/login'} state={{ from: loacation }}></Navigate>
};

export default PrivateIns;