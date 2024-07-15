//package Cine_server.example.Cine_server.model;
//
//import jakarta.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "rights")
//public class Rights {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ElementCollection
//    @CollectionTable(name = "audio_rights", joinColumns = @JoinColumn(name = "rights_id"))
//    @Column(name = "audio_right")
//    private List<String> audioRights;
//
//    @ElementCollection
//    @CollectionTable(name = "broadcast_channels", joinColumns = @JoinColumn(name = "rights_id"))
//    @Column(name = "broadcast_channel")
//    private List<String> broadcastChannels;
//
//    @Column(name = "broadcast_links", nullable = false)
//    private String broadcastLinks;
//
//    @ElementCollection
//    @CollectionTable(name = "ott_rights", joinColumns = @JoinColumn(name = "rights_id"))
//    @Column(name = "ott_right")
//    private List<String> ottRights;
//
//    @Column(name = "ott_links", nullable = false)
//    private String ottLinks;
//
//    // Constructors, getters, and setters
//    public Rights() {
//    }
//
//    public Rights(List<String> audioRights, List<String> broadcastChannels, String broadcastLinks, List<String> ottRights, String ottLinks) {
//        this.audioRights = audioRights;
//        this.broadcastChannels = broadcastChannels;
//        this.broadcastLinks = broadcastLinks;
//        this.ottRights = ottRights;
//        this.ottLinks = ottLinks;
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
//}
