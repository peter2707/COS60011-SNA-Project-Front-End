import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="col-md-4 offset-md-4">
            <h3>Log In</h3>
            <br />
            <br />
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Email:</span>
                    </div>
                    <input
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Email Address"
                        required
                    />
                </div>
                <br />
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Password:</span>
                    </div>
                    <input
                        class="form-control"
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        required
                    />
                </div>
                <br />
                <br />
                <Link to="/">
                    <button className="btn btn-secondary">Back</button>
                </Link>
                <button className="btn btn-primary" type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LogIn;
