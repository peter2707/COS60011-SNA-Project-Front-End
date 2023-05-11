import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Register = () => {
    return (
        <div className="col-md-4 offset-md-4">
            <h3 className="mt-5 mb-5">Register</h3>
            <Form>
                <Form.Control type="email" placeholder="Enter Email" />
                <br />
                <Form.Control type="password" placeholder="Enter Password" />
                <br />
                <Link to="/">
                    <button className="btn btn-secondary">Back</button>
                </Link>
                <Button variant="primary" type="submit" className="btn">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
