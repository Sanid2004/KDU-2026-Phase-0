package com.example.demo.Service;

import com.example.demo.DTOs.BookDto;
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
        return bookRepository.save(book);
    }

    public Book UpdateBook(@Valid Book book){
        Book book1 =  bookRepository.findById(book.getBookId()).orElseThrow(()->new ResourceNotFoundException("Book","BookId", book.getBookId()));

        book1.setAuthor(book.getAuthor());
        book1.setRatings(book.getRatings());
        book1.setPrice(book.getPrice());
        book1.setPublishedDate(book.getPublishedDate());
        book1.setNumberOfPages(book.getNumberOfPages());

        return book1;
    }

    public Book DeleteBook(Integer BookId){
        Book book =  bookRepository.findById(BookId).orElseThrow(()->new ResourceNotFoundException("Book","BookId",BookId));

        bookRepository.delete(book);

        return book;
    }
}
