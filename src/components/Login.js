import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./Login.css";

const LogIn = () => {
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
            .post("https://my-api.com/login", { email, password })
            .then((response) => {
                // Handle the successful login response
                setLoading(false);
                setError("");

                // Determine the account type from the response (assuming there's a "type" field)
                const { type } = response.data;

                // Redirect the user based on their account type
                if (type === "staff") {
                    navigate("/staffdashboard");
                } else if (type === "student") {
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

        
    };

    return (
        <div className="col-md-4 offset-md-4 login">
            <h3 className="mt-5 mb-5">Log In</h3>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <div className="text-left">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
                </div>
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
