package sstr.dianad.tema1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import sstr.dianad.tema1.model.User;
import sstr.dianad.tema1.model.dto.UserDto;
import sstr.dianad.tema1.model.dto.UserRegistrationDto;
import sstr.dianad.tema1.service.UserService;
import sstr.dianad.tema1.utiles.UserUtils;

import javax.xml.bind.ValidationException;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserUtils userUtils;
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registration(@RequestBody UserRegistrationDto userRegistrationDto) throws ValidationException {
        User existingUser = userService.findUserByEmail(userRegistrationDto.getEmail());

        if (existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()) {
            throw new ValidationException("There is already an account registered with the same email");

        }
        userService.saveUser(userRegistrationDto);
    }
    @PutMapping("/user/update")
    public void updateUser(@RequestBody UserDto userDto){
        userService.updateUser(userDto);
    }

    @GetMapping("/user")
    public UserDto getUser(){
        UserDto userDto= new UserDto();
        User user=userUtils.getCurrentUser();
        userDto.setFirstName(user.getFirstName());
        userDto.setEmail(user.getEmail());
        userDto.setLastName(user.getLastName());
        return userDto;
    }

}
