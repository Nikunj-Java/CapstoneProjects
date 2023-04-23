package com.simplilearn.demo.medical;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.simplilearn.demo.entity.User;
import com.simplilearn.demo.repo.UserRepo;

@Service
public class MedService {
	
	@Autowired
	private MedRepo repo;
	 	
	public Medicine addMed(Medicine m) {
		return repo.save(m);
	}
	public List<Medicine> getAllMed(){
		return repo.findAll();
	}
	public Medicine getMedById(int id) {
		if(repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		else {
			return null;
		}
		
	}
	 

   
    
	public Medicine updateMed(int id, Medicine newMed) {
		if(repo.findById(id).isPresent()) {
			Medicine oldMed= repo.findById(id).get();
			//oldMed.setName(newMed.getName());
			oldMed.setDescription(newMed.getDescription());
			oldMed.setCategory(newMed.getCategory());
			oldMed.setPrice(newMed.getPrice());
			//oldMed.setPhoto(newMed.getPhoto());			
			return repo.save(oldMed);
		}
		else {
			return null;
		}
	}
	
	
	public boolean deleteMedicine(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		
		else {
			return false;
		}
	}
	
	

}
