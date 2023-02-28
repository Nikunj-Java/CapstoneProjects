package com.scb.upload.service;

import java.util.List;

import com.scb.upload.entity.Customer;

public interface CustomerService {

	public Customer addCustomer(Customer cust);
	public List<Customer> getAll();
}
