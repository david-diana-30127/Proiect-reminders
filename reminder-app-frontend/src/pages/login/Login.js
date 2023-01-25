import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import useSecurity from "../../hooks/useSecurity";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, loggedIn} = useSecurity();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn])

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="Login">
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-input"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="btn-container">
          <Button block="true" size="lg" disabled={!validateForm()} className="primary-btn" onClick={handleSubmit}>
            Login
          </Button>
          <Link to="/register" className="secondary-btn">Register</Link>
        </div>
      </Form>
    </div>
  );
}