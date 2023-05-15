import React from "react";
import { WavyLink } from "react-wavy-transitions";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Register.css";

const Register = () => {
    return (
        <div className="col-md-6 offset-md-3 text-center">
            <h3 className="mt-5 mb-5">Register</h3>
            <Form className="text-left">
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Last name" />
                    </Col>
                    <Col>
                        <Form.Select aria-label="Gender">
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
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                    <Col>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Row>
                <br />
                <Form.Control type="text" placeholder="Address" />
                <br />
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Select aria-label="State">
                            <option>Choose State</option>
                            <option value="New South Wales">
                                New South Wales
                            </option>
                            <option value="Queensland">Queensland</option>
                            <option value="Northern Territory">
                                Northern Territory
                            </option>
                            <option value="Western Australia">
                                Western Australia
                            </option>
                            <option value="South Australia">
                                South Australia
                            </option>
                            <option value="Victoria">Victoria</option>
                            <option value="Australian Capital Territory">
                                Australian Capital Territory
                            </option>
                            <option value="Tasmania">Tasmania</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Postcode" />
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
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            type="radio"
                            label="Teacher/Staff"
                            name="accountType"
                            id="accountTypeStaff"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="School name" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Class ID" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Student ID" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className="text-center">
                        <WavyLink to="/login" color="#092644"><u>Already a user?</u></WavyLink>
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
