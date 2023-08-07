package com.neueda;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = RestFulCrudAppDemoApplication.class)
class RestFulCrudAppDemoApplicationTests {

	@Autowired
	private UserService service;
	
	@Autowired
	private UserRepository repo;

	@Disabled
	@Test
	void addUser() {
		User u = new User();
		u.setName("Demo");
		u.setEmail("Demo@gmail.com");
		u.setCountry("India");
		Assertions.assertNotNull(service.addUser(u));
	}

	 
	 @Test 
	 void getAll() {
		 Assertions.assertEquals(5,service.getAlluser().size()); 
	 }
	 
	 
	 @Test 
	 void getByIdBooleanCase() {
		 boolean val=true;
		 Assertions.assertEquals(val,service.getUserById(1).getName().equalsIgnoreCase("Nikunj Soni")); 
	 }
	 
	 @Test 
	 void getByIdString() {
		 Assertions.assertEquals("Nikunj Soni",service.getUserById(1).getName()); 
	 }
	 
	 @Test 
	 void UpdateUser() {
		 
		 User user= new User();
		 user.setName("DEMO1");
		 user.setEmail("DEMO1@GMAIL.COM");
		 user.setCountry("SINGAPORE");
		
		  
		Assertions.assertNotNull(service.updateUser(user, 6)); 
		System.out.println("User found And Updated");
		
	 }
	 @Disabled
	 @Test 
	 void DeleteById() {
		 Assertions.assertNotNull(service.deleteUser(5));
	 }
	 
}
