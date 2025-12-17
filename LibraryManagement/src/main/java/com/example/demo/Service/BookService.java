package com.example.demo.Service;

import com.example.demo.DTOs.BookDto;
<<<<<<< HEAD
=======
import com.example.demo.Exception.DuplicateBookException;
>>>>>>> main
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Models.Book;
import com.example.demo.Repository.BookRepository;
import com.example.demo.Utilities.Conversion;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private Conversion conversion;

    public BookDto GetBook(Integer BookId){
        Book book =  bookRepository.findById(BookId).orElseThrow(()->new ResourceNotFoundException("Book","BookId",BookId));

        return conversion.ConvertToBook(book);
    }

    public Book AddBook(@Valid Book book)  {
<<<<<<< HEAD
=======

        if(bookRepository.existsByTitle(book.getTitle()) && bookRepository.existsByAuthor(book.getAuthor())){
            throw new DuplicateBookException("Book With this title and author already exists");
        }

>>>>>>> main
        return bookRepository.save(book);
    }

    public Book UpdateBook(@Valid Book book){
        Book book1 =  bookRepository.findById(book.getBookId()).orElseThrow(()->new ResourceNotFoundException("Book","BookId", book.getBookId()));

        book1.setAuthor(book.getAuthor());
        book1.setRatings(book.getRatings());
        book1.setPrice(book.getPrice());
        book1.setPublishedDate(book.getPublishedDate());
        book1.setNumberOfPages(book.getNumberOfPages());

<<<<<<< HEAD
=======
        bookRepository.save(book1);

>>>>>>> main
        return book1;
    }

    public Book DeleteBook(Integer BookId){
        Book book =  bookRepository.findById(BookId).orElseThrow(()->new ResourceNotFoundException("Book","BookId",BookId));

        bookRepository.delete(book);

        return book;
    }
}
