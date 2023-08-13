package com.javaworkspace.studentSystem.service;

import java.util.List;

import com.javaworkspace.studentSystem.model.Student;

public interface StudentService {
	
public Student saveStudent(Student student);

public List<Student> getAllStudents();
}
