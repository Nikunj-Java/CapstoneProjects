package com.neueda;

import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.DynamicTest.dynamicTest;

import java.util.Arrays;
import java.util.Collection;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestFactory;
import org.junit.jupiter.api.function.Executable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = RestFulCrudAppDemoApplication.class)
class DynamicTestCase {

	@Autowired
	private UserService service;
	
	
	
	@TestFactory
	Collection<DynamicTest> dynamicTestDemo(){
		
		
		User user= new User();
		 user.setName("DEMO2");
		 user.setEmail("DEMO2@GMAIL.COM");
		 user.setCountry("SINGAPORE");
		 
		return Arrays.asList(
				dynamicTest("GetById", ()->assertTrue(service.getUserById(1).getName().equalsIgnoreCase("Nikunj Soni"))),
				dynamicTest("Delete User by Id", ()->assertFalse(service.deleteUser(4))),
				dynamicTest("GetAll", ()->assertEquals(5,service.getAlluser().size())),
				dynamicTest("Update User By Id", ()->assertNotNull(service.updateUser(user, 6))
				//your own test cases
			)
		);
	}
	
	 

}