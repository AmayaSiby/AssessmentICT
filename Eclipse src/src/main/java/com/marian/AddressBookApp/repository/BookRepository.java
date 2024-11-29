package com.marian.AddressBookApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.AddressBookApp.model.AddressBook;
@Repository
public interface BookRepository extends JpaRepository<AddressBook, Integer> {

}
