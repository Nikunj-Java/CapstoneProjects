package com.simplilearn.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.stereotype.Repository;
import com.simplilearn.demo.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

}
