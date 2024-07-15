//package Cine_server.example.Cine_server.service;
//
//import Cine_server.example.Cine_server.model.Song;
//import Cine_server.example.Cine_server.repository.SongRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class SongService {
//
//    @Autowired
//    private SongRepository songRepository;
//
//    // Method to save a song
//    public Song saveSong(Song song) {
//        return songRepository.save(song);
//    }
//
//    // Method to retrieve all songs
//    public List<Song> getAllSongs() {
//        return songRepository.findAll();
//    }
//
//    // Method to retrieve a song by ID
//    public Optional<Song> getSongById(Long id) {
//        return songRepository.findById(id);
//    }
//
//    // Method to delete a song by ID
//    public void deleteSong(Long id) {
//        songRepository.deleteById(id);
//    }
//}
