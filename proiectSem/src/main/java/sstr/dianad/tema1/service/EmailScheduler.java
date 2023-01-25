package sstr.dianad.tema1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import sstr.dianad.tema1.model.dto.ReminderDto;
import sstr.dianad.tema1.model.dto.UserDto;

import java.util.Date;
import java.util.List;

@Service
public class EmailScheduler {
    @Autowired
    private EmailService emailService;
    @Autowired
    private UserService userService;
    @Autowired
    private ReminderService reminderService;

    @Scheduled(cron = "0 12 22 * * *")
    public void scheduleEmail() {
        Date currentDate = new Date();
        List<UserDto> userDto = userService.findUsers();
        for (UserDto userDto1 : userDto) {
            List<ReminderDto> reminderDtos = reminderService.getAllRemindersForUser(userDto1.getId(), currentDate);
            String remindersTitle = "";
            for (ReminderDto reminderDto1 : reminderDtos) {
                remindersTitle = remindersTitle + "\n" + reminderDto1.getTitle();
            }
            if (!reminderDtos.isEmpty()) {
                emailService.sendEmail(userDto1.getEmail(), "The reminders for today",
                        " Make sure that you check the remindares that you have today! :)" + remindersTitle);
            }
        }

    }
}
