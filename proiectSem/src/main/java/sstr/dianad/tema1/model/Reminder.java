package sstr.dianad.tema1.model;

import javax.persistence.*;
import java.util.Date;
@Entity
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String titlu;
    private String descriere;
    private Date date;
    @ManyToOne()
    @JoinColumn(name="user_id", nullable=false)
    private  User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Reminder(int id, String titlu, String descriere, Date date, User user) {
        this.id = id;
        this.titlu = titlu;
        this.descriere = descriere;
        this.date = date;
        this.user=user;

    }

    public Reminder() {

    }

    public Integer getId() {
        return id;
    }

    public String getTitlu() {
        return titlu;
    }

    public String getDescriere() {
        return descriere;
    }

    public Date getDate() {
        return date;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitlu(String titlu) {
        this.titlu = titlu;
    }

    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
