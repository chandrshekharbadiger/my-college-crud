import StudentItem from './StudentItem';
import StudentForm from './StudentForm';

const StudentList = ({ students, addStudent, updateStudent, deleteStudent, editingStudent, setEditingStudent }) => (
  <div className="space-y-4">
    {editingStudent && (
      <StudentForm 
        student={editingStudent} 
        onSave={(data) => { updateStudent(editingStudent.id, data); setEditingStudent(null); }} 
        onCancel={() => setEditingStudent(null)} 
      />
    )}
    {!editingStudent && <StudentForm student={{}} onSave={addStudent} />}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {students.map(student => (
        <StudentItem key={student.id} student={student} onEdit={setEditingStudent} onDelete={deleteStudent} />
      ))}
    </div>
  </div>
);

export default StudentList;
