import './index.css';
import { Link,Outlet } from 'react-router-dom';
import { NavBar } from '../components';
import {useNavigate} from "react-router-dom"



import { useState } from 'react';

const Layout = () => {
    const [logoutMessage, setLogoutMessage] = useState('');
  const navigate= useNavigate()
    const handleClick = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/api/admin/logout", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setLogoutMessage(data.msg);
            // Redirect to login page after successful logout
            if (response.statusText === "OK") {
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <header className="header">
                <NavBar />
            </header>
            <div className="sidebar">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", minHeight: "24vh" }}>
                    <Link to="/dashboard/createitem">Create An Item</Link>
                    <Link to="/dashboard/patchitem">Patch An Item</Link>
                    <Link to="/dashboard/deleteitem">Delete An Item</Link>
                    <Link to="/dashboard/seeitems">View All Item</Link>
                </div>
                <button className="logout-button" onClick={handleClick}>Logout</button>
                {logoutMessage && <p>{logoutMessage}</p>}
            </div>
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
};


export default Layout;
