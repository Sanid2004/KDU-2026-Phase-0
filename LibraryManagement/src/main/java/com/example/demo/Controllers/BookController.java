package com.example.demo.Controllers;

import com.example.demo.DTOs.BookDto;
import com.example.demo.Models.Book;
import com.example.demo.Service.BookService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Library")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/AddBook")
    public ResponseEntity<Book> AddBook(@Valid @RequestBody Book book){
        return new ResponseEntity<Book>(bookService.AddBook(book),HttpStatus.ACCEPTED);
    }

    @GetMapping("/GetBook/{id}")
    public ResponseEntity<BookDto> GetBook(@PathVariable("id") Integer BookId){
        return new ResponseEntity<BookDto>(bookService.GetBook(BookId), HttpStatus.OK);
    }

    @PutMapping("/UpdateBook")
    public ResponseEntity<Book> UpdateBook(@Valid @RequestBody Book book){
        return new ResponseEntity<Book>(bookService.UpdateBook(book),HttpStatus.OK);
    }

    @DeleteMapping("/DeleteBook/{id}")
    public ResponseEntity<Book> DeleteBook(@PathVariable("id") Integer BookId){
        return new ResponseEntity<Book>(bookService.DeleteBook(BookId),HttpStatus.NO_CONTENT);
    }
}