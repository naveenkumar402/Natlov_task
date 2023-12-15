package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userrepo;
	public String addUser(User user) {
		User user1=userrepo.findByEmail(user.getEmail());
		if(user1==null) {
			if(userrepo.save(user)!=null) {
				return "User added Successfully";
			}
			return "Something went wrong";
		}
		return "User Already Exists";
		
	}
	public String updateUser(User user) {
		User user1=userrepo.findByEmail(user.getEmail());
		if(user1==null) return "User not found";
		user.setId(user1.getId());
		if(userrepo.save(user)!=null) {
			return "User Details updated Successfully";
		}
		return "Something went wrong";
	}
	public String deleteUser(String email) {
		User user=userrepo.findByEmail(email);
		if(user != null) {
			userrepo.deleteById(user.getId());
			return "User Details deleted successfully";
		}
		return "User not found";
		
	}
	public User viewDetails(String email) {
		User user= userrepo.findByEmail(email);
		if(user == null) 
			return null;
		return user;
	}
}
