import { useState } from 'react';
import { useStudents } from './hooks/useStudents';
import StudentList from './components/StudentList';

function App() {
  const { students, addStudent, updateStudent, deleteStudent } = useStudents();
  const [editingStudent, setEditingStudent] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">College Student Management System</h1>
        <StudentList 
          students={students} 
          addStudent={addStudent} 
          updateStudent={updateStudent} 
          deleteStudent={deleteStudent}
          editingStudent={editingStudent}
          setEditingStudent={setEditingStudent}/>
      </div>
    </div>
  );
}

export default App;