package sstr.dianad.tema1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sstr.dianad.tema1.model.User;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmail(String email);


}
