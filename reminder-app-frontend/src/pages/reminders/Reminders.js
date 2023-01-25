import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getReminders, deleteReminders } from '../../api/reminderApi';
import ReminderCard from '../../components/ReminderCard';
import ReminderModal from '../../components/ReminderModal';
import { getFormattedDate } from '../../util/dateUtils';

function Reminders() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [reminders, setReminders] = useState([]);
    const [selectedReminders, setSelectedReminders] = useState([]);

    useEffect(() => {
        fetchReminders();
    }, [])
    async function fetchReminders() {
        const response = await getReminders()
        setReminders(response.data);

    }

    function handleSelectedReminder(id, checked) {
        if (checked) {
            setSelectedReminders([id, ...selectedReminders]);
        }
        else {
            setSelectedReminders(selectedReminders.filter(i => i !== id));
        }
    }

    function handleModal() {
        if (isModalOpen === true) {
            fetchReminders()
        }
        setModalOpen(!isModalOpen);
        
    }

    async function deleteSelectedReminders() {
        await deleteReminders(selectedReminders)
        await fetchReminders();
    }
    
    return (
        <div>
            <div>
                <div className="btn-container">
                    <Button block="true" size="lg" className="primary-btn" onClick={handleModal}>
                        Add reminder
                    </Button>
                    <Button block="true" size="lg" className="primary-btn" onClick={deleteSelectedReminders}>
                        Delete reminders
                    </Button>
                </div>
            </div>
            <div>
                {
                    reminders && reminders.map((reminder) => 
                        <ReminderCard
                            key={reminder.id}
                            id={reminder.id}
                            title={reminder.title}
                            description={reminder.descriere}
                            date={getFormattedDate(reminder.date)}
                            handleSelectedReminder={handleSelectedReminder}
                            fetchReminders={fetchReminders}
                        /> 
                    )
                }
            </div>
            {isModalOpen && <ReminderModal handleModal={handleModal} handleSelectedReminder/>}
        </div>
    );
}

export default Reminders;
