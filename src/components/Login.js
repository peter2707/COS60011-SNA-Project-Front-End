import React from "react";
import { WavyLink } from "react-wavy-transitions";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const LogIn = () => {
    return (
        <div className="col-md-4 offset-md-4 login">
            <h3 className="mt-5 mb-5">Log In</h3>
            <Form>
                <Form.Control type="email" placeholder="Enter Email" />
                <br />
                <Form.Control type="password" placeholder="Enter Password" />
                <br />
                <WavyLink to="/register" color="#092644"><u>New user?</u></WavyLink>
                <Button variant="primary" type="submit" className="btn">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;
