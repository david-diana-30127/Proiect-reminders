import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import useSecurity from "../../hooks/useSecurity";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../api/userApi";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, loggedIn} = useSecurity();
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate])
  

  function validateForm() {
    return firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await userRegister(firstName, lastName, email, password);
    await login(email, password)
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="firstName">
          <Form.Label className="form-label">First name</Form.Label>
          <Form.Control
            className="form-input"
            autoFocus
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastName">
          <Form.Label className="form-label">Last name</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            className="form-input"
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
          <Button block="true" size="lg" type="submit" disabled={!validateForm()} className="primary-btn">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}