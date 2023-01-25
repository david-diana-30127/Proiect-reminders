import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./User.css";
import useSecurity from "../../hooks/useSecurity";
import { getCurrentUser, updateUser } from "../../api/userApi";

export default function User() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const {email : userEmail, logout} = useSecurity();

  useEffect(() => {
    async function fetchCurrentUser() {
      setEmail(userEmail);
      const response = await getCurrentUser();
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
    }
    fetchCurrentUser();
  }, [userEmail])
  

  function validateForm() {
    return firstName.length > 0 && lastName.length > 0 && email.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await updateUser(email, firstName, lastName);
  }

  return (
    <div className="Register">
      <Form>
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
            disabled
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="btn-container">
          <Button block="true" size="lg" disabled={!validateForm()} className="primary-btn" onClick={handleSubmit}>
            Save
          </Button>
          <Button block="true" size="lg" type="button" className="secondary-btn" onClick={logout}>
            Logout
          </Button>
        </div>
      </Form>
    </div>
  );
}