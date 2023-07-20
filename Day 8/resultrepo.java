package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Result;

@Repository
public interface resultrepo extends JpaRepository<Result,Integer> {

}
