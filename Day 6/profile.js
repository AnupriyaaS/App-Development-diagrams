import React from 'react';
 
import ReactDOM from 'react-dom';
  
function Student(){
    return(
    <div>
      <h2>Student Details...</h2>
      <p>
        <label>Name :<b>{this.props.Name}</b></label>
      </p>
      <p> 
        <label>Roll Number :<b>{this.props.Rollno}</b></label>
       </p>      
      </div>
    );
 
  }
 
const element=<Student Name="Pragim" Gender='Male' Rollno='134566' />
export default Student;