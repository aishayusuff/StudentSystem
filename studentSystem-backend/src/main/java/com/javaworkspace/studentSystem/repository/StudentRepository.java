package com.javaworkspace.studentSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javaworkspace.studentSystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
