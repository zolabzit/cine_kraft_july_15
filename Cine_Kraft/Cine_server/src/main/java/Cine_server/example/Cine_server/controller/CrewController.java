//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.Crew;
//import Cine_server.example.Cine_server.service.CrewService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/crew")
//public class CrewController {
//
//    private final CrewService crewService;
//
//    @Autowired
//    public CrewController(CrewService crewService) {
//        this.crewService = crewService;
//    }
//
//    @GetMapping
//    public List<Crew> getAllCrew() {
//        return crewService.getAllCrew();
//    }
//
//    @GetMapping("/{id}")
//    public Optional<Crew> getCrewById(@PathVariable Long id) {
//        return crewService.getCrewById(id);
//    }
//
//    @PostMapping
//    public Crew addCrew(@RequestBody Crew crew) {
//        return crewService.saveCrew(crew);
//    }
//
//    @PutMapping("/{id}")
//    public Crew updateCrew(@PathVariable Long id, @RequestBody Crew crew) {
//        crew.setId(id);
//        return crewService.saveCrew(crew);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteCrew(@PathVariable Long id) {
//        crewService.deleteCrew(id);
//    }
//}
