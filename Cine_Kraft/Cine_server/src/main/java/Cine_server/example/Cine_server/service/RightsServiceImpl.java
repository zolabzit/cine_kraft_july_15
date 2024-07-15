//package Cine_server.example.Cine_server.service;
//
//import Cine_server.example.Cine_server.model.Rights;
//import Cine_server.example.Cine_server.repository.RightsRepository;
//import Cine_server.example.Cine_server.service.RightsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class RightsServiceImpl implements RightsService {
//
//    private final RightsRepository rightsRepository;
//
//    @Autowired
//    public RightsServiceImpl(RightsRepository rightsRepository) {
//        this.rightsRepository = rightsRepository;
//    }
//
//    @Override
//    public Rights saveRights(Rights rights) {
//        return rightsRepository.save(rights);
//    }
//
//    @Override
//    public Rights getRightsById(Long id) {
//        Optional<Rights> rightsOptional = rightsRepository.findById(id);
//        return rightsOptional.orElse(null);
//    }
//
//    @Override
//    public Rights updateRights(Long id, Rights rights) {
//        Optional<Rights> existingRightsOptional = rightsRepository.findById(id);
//        if (existingRightsOptional.isPresent()) {
//            rights.setId(id);
//            return rightsRepository.save(rights);
//        }
//        return null;
//    }
//
//    @Override
//    public void deleteRights(Long id) {
//        rightsRepository.deleteById(id);
//    }
//}
