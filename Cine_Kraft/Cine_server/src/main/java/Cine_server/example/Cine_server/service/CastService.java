//package Cine_server.example.Cine_server.service;
//
//import Cine_server.example.Cine_server.model.Cast;
//import Cine_server.example.Cine_server.repository.CastRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//
//@Service
//public class CastService {
//    private final CastRepository castRepository;
//
//    @Autowired
//    public CastService(CastRepository castRepository) {
//        this.castRepository = castRepository;
//    }
//
//    // Create operation
//    public Cast createCast(Cast cast) {
//        return castRepository.save(cast);
//    }
//
//    // Retrieve operation - All casts
//    public List<Cast> getAllCasts() {
//        return castRepository.findAll();
//    }
//
//    // Retrieve operation - Single cast by ID
//    public Optional<Cast> getCastById(Long id) {
//        return castRepository.findById(id);
//    }
//
//    // Update operation
//    public Cast updateCast(Long id, Cast castDetails) {
//        Optional<Cast> castOptional = castRepository.findById(id);
//        if (castOptional.isPresent()) {
//            Cast existingCast = castOptional.get();
//            existingCast.setDesignation(castDetails.getDesignation());
//            existingCast.setName(castDetails.getName());
//            existingCast.setRole(castDetails.getRole());
//            existingCast.setDebut(castDetails.getDebut());
//            existingCast.setMovieNumber(castDetails.getMovieNumber());
//            existingCast.setCharacterName(castDetails.getCharacterName());
//            existingCast.setRemarks(castDetails.getRemarks());
//            return castRepository.save(existingCast);
//        }
//        return null; // Handle not found scenario
//    }
//
//    // Delete operation
//    public void deleteCast(Long id) {
//        castRepository.deleteById(id);
//    }
//}
