//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.Celebrity;
//import Cine_server.example.Cine_server.service.CelebrityService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/celebrities")
//public class CelebrityController {
//
//    private final CelebrityService celebrityService;
//
//    @Autowired
//    public CelebrityController(CelebrityService celebrityService) {
//        this.celebrityService = celebrityService;
//    }
//
//    @GetMapping
//    public ResponseEntity<List<Celebrity>> getAllCelebrities() {
//        List<Celebrity> celebrities = celebrityService.getAllCelebrities();
//        return ResponseEntity.ok(celebrities);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Celebrity> getCelebrityById(@PathVariable Long id) {
//        Celebrity celebrity = celebrityService.getCelebrityById(id);
//        if (celebrity == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(celebrity);
//    }
//
//    @PostMapping
//    public ResponseEntity<Celebrity> saveCelebrity(@RequestBody Celebrity celebrity) {
//        Celebrity savedCelebrity = celebrityService.saveCelebrity(celebrity);
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedCelebrity);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteCelebrity(@PathVariable Long id) {
//        celebrityService.deleteCelebrity(id);
//        return ResponseEntity.noContent().build();
//    }
//}
