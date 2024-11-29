package com.marian.AddressBookApp.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marian.AddressBookApp.model.AddressBook;
import com.marian.AddressBookApp.service.BookService;

@RestController
@CrossOrigin(origins= "\"http://localhost:3000")
public class BookController {
	@Autowired
	public BookService bookService;
	@GetMapping("/api/book")
	public List<AddressBook> showAllBook(){
		return bookService.getAllBook();		
	}
	@PostMapping("/api/book")
	public AddressBook saveAllBook(@RequestBody AddressBook book) {
		return bookService.addAllBook(book);
	}
	
}
