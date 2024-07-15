//package Cine_server.example.Cine_server.model;
//
//import Cine_server.example.Cine_server.service.MovieService;
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "important_links") // Specify the table name here
//public class ImportantLink {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "movie_id")
//    private MovieService movie;
//
//    private String linkName;
//    private String linkUrl;
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
//    public String getLinkName() {
//        return linkName;
//    }
//
//    public void setLinkName(String linkName) {
//        this.linkName = linkName;
//    }
//
//    public String getLinkUrl() {
//        return linkUrl;
//    }
//
//    public void setLinkUrl(String linkUrl) {
//        this.linkUrl = linkUrl;
//    }
//
//    // Constructors, getters, and setters omitted for brevity
//
//    public ImportantLink() {
//    }
//
//    public ImportantLink(Long id, Movie movie, String linkName, String linkUrl) {
//        this.id = id;
//        this.movie = movie;
//        this.linkName = linkName;
//        this.linkUrl = linkUrl;
//    }
//}
