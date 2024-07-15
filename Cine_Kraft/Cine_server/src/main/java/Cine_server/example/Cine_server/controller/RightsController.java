//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.Rights;
//import Cine_server.example.Cine_server.service.RightsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/rights")
//public class RightsController {
//
//    private final RightsService rightsService;
//
//    @Autowired
//    public RightsController(RightsService rightsService) {
//        this.rightsService = rightsService;
//    }
//
//    @PostMapping
//    public ResponseEntity<Rights> createRights(@RequestBody Rights rights) {
//        Rights createdRights = rightsService.saveRights(rights);
//        return new ResponseEntity<>(createdRights, HttpStatus.CREATED);
//    }
//}
