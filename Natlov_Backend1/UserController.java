package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
@CrossOrigin("*")
@RestController
public class UserController {
	@Autowired
	private UserService userservice;
	@PostMapping("/adduser")
	public ResponseEntity<String> addUser(@RequestBody User user){
		return ResponseEntity.ok(userservice.addUser(user));
	}
	@PostMapping("/updateuser")
	public ResponseEntity<String> updateUser(@RequestBody User user){
		return ResponseEntity.ok(userservice.updateUser(user));
	}
	@DeleteMapping("/deleteuser/{email}")
	public ResponseEntity<String> deleteUser(@PathVariable String email){
		return ResponseEntity.ok(userservice.deleteUser(email));
	}
	@GetMapping("/viewuser/{email}")
	public ResponseEntity<User> viewUser(@PathVariable String email){
		return ResponseEntity.ok(userservice.viewDetails(email));
	}
}
