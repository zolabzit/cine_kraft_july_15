//package Cine_server.example.Cine_server.model;
//
//import jakarta.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name = "movie")
//public class Movie {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(nullable = false)
//    private String movieName;
//
//    @ElementCollection
//    private List<String> genre;
//
//    @Column(nullable = false)
//    private String production;
//
//    @ElementCollection
//    private List<String> producer;
//
//    @ElementCollection
//    private List<String> languages;
//
//    private String runtime;
//
//    private String budget;
//
//    @ElementCollection
//    private List<String> awards;
//
//    @Column(length = 2000)
//    private String description;
//
//    @Column(length = 2000)
//    private String movieSpeciality;
//
//    private String inspired;
//
//    private String movieCensorCertificate;
//
//    private String oldName;
//
//    @ElementCollection
//    private List<String> images;
//
//    private int rating;
//
//
//    @ElementCollection
//    @CollectionTable(name = "audio_rights", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "audio_right")
//    private List<String> audioRights;
//
//    @ElementCollection
//    @CollectionTable(name = "broadcast_channels", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "broadcast_channel")
//    private List<String> broadcastChannels;
//
//    @ElementCollection
//    @CollectionTable(name = "ott_rights", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "ott_right")
//    private List<String> ottRights;
//
//
//
//    @Column(name = "broadcast_links")
//    private String broadcastLinks;
//
//
//    @Column(name = "ott_links")
//    private String ottLinks;
//
//    // Constructors, getters, and setters...
//
//    public Movie() {
//        // Initialize collections if necessary
//        this.genre = new ArrayList<>();
//        this.producer = new ArrayList<>();
//        this.languages = new ArrayList<>();
//        this.awards = new ArrayList<>();
//        this.images = new ArrayList<>();
//
//
//        this.audioRights = new ArrayList<>();
//        this.broadcastChannels = new ArrayList<>();
//        this.ottRights = new ArrayList<>();
//    }
//
//    // Getters and setters...
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getMovieName() {
//        return movieName;
//    }
//
//    public void setMovieName(String movieName) {
//        this.movieName = movieName;
//    }
//
//    public List<String> getGenre() {
//        return genre;
//    }
//
//    public void setGenre(List<String> genre) {
//        this.genre = genre;
//    }
//
//    public String getProduction() {
//        return production;
//    }
//
//    public void setProduction(String production) {
//        this.production = production;
//    }
//
//    public List<String> getProducer() {
//        return producer;
//    }
//
//    public void setProducer(List<String> producer) {
//        this.producer = producer;
//    }
//
//    public List<String> getLanguages() {
//        return languages;
//    }
//
//    public void setLanguages(List<String> languages) {
//        this.languages = languages;
//    }
//
//    public String getRuntime() {
//        return runtime;
//    }
//
//    public void setRuntime(String runtime) {
//        this.runtime = runtime;
//    }
//
//    public String getBudget() {
//        return budget;
//    }
//
//    public void setBudget(String budget) {
//        this.budget = budget;
//    }
//
//    public List<String> getAwards() {
//        return awards;
//    }
//
//    public void setAwards(List<String> awards) {
//        this.awards = awards;
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
//    public String getMovieSpeciality() {
//        return movieSpeciality;
//    }
//
//    public void setMovieSpeciality(String movieSpeciality) {
//        this.movieSpeciality = movieSpeciality;
//    }
//
//    public String getInspired() {
//        return inspired;
//    }
//
//    public void setInspired(String inspired) {
//        this.inspired = inspired;
//    }
//
//    public String getMovieCensorCertificate() {
//        return movieCensorCertificate;
//    }
//
//    public void setMovieCensorCertificate(String movieCensorCertificate) {
//        this.movieCensorCertificate = movieCensorCertificate;
//    }
//
//    public String getOldName() {
//        return oldName;
//    }
//
//    public void setOldName(String oldName) {
//        this.oldName = oldName;
//    }
//
//    public List<String> getImages() {
//        return images;
//    }
//
//    public void setImages(List<String> images) {
//        this.images = images;
//    }
//
//    public int getRating() {
//        return rating;
//    }
//
//    public void setRating(int rating) {
//        this.rating = rating;
//    }
//
//    public List<String> getAudioRights() {
//        return audioRights;
//    }
//
//    public void setAudioRights(List<String> audioRights) {
//        this.audioRights = audioRights;
//    }
//
//    public List<String> getBroadcastChannels() {
//        return broadcastChannels;
//    }
//
//    public void setBroadcastChannels(List<String> broadcastChannels) {
//        this.broadcastChannels = broadcastChannels;
//    }
//
//    public String getBroadcastLinks() {
//        return broadcastLinks;
//    }
//
//    public void setBroadcastLinks(String broadcastLinks) {
//        this.broadcastLinks = broadcastLinks;
//    }
//
//    public List<String> getOttRights() {
//        return ottRights;
//    }
//
//    public void setOttRights(List<String> ottRights) {
//        this.ottRights = ottRights;
//    }
//
//    public String getOttLinks() {
//        return ottLinks;
//    }
//
//    public void setOttLinks(String ottLinks) {
//        this.ottLinks = ottLinks;
//    }
//
//    @Override
//    public String toString() {
//        return "Movie{" +
//                "id=" + id +
//                ", movieName='" + movieName + '\'' +
//                ", genre=" + genre +
//                ", production='" + production + '\'' +
//                ", producer=" + producer +
//                ", languages=" + languages +
//                ", runtime='" + runtime + '\'' +
//                ", budget='" + budget + '\'' +
//                ", awards=" + awards +
//                ", description='" + description + '\'' +
//                ", movieSpeciality='" + movieSpeciality + '\'' +
//                ", inspired='" + inspired + '\'' +
//                ", movieCensorCertificate='" + movieCensorCertificate + '\'' +
//                ", oldName='" + oldName + '\'' +
//                ", images=" + images +
//                ", rating=" + rating +
//                ", audioRights=" + audioRights +
//                ", broadcastChannels=" + broadcastChannels +
//                ", broadcastLinks='" + broadcastLinks + '\'' +
//                ", ottRights=" + ottRights +
//                ", ottLinks='" + ottLinks + '\'' +
//                '}';
//    }
//}
//
//


package Cine_server.example.Cine_server.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


//    @Column(nullable = false)
//    private String movieName;
//
//    @ElementCollection
//    private List<String> genre;
//
//    @Column(nullable = false)
//    private String production;
//
//    @ElementCollection
//    private List<String> producer;
//
//    @ElementCollection
//    private List<String> languages;
//
//    private String runtime;
//
//    private String budget;
//
//    @ElementCollection
//    private List<String> awards;
//
//    @Column(length = 2000)
//    private String description;
//
//    @Column(length = 2000)
//    private String movieSpeciality;
//
//    private String inspired;
//
//    private String movieCensorCertificate;
//
//    private String oldName;
//
//    @ElementCollection
//    private List<String> images;
//
//    private int rating;
//
//
//    @ElementCollection
//    @CollectionTable(name = "audio_rights", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "audio_right")
//    private List<String> audioRights;
//
//    @ElementCollection
//    @CollectionTable(name = "broadcast_channels", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "broadcast_channel")
//    private List<String> broadcastChannels;
//
//    @ElementCollection
//    @CollectionTable(name = "ott_rights", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "ott_right")
//    private List<String> ottRights;
//
//
//
//    @Column(name = "broadcast_links")
//    private String broadcastLinks;
//
//
//    @Column(name = "ott_links")
//    private String ottLinks;
//
//    private String releasePlatform;
//
//    private String releaseDate;
//
//    private String expectedReleaseDate;
//
//    private String yetToBeReleasedPlatform;
//
//    private String dropStatus;
//
//    private String remarks;
    @Column(name = "dubbed_movie")
    private String dubbedMovie;

    @Column(name = "dubbed_language")
    private String dubbedLanguage;

    @Column(name = "remake_movie")
    private String remakeMovie;

    @Column(name = "remake_language")
    private String remakeLanguage;

    @Column(name = "important_link")
    private String importantLink;

    @Column(name = "link")
    private String link;

    @Column(name = "social_media_platform")
    private String socialMediaPlatform;

    @Column(name = "social_media_platform_link")
    private String socialMediaPlatformLink;



//    @Column(name = "song_number", nullable = false)
//    private String songNumber;
//
//    @Column(name = "song_name", nullable = false)
//    private String songName;
//
//    @ElementCollection
//    @CollectionTable(name = "song_singer_male", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "singer_male")
//    private List<String> singerMale;
//
//    @ElementCollection
//    @CollectionTable(name = "song_singer_female", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "singer_female")
//    private List<String> singerFemale;
//
//    @ElementCollection
//    @CollectionTable(name = "song_lyricists", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "lyricist")
//    private List<String> lyricists;
//
//    @ElementCollection
//    @CollectionTable(name = "song_music_directors", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "music_director")
//    private List<String> musicDirectors;
//
//    @ElementCollection
//    @CollectionTable(name = "song_choreographers", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "choreographer")
//    private List<String> choreographers;
//
//    @ElementCollection
//    @CollectionTable(name = "song_awards", joinColumns = @JoinColumn(name = "movie_id"))
//    @Column(name = "award")
//    private List<String> award;
//
//    @Column(name = "remarks")
//    private String remarks;


//    @Column(name = "issue")
//    private String issue;
//
//
//    @Column(name = "descriptions")
//    private String descriptions;


    // Constructors, getters, and setters...

    public Movie() {
        // Initialize collections if necessary
//        this.genre = new ArrayList<>();
//        this.producer = new ArrayList<>();
//        this.languages = new ArrayList<>();
//        this.awards = new ArrayList<>();
//        this.images = new ArrayList<>();
//
//
//        this.audioRights = new ArrayList<>();
//        this.broadcastChannels = new ArrayList<>();
//        this.ottRights = new ArrayList<>();


//        this.singerMale = new ArrayList<>();
//        this.singerFemale = new ArrayList<>();
//        this.lyricists = new ArrayList<>();
//        this.musicDirectors = new ArrayList<>();
//        this.choreographers = new ArrayList<>();
//        this.award = new ArrayList<>();
    }

    // Getters and setters...


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDubbedMovie() {
        return dubbedMovie;
    }

    public void setDubbedMovie(String dubbedMovie) {
        this.dubbedMovie = dubbedMovie;
    }

    public String getDubbedLanguage() {
        return dubbedLanguage;
    }

    public void setDubbedLanguage(String dubbedLanguage) {
        this.dubbedLanguage = dubbedLanguage;
    }

    public String getRemakeMovie() {
        return remakeMovie;
    }

    public void setRemakeMovie(String remakeMovie) {
        this.remakeMovie = remakeMovie;
    }

    public String getRemakeLanguage() {
        return remakeLanguage;
    }

    public void setRemakeLanguage(String remakeLanguage) {
        this.remakeLanguage = remakeLanguage;
    }

    public String getImportantLink() {
        return importantLink;
    }

    public void setImportantLink(String importantLink) {
        this.importantLink = importantLink;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getSocialMediaPlatform() {
        return socialMediaPlatform;
    }

    public void setSocialMediaPlatform(String socialMediaPlatform) {
        this.socialMediaPlatform = socialMediaPlatform;
    }

    public String getSocialMediaPlatformLink() {
        return socialMediaPlatformLink;
    }

    public void setSocialMediaPlatformLink(String socialMediaPlatformLink) {
        this.socialMediaPlatformLink = socialMediaPlatformLink;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", dubbedMovie='" + dubbedMovie + '\'' +
                ", dubbedLanguage='" + dubbedLanguage + '\'' +
                ", remakeMovie='" + remakeMovie + '\'' +
                ", remakeLanguage='" + remakeLanguage + '\'' +
                ", importantLink='" + importantLink + '\'' +
                ", link='" + link + '\'' +
                ", socialMediaPlatform='" + socialMediaPlatform + '\'' +
                ", socialMediaPlatformLink='" + socialMediaPlatformLink + '\'' +
                '}';
    }
}

