package com.springjwt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springjwt.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}