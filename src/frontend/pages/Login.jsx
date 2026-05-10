import React from "react";
import "./Login.css"
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import Register from "./Register.jsx";
import {useNavigate} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const l_to_r = useNavigate();
    const dashboard= useNavigate();

   async function handleSubmit(e) {

    e.preventDefault();

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/login.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        console.log(data);

        if (data.status === "success") {

            alert("Login successful");

            dashboard("/Dashboard");

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

        alert("Something went wrong");

    }
}

    return (
        <div className="Login_container">
            <IoLockClosedOutline className="lock_icon" />
            <h2 style={{ fontSize: "24px", marginTop: "10px" , color:"#333"}}>Expense <span style={{color:"rgba(255,255,255,0.9)"}}>Tracker</span></h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px" }}>Manage Your expense smartly</p>

            <form action="" id="form" onSubmit={handleSubmit}>
                <div className="buttons">
                    <button>Sign in</button>
                    <button type="button" onClick={()=>{l_to_r("/Register")}} >Create account</button>
                </div>
                <div className="divider"></div>
                <label htmlFor="email">Email address</label>
                <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)}  placeholder="abc@gmail.com"/>
                <label htmlFor="">Password</label>
                <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} placeholder="123456"/>
                <button type="submit" id="signin_button"  disabled={!email && !password}>Sign in</button>

            </form>
            
        </div>
    )

}
export default Login;