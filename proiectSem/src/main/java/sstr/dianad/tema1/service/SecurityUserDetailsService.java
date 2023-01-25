package sstr.dianad.tema1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import sstr.dianad.tema1.model.User;
import sstr.dianad.tema1.repository.UserRepository;

@Service
public class SecurityUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);

        if (user != null) {
            return org.springframework.security.core.userdetails.User.withUsername(user.getEmail())
                    .password(user.getParola())
                    .roles("USER")
                    .build();
        } else {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
    }


}

