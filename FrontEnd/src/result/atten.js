import React, { useState } from 'react';
import './atten.css';

const AttendanceUpdateForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [attendance, setAttendance] = useState('');

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Roll No:', rollNo);
    console.log('Attendance:', attendance);
   
    setRollNo('');
    setAttendance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rollNo">Roll No:</label>
        <input
          type="text"
          id="rollNo"
          value={rollNo}
          onChange={handleRollNoChange}
          required
        />
      </div>
      <div>
        <label htmlFor="attendance">Attendance Percentage:</label>
        <input
          type="number"
          id="attendance"
          value={attendance}
          onChange={handleAttendanceChange}
          required
        />
      </div>
      <button type="submit">Update Attendance</button>
    </form>
  );
};

export default AttendanceUpdateForm;
