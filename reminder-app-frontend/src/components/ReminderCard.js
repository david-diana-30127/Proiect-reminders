import React, { useEffect, useState } from "react";
import './ReminderCard.css';
import ReminderModal from "./ReminderModal";

const ReminderCard = ({ id, title, description, date, handleSelectedReminder, fetchReminders }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        handleSelectedReminder(id, checked);
    }, [checked, id]);

    function handleModal() {
        if (isModalOpen === true) {
            fetchReminders()
        }
        setModalOpen(!isModalOpen);
    }

    return (
        <div className="reminder-card" >
            <div className="checkbox-container">
                <input className="checkbox" type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)}/>
            </div>
            <div onClick={handleModal}>
                <h2 className="reminder-card-title">{title}</h2>
                <p className="reminder-card-description">{description}</p>
                <p className="reminder-card-date">{date}</p>
            </div>
            {isModalOpen && <ReminderModal handleModal={handleModal} reminderTitle={title} reminderDate={date} reminderDescription={description} reminderId={id} />}
        </div>
    );
};

export default ReminderCard;
