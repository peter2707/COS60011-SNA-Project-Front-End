import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

import Layout from "./Layout";
import StudentHome from "./components/Student/StudentHome";
import StaffHome from "./components/Staff/StaffHome";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <WavyContainer />
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="studenthome" element={<StudentHome />} />
                <Route path="staffhome" element={<StaffHome />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
