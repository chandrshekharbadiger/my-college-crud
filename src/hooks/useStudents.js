'use client';
import { useState, useEffect } from 'react';

export const useStudents = () => {
  const generateId = () => 'student_' + Math.random().toString(36).substr(2, 9) + Date.now();

  const [students, setStudents] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('students');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const validateStudent = (student) => {
    const { name, rollNo, course } = student;
    if (!name?.trim() || !rollNo?.trim() || !course?.trim()) {
      alert('Please fill all fields (Name, Roll No, Course)');
      return false;
    }
    if (name.trim().length < 2) {
      alert('Name must be at least 2 characters');
      return false;
    }
    return true;
  };

  const isDuplicateRollNo = (rollNo, excludeId = null) => {
    return students.some(student =>
      student.rollNo.toLowerCase() === rollNo.toLowerCase().trim() && 
      student.id !== excludeId
    );
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('students', JSON.stringify(students));
      } catch (e) {
        console.error('localStorage save error:', e);
      }
    }
  }, [students]);

  const addStudent = (student) => {
    if (!validateStudent(student)) return;
    if (isDuplicateRollNo(student.rollNo)) {
      alert(`Roll No "${student.rollNo}" already exists!`);
      return;
    }

    const newStudent = { 
      id: generateId(), 
      ...student,
      createdAt: new Date().toISOString()
    };
    setStudents(prev => [...prev, newStudent]);
  };

  const updateStudent = (id, updated) => {
    if (!validateStudent(updated)) return;
    if (isDuplicateRollNo(updated.rollNo, id)) {
      alert(`Roll No "${updated.rollNo}" already exists!`);
      return;
    }

    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, ...updated, updatedAt: new Date().toISOString() } : s
    ));
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return { students, addStudent, updateStudent, deleteStudent };
};