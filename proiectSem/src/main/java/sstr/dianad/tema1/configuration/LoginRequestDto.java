package sstr.dianad.tema1.configuration;

import lombok.Data;

@Data
public class LoginRequestDto {
    private String email;
    private String password;
}