import {ButtonComponent,InputComponent} from "../../components"
import Cookies from 'js-cookie';
import { useState } from "react";
import './index.css'; // assuming the CSS is in index.css
import { useNavigate } from "react-router-dom"
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nagivate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input:username,
                password
            })
        });
        const data = await response.json();
        console.log(data.success); // do something with the response data
        if (data.success){
            Cookies.set("login", "true", { expires: 7 }); // Set the cookie with a 7-day expiration
            console.log("hehe")
            nagivate("/welcome")
            
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <InputComponent placeholder="Username" value={username} label="Enter your username" type="text" onChange={(e) => setUsername(e.target.value)} />
                <InputComponent placeholder="Password" type="password" label="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <ButtonComponent type="submit" text="Login" onClick={handleLogin} />
            </form>
        </div>
    );
}

export default LoginPage;