import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Feedback App</Link>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default Navbar;
