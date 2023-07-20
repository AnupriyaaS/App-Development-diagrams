package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Result;
import com.example.demo.Repository.resultrepo;


@Service
public class resultservice {
	@Autowired
	resultrepo stRepo;
	
	public String addLibrary(Result res) 
	{
		stRepo.save(res);
		return "Detail is Added";
	}
	public List<Result> getLibrary()
	{
		return stRepo.findAll();
	}
	
	public String updateLibrary(Result res)
	{
		stRepo.save(res);
		return " Detail is Updated ";
	}
	public String deleteLibraryById(int id) {
		stRepo.deleteById(id);
	    return "Detail Removed";
	}
}
