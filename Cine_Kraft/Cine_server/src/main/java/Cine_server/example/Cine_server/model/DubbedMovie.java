//package Cine_server.example.Cine_server.model;
//
//import jakarta.persistence.*;
//
//@Entity
//public class DubbedMovie {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "movie_id")
//    private Movie movie;
//
//    private String language;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Movie getMovie() {
//        return movie;
//    }
//
//    public void setMovie(Movie movie) {
//        this.movie = movie;
//    }
//
//    public String getLanguage() {
//        return language;
//    }
//
//    public void setLanguage(String language) {
//        this.language = language;
//    }
//
//    public DubbedMovie() {
//    }
//
//    public DubbedMovie(Long id, Movie movie, String language) {
//        this.id = id;
//        this.movie = movie;
//        this.language = language;
//    }
//
//    // Getters and setters
//    // Constructors
//}
//
