const StudentItem = ({ student, onEdit, onDelete }) => (
  <div className="flex justify-between items-center p-4 bg-gray-50 border rounded-lg hover:shadow-md">
    <div>
      <h3 className="font-semibold">{student.name}</h3>
      <p>Roll: {student.rollNo} | {student.course}</p>
    </div>
    <div className="flex space-x-2">
      <button onClick={() => onEdit(student)} className="text-blue-500 hover:text-blue-700">Edit</button>
      <button onClick={() => onDelete(student.id)} className="text-red-500 hover:text-red-700">Delete</button>
    </div>
  </div>
);

export default StudentItem;
