import { useState } from 'react';
import { FaSave } from 'react-icons/fa';

const StudentForm = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState(student || { name: '', rollNo: '', course: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg">
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border rounded focus:outline-none focus:ring-2" />
      <input type="text" placeholder="Roll No" value={formData.rollNo} onChange={(e) => setFormData({...formData, rollNo: e.target.value})} className="w-full p-3 border rounded focus:outline-none focus:ring-2" />
      <input type="text" placeholder="Course" value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full p-3 border rounded focus:outline-none focus:ring-2" />
      <div className="flex space-x-2">
        <button type="submit" className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center"><FaSave /> Save</button>
        {onCancel && <button type="button" onClick={onCancel} className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cancel</button>}
      </div>
    </form>
  );
};

export default StudentForm;
