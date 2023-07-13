import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StudentInfo = () => {
  const [student, setStudent] = useState({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const rollNumber = searchParams.get('rollNumber');

    const fetchedStudent = {
      name: 'John Doe',
      rollNumber,
      address: '123 Street, City',
      subjects: ['Math', 'Science', 'English'],
      marks: [80, 85, 90],
      date: '2023-07-14',
    };
    setStudent(fetchedStudent);
  }, [location.search]);

  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: {student.name}</p>
      <p>Roll Number: {student.rollNumber}</p>
      <p>Address: {student.address}</p>
      <p>Subjects: {student.subjects?.join(', ')}</p>
      <p>Marks: {student.marks?.join(', ')}</p>
      <p>Date: {student.date}</p>
    </div>
  );
};

export default StudentInfo;
