package com.example.demo.Repository;


import com.example.demo.Models.Book;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book,Integer> {
<<<<<<< HEAD

=======
    boolean existsByTitle(String title);
    boolean existsByAuthor(String author);
>>>>>>> main
}