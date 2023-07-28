import React from 'react'
import './assi.css';
import { Link } from 'react-router-dom';

export default function AdminAssignments() {
  return (
    <div className='ass'>
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
        <Link to='/home2'><button type="submit" class="btn-ass">Submit</button></Link>
        </form>
        </div>
        </div>
        </div>
    )
  }