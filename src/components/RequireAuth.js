import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequireAuth=()=>{
    const{auth}=useAuth;
    const Location=useLocation;

    return(
        auth?.user
        ?<Outlet/>
        :<Navigate to="/login" state={{from: Location}} replace/>
    );

}

export default RequireAuth;

