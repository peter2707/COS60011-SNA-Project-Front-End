import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import jwt_decode from 'jwt-decode';

import "./Login.css";

const LogIn = ({setToken}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Perform form validation
        if (!email || !password) {
            setLoading(false);
            setError("Please enter both email and password");
            return;
        }

        // Make the login request to the API
        axios
            .post("http://localhost:3000/login", { email, password, "role":"student" })
            .then((response) => {
                // Handle the successful login response
                setLoading(false);
                setError("");

                setToken(response.data.token);

                // Determine the account type from the response (assuming there's a "type" field)
                const decodedToken = jwt_decode(response.data.token)

                // Redirect the user based on their account type
                if (decodedToken['role'] === "staff") {
                    navigate("/staffdashboard");
                } else if (decodedToken['role'] === "student") {
                    navigate("/studentdashboard");
                } else {
                    setError("Invalid account type");
                }
            })
            .catch((error) => {
                // Handle the login error response
                setLoading(false);
                setError("Invalid email or password");
                console.error("Login error:", error);
            });

        // Simulated login response
        setLoading(false);
        setError("");

        // Simulated test for login function
        // Remove this code once you integrate with your actual API
        console.log("Login successful");

        // Hardcoded account details for testing
        // const accountDetails = [
        //     { email: "staff@example.com", password: "staff123", type: "staff" },
        //     { email: "student@example.com", password: "student123", type: "student" },
        // ];

        // Find the account based on email and password
        // const account = accountDetails.find(
        //     (acc) => acc.email === email && acc.password === password
        // );

        // if (account) {
        //     // Redirect the user based on their account type
        //     if (account.type === "staff") {
        //         navigate("/staffdashboard");
        //     } else if (account.type === "student") {
        //         navigate("/studentdashboard");
        //     } else {
        //         setError("Invalid account type");
        //     }
        // } else {
        //     setError("Invalid email or password");
        // }


    };

    return (
        <div className="col-md-4 offset-md-4 login">
            <h3 className="mt-5 mb-5">Log In</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <WavyLink to="/register" color="#092644">
                    <u>New user?</u>
                </WavyLink>
                <Button
                    variant="primary"
                    type="submit"
                    className="btn"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging In..." : "Log In"}
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;