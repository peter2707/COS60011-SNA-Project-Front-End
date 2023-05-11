import React from "react";
import { WavyLink } from "react-wavy-transitions";
import "./App.css";

const App = () => {
    return (
        <div className="home-menu">
            <h1>Home Page</h1>
            <div>
                <WavyLink to="/studenthome" color="#272635">
                    <button>Student</button>
                </WavyLink>
            </div>
            <div>
                <WavyLink to="/staffhome" color="#272635">
                    <button>Staff</button>
                </WavyLink>
            </div>
        </div>
    );
};

export default App;
