package com.devsuperior.dsmove.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmove.entities.Movie;

public interface MovieRepositorie extends JpaRepository<Movie, Long> {

}
