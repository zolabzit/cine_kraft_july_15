//package Cine_server.example.Cine_server.service.impl;
//
//import Cine_server.example.Cine_server.model.Celebrity;
//import Cine_server.example.Cine_server.repository.CelebrityRepository;
//import Cine_server.example.Cine_server.service.CelebrityService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CelebrityServiceImpl implements CelebrityService {
//
//    private final CelebrityRepository celebrityRepository;
//
//    @Autowired
//    public CelebrityServiceImpl(CelebrityRepository celebrityRepository) {
//        this.celebrityRepository = celebrityRepository;
//    }
//
//    @Override
//    public List<Celebrity> getAllCelebrities() {
//        return celebrityRepository.findAll();
//    }
//
//    @Override
//    public Celebrity getCelebrityById(Long id) {
//        Optional<Celebrity> celebrityOptional = celebrityRepository.findById(id);
//        return celebrityOptional.orElse(null);
//    }
//
//    @Override
//    public Celebrity saveCelebrity(Celebrity celebrity) {
//        return celebrityRepository.save(celebrity);
//    }
//
//    @Override
//    public void deleteCelebrity(Long id) {
//        celebrityRepository.deleteById(id);
//    }
//}
