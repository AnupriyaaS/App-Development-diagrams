import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RollNumberForm = () => {
  const [rollNumber, setRollNumber] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/student-info?rollNumber=${rollNumber}`);
  };

  return (
    <div>
      <h1>Enter Roll Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter Roll Number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RollNumberForm;
