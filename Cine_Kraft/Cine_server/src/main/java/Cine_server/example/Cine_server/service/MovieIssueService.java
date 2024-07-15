//package Cine_server.example.Cine_server.service;
//
//import Cine_server.example.Cine_server.model.MovieIssue;
//import Cine_server.example.Cine_server.repository.MovieIssueRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//@Transactional
//public class MovieIssueService {
//
//    @Autowired
//    private MovieIssueRepository movieIssueRepository;
//
//    public List<MovieIssue> getAllMovieIssues() {
//        return movieIssueRepository.findAll();
//    }
//
//    public Optional<MovieIssue> getMovieIssueById(Long id) {
//        return movieIssueRepository.findById(id);
//    }
//
//    public MovieIssue saveMovieIssue(MovieIssue movieIssue) {
//        return movieIssueRepository.save(movieIssue);
//    }
//
//    public void deleteMovieIssue(Long id) {
//        movieIssueRepository.deleteById(id);
//    }
//
//    // Add more methods as needed
//
//}
