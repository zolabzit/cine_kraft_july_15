//package Cine_server.example.Cine_server.model;
//
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "movie_issues") // Specify the table name here
//public class MovieIssue {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "movie_id")
//    private Movie movie;
//
//    private String issue;
//    private String description;
//
//    // Constructors, getters, setters omitted for brevity
//
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
//    public String getIssue() {
//        return issue;
//    }
//
//    public void setIssue(String issue) {
//        this.issue = issue;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public MovieIssue() {
//    }
//
//    public MovieIssue(Long id, Movie movie, String issue, String description) {
//        this.id = id;
//        this.movie = movie;
//        this.issue = issue;
//        this.description = description;
//    }
//
//    // Getters and setters
//}
