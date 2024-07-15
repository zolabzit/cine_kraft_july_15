package Cine_server.example.Cine_server.service;

import Cine_server.example.Cine_server.model.Movie;

import java.util.List;

public interface MovieService {

    Movie createMovie(Movie movie);

    Movie updateMovie(Long id, Movie movie);

    void deleteMovie(Long id);

    Movie getMovieById(Long id);

    List<Movie> getAllMovies();
}
