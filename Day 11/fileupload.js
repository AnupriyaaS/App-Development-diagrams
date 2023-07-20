import React, { useState } from 'react';
import './fileupload.css'; 
import {Link} from 'react-router-dom';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert('Successfully added Assignments');
    } else {
      alert('Please select a file');
    }
  };

  return (
    <div className='app2'>
    <div className="file-upload-container">
      <div className="file-upload-box">
        <h2>Upload Student Assignments</h2>
        <input type="file" onChange={handleFileChange} required />
        <Link to='/home1'><button onClick={handleUpload}>Upload</button></Link>
      </div>
    </div>
    </div>
  );
};

export default FileUpload;
