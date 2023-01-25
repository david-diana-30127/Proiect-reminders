package sstr.dianad.tema1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sstr.dianad.tema1.model.User;
import sstr.dianad.tema1.model.dto.UserDto;
import sstr.dianad.tema1.model.dto.UserRegistrationDto;
import sstr.dianad.tema1.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public void saveUser(UserRegistrationDto userRegistrationDto) {
        User user = new User();
        user.setFirstName(userRegistrationDto.getFirstName());
        user.setLastName(userRegistrationDto.getLastName());

        user.setEmail(userRegistrationDto.getEmail());
        // encrypt the password using spring security
        user.setParola(passwordEncoder.encode(userRegistrationDto.getPassword()));
        userRepository.save(user);
    }

    public void updateUser(UserDto userDto) {
        User user = userRepository.findByEmail(userDto.getEmail());
        user.setEmail(user.getEmail());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        userRepository.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<UserDto> findUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> new UserDto(user.getFirstName(), user.getLastName(), user.getEmail(), user.getId()))
                .toList();
    }

}
