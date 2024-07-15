//package Cine_server.example.Cine_server.service;
//
//import Cine_server.example.Cine_server.model.Crew;
//import Cine_server.example.Cine_server.repository.CrewRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CrewService {
//
//    private final CrewRepository crewRepository;
//
//    @Autowired
//    public CrewService(CrewRepository crewRepository) {
//        this.crewRepository = crewRepository;
//    }
//
//    public List<Crew> getAllCrew() {
//        return crewRepository.findAll();
//    }
//
//    public Optional<Crew> getCrewById(Long id) {
//        return crewRepository.findById(id);
//    }
//
//    public Crew saveCrew(Crew crew) {
//        return crewRepository.save(crew);
//    }
//
//    public void deleteCrew(Long id) {
//        crewRepository.deleteById(id);
//    }
//}
//
