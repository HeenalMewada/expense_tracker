import React from "react";
import "./Register.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Login from "./Login.jsx";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [error, setError] = useState(null)
const r_to_l = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password);
        if(email=="" && password=="" && confirmPassword=="")
    setError("fields are empty");
return
if(password!==confirmPassword)
    setError("Password don't match");
return
        fetch("http://localhost/expense-tracker/tracker/backend/register.php", {
            method: "POST",
             headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });
 
        }

    
    return (
        <div className="register_container">

            <div className="left_side">
                <h2 className="leftside_heading">Expense <span style={{color:"rgba(201, 195, 195, 0.9)"}}>tracker</span> </h2>
                <p style={{ padding: "12px 12px", borderRadius: "25px", width: "250px", backgroundColor: " rgb(77, 77, 238)", color: "white" }}>Smart Finance Tracker</p>
                <p style={{color:"#252525"}}>Control your spending habits like a pro</p>
                <p style={{color:"#222222"}}>Track every rupee. Set budgets. Get insights that actually help you save more every month.</p>
            </div>
            <div className="r_divider"></div>
            <div className="right_side">
                <h3 style={{color:"white", fontSize:"30px"}}>Let's you get in...</h3>
                <form action="" id="form" onSubmit={handleSubmit}>
                    
                    <label htmlFor="email">Email address</label>
                    <input type="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="password">Set your password</label>
                    <input type="password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="C_password">Confirm Your Password</label>
                    <input type="password" value={confirmPassword} id="C_password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <button type="submit"className="r_button">Create an account</button>
                </form>
                <p style={{color:"#333",marginTop:"5px"}}>Alreay have an account? <span onClick={() => r_to_l("/")}> Login</span></p>
            </div>
            
        </div>
    )

}
export default Register;