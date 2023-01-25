package sstr.dianad.tema1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String email;
    private String firstName;
    private  String lastName;
    private String parola;

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public User(Integer id, String email, String firstName, String parola, String lastName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.parola = parola;
        this.lastName=lastName;
    }

    public User() {

    }

    public Integer getId() {
        return id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String mail) {
        this.email = mail;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String nume) {
        this.firstName = nume;
    }

    public String getParola() {
        return parola;
    }

    public void setParola(String parola) {
        this.parola = parola;
    }


}
