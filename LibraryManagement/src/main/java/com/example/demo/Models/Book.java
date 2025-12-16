package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer bookId;

    @NotNull
    private String title;

    @PositiveOrZero(message = "Price must be non-negative")
    private Double price;

    @NotNull
    private String author;

    @Min(value = 0, message = "Ratings must be at least 0")
    @Max(value = 10, message = "Ratings cannot exceed 10")
    private Integer ratings;

    @NotNull
    private Date publishedDate;

    @NotNull
    private Integer numberOfPages;
}