import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

import Layout from "./Layout";
import StudentDashboard from "./components/StudentDashboard";
import StaffDashboard from "./components/StaffDashboard";
import Survey from "./components/Survey";
import Analysis from "./components/Analysis";
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
                <Route path="studentdashboard" element={<StudentDashboard />} />
                <Route path="staffdashboard" element={<StaffDashboard />} />
                <Route path="survey" element={<Survey />} />
                <Route path="analysis" element={<Analysis />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
