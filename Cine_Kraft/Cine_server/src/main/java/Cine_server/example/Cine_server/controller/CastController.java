//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.Cast;
//import Cine_server.example.Cine_server.service.CastService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//
//@RestController
//@RequestMapping("/api/casts")
//public class CastController {
//    private final CastService castService;
//
//    @Autowired
//    public CastController(CastService castService) {
//        this.castService = castService;
//    }
//
//    // Create a new cast
//    @PostMapping
//    public ResponseEntity<Cast> createCast(@RequestBody Cast cast) {
//        Cast newCast = castService.createCast(cast);
//        return new ResponseEntity<>(newCast, HttpStatus.CREATED);
//    }
//
//    // Get all casts
//    @GetMapping
//    public ResponseEntity<List<Cast>> getAllCasts() {
//        List<Cast> casts = castService.getAllCasts();
//        return new ResponseEntity<>(casts, HttpStatus.OK);
//    }
//
//    // Get a specific cast by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Cast> getCastById(@PathVariable Long id) {
//        Optional<Cast> castOptional = castService.getCastById(id);
//        return castOptional.map(cast -> new ResponseEntity<>(cast, HttpStatus.OK))
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//
//    // Update a cast by ID
//    @PutMapping("/{id}")
//    public ResponseEntity<Cast> updateCast(@PathVariable Long id, @RequestBody Cast cast) {
//        Cast updatedCast = castService.updateCast(id, cast);
//        return updatedCast != null
//                ? new ResponseEntity<>(updatedCast, HttpStatus.OK)
//                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//    // Delete a cast by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteCast(@PathVariable Long id) {
//        castService.deleteCast(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//}
