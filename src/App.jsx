import React from "react";
import Register from "./frontend/pages/Register";
import Login from "./frontend/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./frontend/pages/Dashboard";




function App(){
  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>


  )
}
export default App;