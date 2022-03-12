package com.devsuperior.dsmove.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmove.dto.MovieDTO;
import com.devsuperior.dsmove.dto.ScoreDTO;
import com.devsuperior.dsmove.entities.Movie;
import com.devsuperior.dsmove.entities.Score;
import com.devsuperior.dsmove.entities.User;
import com.devsuperior.dsmove.repositories.MovieRepositorie;
import com.devsuperior.dsmove.repositories.ScoreRepositorie;
import com.devsuperior.dsmove.repositories.UserRepositorie;

@Service
public class ScoreService {

	@Autowired
	private MovieRepositorie movieRepository;
	
	@Autowired
	private UserRepositorie userRepository;

	@Autowired
	private ScoreRepositorie scoreRepository;

	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.save(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
		
	}

}
