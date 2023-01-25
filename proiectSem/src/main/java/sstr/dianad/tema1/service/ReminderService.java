package sstr.dianad.tema1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sstr.dianad.tema1.model.Reminder;
import sstr.dianad.tema1.model.User;
import sstr.dianad.tema1.model.dto.ReminderDto;
import sstr.dianad.tema1.repository.ReminderRepository;
import sstr.dianad.tema1.utiles.UserUtils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReminderService {
    @Autowired
    private UserUtils userUtils;
    @Autowired
    private ReminderRepository reminderRepository;

    public void addReminder(ReminderDto reminderDto) {

        Reminder reminder = new Reminder();
        reminder.setDescriere(reminderDto.getDescriere());
        reminder.setTitlu(reminderDto.getTitle());
        reminder.setDate(reminderDto.getDate());
        User user = userUtils.getCurrentUser();
        reminder.setUser(user);
        reminderRepository.save(reminder);
    }

    public void deleteReminder(List<Integer> ids) {
        reminderRepository.deleteAllByIdInBatch(ids);
    }

    public void updateRemainder(ReminderDto reminderDto) {
        Optional<Reminder> reminderOptional = reminderRepository.findById(reminderDto.getId());
        if (reminderOptional.isPresent()) {
            Reminder reminder = reminderOptional.get();
            reminder.setTitlu(reminderDto.getTitle());
            reminder.setDescriere(reminderDto.getDescriere());
            reminder.setDate(reminderDto.getDate());
            reminderRepository.save(reminder);
        }

    }

    public List<ReminderDto> getAllRemindersForUser(Integer id) {
        List<Reminder> reminders = reminderRepository.findAllByUserId(id);
        return reminders.stream()
                .map(reminder -> new ReminderDto(reminder.getId(), reminder.getTitlu(), reminder.getDescriere(), reminder.getDate()))
                .toList();
    }
    public List<ReminderDto> getAllRemindersForUser(Integer id, Date date){
        List<Reminder> reminders = reminderRepository.findAllByUserId(id);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        return reminders.stream()
                .filter(reminder ->  sdf.format(reminder.getDate()).compareTo(sdf.format(date))==0)
                .map(reminder -> new ReminderDto(reminder.getId(), reminder.getTitlu(), reminder.getDescriere(), reminder.getDate()))
                .toList();
    }
}
