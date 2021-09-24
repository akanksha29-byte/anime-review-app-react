import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/appContext";
import { Link, useHistory } from "react-router-dom";

const LogIn = () => {
  const email = useRef();
  const password = useRef();

  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(email.current.value, password.current.value);
      history.push("/");
    } catch (error) {
      setError("Failed to log in");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleLogIn}>
        <h3>Log In</h3>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Enter email" type="text" ref={email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            placeholder="Enter password"
            type="password"
            ref={password}
          />
        </Form.Group>
        <Button
          className="mt-3"
          id="btn-sign-up"
          variant="primary"
          type="submit"
          disabled={loading}
        >
          LogIn
        </Button>
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
      </Form>
      <div className="d-flex justify-content-center align-items-center mt-3">
        Do not have an account?<Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LogIn;
