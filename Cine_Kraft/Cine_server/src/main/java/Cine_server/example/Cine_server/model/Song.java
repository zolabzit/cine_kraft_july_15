//package Cine_server.example.Cine_server.model;
//
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "songs") // Specify the table name here
//public class Song {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String songNo;
//    private String name;
//    private String male;
//    private String female;
//    private String lyricists;
//    private String music;
//    private String choreo;
//    private String awards;
//    private String remarks;
//
//    @ManyToOne
//    @JoinColumn(name = "movie_id")
//    private Movie movie;
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
//    public String getSongNo() {
//        return songNo;
//    }
//
//    public void setSongNo(String songNo) {
//        this.songNo = songNo;
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
//    public String getMale() {
//        return male;
//    }
//
//    public void setMale(String male) {
//        this.male = male;
//    }
//
//    public String getFemale() {
//        return female;
//    }
//
//    public void setFemale(String female) {
//        this.female = female;
//    }
//
//    public String getLyricists() {
//        return lyricists;
//    }
//
//    public void setLyricists(String lyricists) {
//        this.lyricists = lyricists;
//    }
//
//    public String getMusic() {
//        return music;
//    }
//
//    public void setMusic(String music) {
//        this.music = music;
//    }
//
//    public String getChoreo() {
//        return choreo;
//    }
//
//    public void setChoreo(String choreo) {
//        this.choreo = choreo;
//    }
//
//    public String getAwards() {
//        return awards;
//    }
//
//    public void setAwards(String awards) {
//        this.awards = awards;
//    }
//
//    public String getRemarks() {
//        return remarks;
//    }
//
//    public void setRemarks(String remarks) {
//        this.remarks = remarks;
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
//    public Song() {
//    }
//
//    public Song(Long id, String songNo, String name, String male, String female, String lyricists, String music, String choreo, String awards, String remarks, Movie movie) {
//        this.id = id;
//        this.songNo = songNo;
//        this.name = name;
//        this.male = male;
//        this.female = female;
//        this.lyricists = lyricists;
//        this.music = music;
//        this.choreo = choreo;
//        this.awards = awards;
//        this.remarks = remarks;
//        this.movie = movie;
//    }
//
//    // Getters and setters
//}
