//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.RemakeMovie;
//import Cine_server.example.Cine_server.service.RemakeMovieService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/remake-movies")
//public class RemakeMovieController {
//    @Autowired
//    private RemakeMovieService remakeMovieService;
//
//    @PostMapping
//    public RemakeMovie addRemakeMovie(@RequestBody RemakeMovie remakeMovie) {
//        return remakeMovieService.saveRemakeMovie(remakeMovie);
//    }
//
//    // Add more endpoints for CRUD operations on remake movies
//}
