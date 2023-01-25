package sstr.dianad.tema1.model.dto;

import java.util.Date;

public class ReminderDto {
    private String title;
    private String descriere;
    private Date date;
    private Integer id;

    public ReminderDto(Integer id,String title, String descriere, Date date) {
        this.title = title;
        this.descriere = descriere;
        this.date = date;
        this.id=id;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescriere() {
        return descriere;
    }

    public Date getDate() {
        return date;
    }
}
