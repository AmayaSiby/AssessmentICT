package com.marian.AddressBookApp.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.AddressBookApp.model.AddressBook;
import com.marian.AddressBookApp.repository.BookRepository;


@Service
public class BookService {
	@Autowired
	public BookRepository bookRepo;
	
	public List<AddressBook> getAllBook(){
		return bookRepo.findAll();
		}
	public AddressBook addAllBook(AddressBook book) {
		return bookRepo.save(book);
		
	}
}
