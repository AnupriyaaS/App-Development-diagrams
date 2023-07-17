import React from 'react'
import './assi.css';

export default function AdminAssignments() {
  return (
    <div className='container-ass'>
    <h2 className='null-ass'>POST ASSIGNMENT</h2>
    <div class="wrapper-ass">
    <div class ="form-box-ass login">
      <form action="a">
      <div class="input-box-ass">
        <span class="icon-ass"></span>
        <input type="text" required/>
        <label>Assignment Name</label>
      </div>
        <div class="input-box-ass">
          <span class="icon-ass"></span>
          <input type="date" required/>
        </div>
        <label style={{color:'black'}}>Assignment Name</label>
        <div class="ass">
        <span class="icon-ass"></span>
        <br></br>
        <textarea/>
      </div><br></br>
        <button type="submit" class="btn-ass">Submit</button>
        </form>
        </div>
        </div>
        </div>
    )
  }