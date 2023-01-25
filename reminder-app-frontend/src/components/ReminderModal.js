import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addReminder, updateReminder } from "../api/reminderApi";
import './ReminderModal.css';

const ReminderModal = ({handleModal, reminderId, reminderTitle, reminderDescription, reminderDate}) => {
  const [title, setTitle] = useState(reminderTitle || "");
  const [id] = useState(reminderId)
  const [description, setDescription] = useState( reminderDescription || "");
  const [date, setDate] = useState(reminderDate || new Date().toISOString().split('T')[0]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!!id) {
      await updateReminder(id, title, description, date);
    }
    else {
      await addReminder(title, description, date);
    }
    handleModal();
  }
  

  
  function validateForm() {
    return title.length > 0 && description.length > 0 && date.toLocaleString().length > 0;
  }
  
  return (
    <div className="modal">
        <div className="modal-content">
            <Form>
              <Form.Group size="lg" controlId="title">
                <Form.Label className="form-label">Title</Form.Label>
                <Form.Control
                  className="form-input"
                  autoFocus
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="description">
                <Form.Label className="form-label">Description</Form.Label>
                <Form.Control
                  className="form-input"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="date">
                <Form.Label className="form-label">Date</Form.Label>
                <Form.Control
                  className="form-input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <div className="btn-container">
                <Button block="true" size="lg" type="submit" disabled={!validateForm()} onClick={(e) => handleSubmit(e)} className="primary-btn">
                  Save
                </Button>
                <Button block="true" type="button" size="lg" onClick={handleModal} className="secondary-btn">
                  Close
                </Button>
              </div>
            </Form>
        </div>
    </div>
  );
};

export default ReminderModal;