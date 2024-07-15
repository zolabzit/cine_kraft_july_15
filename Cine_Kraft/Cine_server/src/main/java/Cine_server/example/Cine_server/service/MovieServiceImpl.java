package Cine_server.example.Cine_server.service;

import Cine_server.example.Cine_server.model.Movie;
import Cine_server.example.Cine_server.repository.MovieRepository;
import Cine_server.example.Cine_server.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public Movie createMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie updateMovie(Long id, Movie movie) {
        Optional<Movie> existingMovieOptional = movieRepository.findById(id);
        if (existingMovieOptional.isPresent()) {
            movie.setId(id);
            return movieRepository.save(movie);
        } else {
            throw new RuntimeException("Movie not found with id: " + id);
        }
    }

    @Override
    public void deleteMovie(Long id) {
        Optional<Movie> movieOptional = movieRepository.findById(id);
        if (movieOptional.isPresent()) {
            movieRepository.deleteById(id);
        } else {
            throw new RuntimeException("Movie not found with id: " + id);
        }
    }

    @Override
    public Movie getMovieById(Long id) {
        Optional<Movie> movieOptional = movieRepository.findById(id);
        return movieOptional.orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
}
