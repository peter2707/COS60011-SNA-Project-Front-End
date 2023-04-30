import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <Link to="/studenthome">
                    <button>Student</button>
                </Link>
            </div>
            <div>
                <Link to="/staffhome">
                    <button>Staff</button>
                </Link>
            </div>
        </div>
    );
};

export default App;
