package com.simplilearn.demo.medical;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.stereotype.Repository;
import com.simplilearn.demo.entity.User;

@Repository
public interface MedRepo extends JpaRepository<Medicine,Integer> {
	
	 
	
}
