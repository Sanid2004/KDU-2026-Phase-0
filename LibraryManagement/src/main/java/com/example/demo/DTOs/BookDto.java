package com.example.demo.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookDto {
    private Integer BookId;
    private String Title;
    private Double Price;
    private String Author;
}