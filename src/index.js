import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import { createContext } from "react";

import Layout from "./Layout";
import StudentDashboard from "./components/StudentDashboard";
import StaffDashboard from "./components/StaffDashboard";
import Survey from "./components/Survey";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const TokenContext = createContext();

const MainApp = () => {
  
  const [token, setToken] = useState({});
  return (
    <BrowserRouter>
      <WavyContainer />
      <TokenContext.Provider value={token}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="studentdashboard" element={<StudentDashboard />} />
            <Route path="staffdashboard" element={<StaffDashboard />} />
            <Route path="survey" element={<Survey />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login setToken={setToken} />} />
          </Route>
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
};

root.render(<MainApp/>);
