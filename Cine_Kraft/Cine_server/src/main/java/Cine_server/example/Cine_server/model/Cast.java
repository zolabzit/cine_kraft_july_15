//package Cine_server.example.Cine_server.model;
//
//import jakarta.persistence.*;
//
//@Entity
////@Table(name = "cast") // Specify the table name here
//public class Cast {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String designation; // Assuming 'designation' is the role or job title
//    private String name;
//    private String role;
//    private String debut;
//    private String movieNumber;
//    private String characterName;
//    private String remarks;
//
//    // Constructors
//    public Cast() {
//    }
//
//    public Cast(String designation, String name, String role, String debut, String movieNumber, String characterName, String remarks) {
//        this.designation = designation;
//        this.name = name;
//        this.role = role;
//        this.debut = debut;
//        this.movieNumber = movieNumber;
//        this.characterName = characterName;
//        this.remarks = remarks;
//    }
//
//    // Getters and setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getDesignation() {
//        return designation;
//    }
//
//    public void setDesignation(String designation) {
//        this.designation = designation;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//
//    public String getDebut() {
//        return debut;
//    }
//
//    public void setDebut(String debut) {
//        this.debut = debut;
//    }
//
//    public String getMovieNumber() {
//        return movieNumber;
//    }
//
//    public void setMovieNumber(String movieNumber) {
//        this.movieNumber = movieNumber;
//    }
//
//    public String getCharacterName() {
//        return characterName;
//    }
//
//    public void setCharacterName(String characterName) {
//        this.characterName = characterName;
//    }
//
//    public String getRemarks() {
//        return remarks;
//    }
//
//    public void setRemarks(String remarks) {
//        this.remarks = remarks;
//    }
//}
