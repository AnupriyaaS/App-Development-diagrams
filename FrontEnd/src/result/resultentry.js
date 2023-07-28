import React, { useState } from 'react';
import axios from 'axios'; // Add this line
import './resultentry.css';
// ... the rest of the code remains unchanged


const StudentResultEntry = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    tamil: '',
    english: '',
    maths: '',
    science: '',
    social: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleAddStudent = () => {
    axios
      .post('http://localhost:8080/post', newStudent)
      .then((response) => {
        const createdStudent = response.data;
        setStudents((prevStudents) => [...prevStudents, createdStudent]);
        setNewStudent({
          id: '',
          name: '',
          tamil: '',
          english: '',
          maths: '',
          science: '',
          social: '',
        });
      })
      .catch((error) => {
        console.error('Error creating student:', error);
      });
  };
  

const handleEditStudent = (index) => {
  const studentToEdit = students[index];
  setNewStudent({ ...studentToEdit });
};

const handleUpdateStudent = () => {
  const updatedStudents = students.map((student, index) =>
    index === students.findIndex((s) => s.id === newStudent.id) ? newStudent : student
  );
  setStudents(updatedStudents);
  setNewStudent({
    id: '',
    name: '',
    tamil: '',
    english: '',
    maths: '',
    science: '',
    social: '',
  });
};



  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className='result-entry'>
      <div className='result-entry-form'>
        <h2>Student Result Entry</h2>
        <div className='input-container'>
          <input
            type='number'
            placeholder='ID'
            name='id'
            value={newStudent.id}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={newStudent.name}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='number'
            placeholder='Tamil'
            name='tamil'
            value={newStudent.tamil}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='number'
            placeholder='English'
            name='english'
            value={newStudent.english}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='number'
            placeholder='Maths'
            name='maths'
            value={newStudent.maths}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='number'
            placeholder='Science'
            name='science'
            value={newStudent.science}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='number'
            placeholder='Social'
            name='social'
            value={newStudent.social}
            onChange={handleChange}
          />
        </div>
        <div className='button-container'>
          <button onClick={handleAddStudent}>Add</button>
          <button onClick={() => handleUpdateStudent()}>Update</button>
        </div>
      </div>
      <div className='result-entry-table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Tamil</th>
              <th>English</th>
              <th>Maths</th>
              <th>Science</th>
              <th>Social</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.tamil}</td>
                <td>{student.english}</td>
                <td>{student.maths}</td>
                <td>{student.science}</td>
                <td>{student.social}</td>
                <td>
                  <button onClick={() => handleEditStudent(index)}>Edit</button>
                  <button onClick={() => handleDeleteStudent(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentResultEntry;
