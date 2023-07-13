import React, { useState } from 'react';
// import './ScoreForm.css';

const ScoreForm = () => {
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subject: ${subject}, Score: ${score}`);
    // Reset form fields
    setSubject('');
    setScore('');
  };

  return (
    <div className="score-form-container">
      <form onSubmit={handleSubmit} className="score-form">
        <h2>Enter Scores</h2>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="score">Score:</label>
          <input
            type="number"
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ScoreForm;
