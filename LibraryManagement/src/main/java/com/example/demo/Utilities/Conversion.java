package com.example.demo.Utilities;

import com.example.demo.DTOs.BookDto;
import com.example.demo.Models.Book;
import org.springframework.stereotype.Component;

@Component
public class Conversion {

    public BookDto ConvertToBook(Book book){
        BookDto bookDto = new BookDto();
        bookDto.setBookId(book.getBookId());
        bookDto.setAuthor(book.getAuthor());
        bookDto.setPrice(book.getPrice());
        bookDto.setTitle(book.getTitle());
        return bookDto;
    }
}
