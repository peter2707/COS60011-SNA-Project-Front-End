import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="col-md-4 offset-md-4">
            <h3>Register</h3>
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
                    Register
                </button>
            </form>
        </div>
  )
}

export default Register