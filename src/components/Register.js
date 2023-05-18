import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("");
    const [error, setError] = useState("");

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            setError("");
            try {
                const formData = new FormData(e.target);
                const response = await axios.post(
                    "https://my-api.com/register",
                    formData
                );
                if (response.data.success) {
                    // Redirect the user to the login page
                    navigate("/login");
                } else {
                    setError("There was a problem with registration. Please try again.");
                }
            } catch (error) {
                setError("An error occurred during registration");
                console.error("Registration error:", error);
            }
        }
    };

    const validateForm = () => {
        let isValid = true;

        if (!accountType) {
            setError("Please select an account type");
            isValid = false;
        }

        // First name validation
        const firstNameInput = document.getElementById("firstNameInput");
        if (!firstNameInput.value.trim()) {
            setError("Please enter your first name");
            isValid = false;
        }

        // Last name validation
        const lastNameInput = document.getElementById("lastNameInput");
        if (!lastNameInput.value.trim()) {
            setError("Please enter your last name");
            isValid = false;
        }

        // Email validation
        const emailInput = document.getElementById("emailInput");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            setError("Please enter your email");
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            setError("Please enter a valid email");
            isValid = false;
        }

        // Password validation
        const passwordInput = document.getElementById("passwordInput");
        if (!passwordInput.value.trim()) {
            setError("Please enter a password");
            isValid = false;
        }

        // Additional form validation logic here

        return isValid;
    };

    return (
        <div className="col-md-6 offset-md-3 text-center">
            <h3 className="mt-5 mb-5">Register</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="text-left" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="First name"
                            id="firstNameInput"
                            name="firstName"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Last name"
                            id="lastNameInput"
                            name="lastName"
                        />
                    </Col>
                    <Col>
                        <Form.Select aria-label="Gender" name="gender">
                            <option>Choose Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Two</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            id="emailInput"
                            name="email"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            id="passwordInput"
                            name="password"
                        />
                    </Col>
                </Row>
                <br />
                <Form.Control
                    type="text"
                    placeholder="Address"
                    name="address"
                />
                <br />
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                        />
                    </Col>
                    <Col>
                        <Form.Select aria-label="State" name="state">
                            <option>Choose State</option>
                            {/* State options */}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Postcode"
                            name="postcode"
                        />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={6}>
                        <p>Are you a Student or Teacher/Staff?</p>
                    </Col>
                    <Col>
                        <Form.Check
                            type="radio"
                            label="Student"
                            name="accountType"
                            id="accountTypeStudent"
                            value="student"
                            onChange={handleAccountTypeChange}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            type="radio"
                            label="Teacher/Staff"
                            name="accountType"
                            id="accountTypeStaff"
                            value="staff"
                            onChange={handleAccountTypeChange}
                        />
                    </Col>
                </Row>
                {accountType === "student" && (
                    <>
                        <Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="School name"
                                    name="schoolName"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Class ID"
                                    name="classId"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Student ID"
                                    name="studentId"
                                />
                            </Col>
                        </Row>
                        <br />
                    </>
                )}
                {accountType === "staff" && (
                    <>
                        <Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="School or Company name"
                                    name="organizationName"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Staff ID"
                                    name="staffId"
                                />
                            </Col>
                        </Row>
                        <br />
                    </>
                )}
                <Row>
                    <Col className="text-center">
                        <WavyLink to="/login" color="#092644">
                            <u>Already a user?</u>
                        </WavyLink>
                        <Button variant="primary" type="submit" className="btn">
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Register;
