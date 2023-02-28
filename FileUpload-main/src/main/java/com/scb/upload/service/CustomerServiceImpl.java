package com.scb.upload.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scb.upload.entity.Customer;
import com.scb.upload.repo.CustomerRepo;
@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepo repo;
	
	@Override
	public Customer addCustomer(Customer cust) {
		return repo.save(cust);
	}

	@Override
	public List<Customer> getAll() {
		return repo.findAll();
	}

}
