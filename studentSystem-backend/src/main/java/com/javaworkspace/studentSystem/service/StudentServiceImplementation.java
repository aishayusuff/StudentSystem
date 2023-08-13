package com.javaworkspace.studentSystem.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaworkspace.studentSystem.model.Student;
import com.javaworkspace.studentSystem.repository.StudentRepository;

@Service
public class StudentServiceImplementation implements StudentService{

	@Autowired 
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	
	
	


}
