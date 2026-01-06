'use client';
import { useState, useEffect } from 'react';

export const useStudents = () => {
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
    setStudents(prev => [...prev, { id: Date.now(), ...student }]);
  };

  const updateStudent = (id, updated) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return { students, addStudent, updateStudent, deleteStudent };
};