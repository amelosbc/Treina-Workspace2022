package com.devsuperior.dsmove.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmove.entities.Movie;
import com.devsuperior.dsmove.entities.User;

public interface UserRepositorie extends JpaRepository<User, Long> {

	User findByEmail (String email);
	
}
