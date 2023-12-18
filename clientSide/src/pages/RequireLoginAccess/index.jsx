import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const RequireLoginAccess = () => {
    const location = useLocation();
    const isLoginedIn = Cookies.get("login");
    console.log({isLoginedIn})
    return (
        !isLoginedIn ?
        <Outlet/>
        : <Navigate to="/login" state={{ from: location.pathname }} replace/>
    );
}

export default RequireLoginAccess;