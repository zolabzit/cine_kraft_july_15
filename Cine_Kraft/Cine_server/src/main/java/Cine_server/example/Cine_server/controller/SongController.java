//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.Song;
//import Cine_server.example.Cine_server.service.SongService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/songs")
//public class SongController {
//
//    @Autowired
//    private SongService songService;
//
//    // Add a new song
//    @PostMapping
//    public ResponseEntity<Song> addSong(@RequestBody Song song) {
//        Song savedSong = songService.saveSong(song);
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedSong);
//    }
//
//    // Get all songs
//    @GetMapping
//    public ResponseEntity<List<Song>> getAllSongs() {
//        List<Song> songs = songService.getAllSongs();
//        return ResponseEntity.ok(songs);
//    }
//
//    // Get a specific song by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Song> getSongById(@PathVariable Long id) {
//        Optional<Song> song = songService.getSongById(id);
//        return song.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
//    }
//
//    // Delete a song by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteSong(@PathVariable Long id) {
//        songService.deleteSong(id);
//        return ResponseEntity.noContent().build();
//    }
//}
