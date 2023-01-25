package sstr.dianad.tema1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sstr.dianad.tema1.model.Reminder;

import java.util.List;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Integer> {
 List<Reminder> findAllByUserId(Integer userId);


}
