import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/appContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      return setError("Password do not match!!");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email.current.value, password.current.value);
    } catch (error) {
      setError("Failed to create an account");
    }
    // email.current.value = "";
    // password.current.value = "";
    // confirmPassword.current.value = "";
    setLoading(false);
  };

  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSignUp}>
        <h3>Sign Up</h3>

        {error && <Alert variant="danger">{error}</Alert>}
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
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder="Confirm password"
            type="password"
            ref={confirmPassword}
          />
        </Form.Group>
        <Button
          className="mt-3"
          id="btn-sign-up"
          variant="primary"
          type="submit"
          disabled={loading}
        >
          SignUp
        </Button>
      </Form>
      <div className="d-flex justify-content-center align-items-center mt-3">
        Already have a account?<Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
