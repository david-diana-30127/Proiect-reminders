package sstr.dianad.tema1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sstr.dianad.tema1.model.User;
import sstr.dianad.tema1.model.dto.ReminderDto;
import sstr.dianad.tema1.service.ReminderService;
import sstr.dianad.tema1.utiles.UserUtils;

import java.util.List;

@RestController
public class ReminderController {
    @Autowired
    private UserUtils userUtils;
    @Autowired
    private ReminderService reminderService;

    @PostMapping("/reminder")
    public void addReminder(@RequestBody ReminderDto reminderDto) {
        reminderService.addReminder(reminderDto);
    }

    @GetMapping("/reminders")
    public List<ReminderDto> getAllReminders() {
        User user = userUtils.getCurrentUser();
        return reminderService.getAllRemindersForUser(user.getId());
    }
    @DeleteMapping("/reminders")
    public void deleteReminders(@RequestBody List<Integer> ids){
       reminderService.deleteReminder(ids);
    }
    @PutMapping("/reminder")
    public void updateReminder(@RequestBody  ReminderDto reminderDto){
        reminderService.updateRemainder(reminderDto);
    }
}