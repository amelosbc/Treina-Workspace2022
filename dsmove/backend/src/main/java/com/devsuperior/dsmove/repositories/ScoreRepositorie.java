package com.devsuperior.dsmove.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmove.entities.Movie;
import com.devsuperior.dsmove.entities.Score;
import com.devsuperior.dsmove.entities.ScorePK;
import com.devsuperior.dsmove.entities.User;

public interface ScoreRepositorie extends JpaRepository<Score, ScorePK> {

}
