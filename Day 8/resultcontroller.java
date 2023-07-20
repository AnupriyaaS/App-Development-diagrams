package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Result;
import com.example.demo.Service.resultservice;


	@RestController
	public class resultcontroller {
		
		@Autowired
		resultservice resService;
		
		@PostMapping("/")
		public String add(@RequestBody Result result)
		{
			return resService.addLibrary(result);
		}
		
		@GetMapping("/")
		public List<Result> get()
		{
			return resService.getLibrary();
		}
		
		@PutMapping("/")
		public String update(@RequestBody Result result)
		{
			return resService.updateLibrary(result);
		}
		
		@DeleteMapping("/{id}")
		public String deleteInfo(@PathVariable("id") int id) {
			resService.deleteLibraryById(id);
			return "Deleted";
		}
	}
