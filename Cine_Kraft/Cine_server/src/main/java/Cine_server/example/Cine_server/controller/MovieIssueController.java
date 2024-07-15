//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.MovieIssue;
//import Cine_server.example.Cine_server.service.MovieIssueService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/movie-issues")
//public class MovieIssueController {
//    @Autowired
//    private MovieIssueService movieIssueService;
//
//    @PostMapping
//    public MovieIssue addMovieIssue(@RequestBody MovieIssue movieIssue) {
//        return movieIssueService.saveMovieIssue(movieIssue);
//    }
//
//    // Add more endpoints for CRUD operations on movie issues
//}
