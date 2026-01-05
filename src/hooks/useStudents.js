import { useState, useEffect } from 'react';

export const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => setStudents([...students, { id: Date.now(), ...student }]);
  const updateStudent = (id, updated) => setStudents(students.map(s => s.id === id ? { ...s, ...updated } : s));
  const deleteStudent = (id) => setStudents(students.filter(s => s.id !== id));

  return { students, addStudent, updateStudent, deleteStudent };
};
