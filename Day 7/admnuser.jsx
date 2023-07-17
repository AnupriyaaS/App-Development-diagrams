import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './adminuser.css';

function MyApp() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>
    
        <MDBCol col='4' md='6'>
          <div className="divider d-flex align-items-center my-4">
          </div>
          
        <br></br><br></br>
      <div>
         <h1 className='heading-admin'>Admin Login</h1>
      </div>
        
        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" required/>
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" required/>
        
        <div className="rememberme-checkbox">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        </div>
        
        <div className='text-center text-md-start mt-4 pt-2'>
        <MDBBtn className="user-login" size='lg'><a href='/home2' className='sign-in-butt'>SIGN IN</a></MDBBtn>
        <p className="small fw-bold mt-2 pt-1 mb-2"><a href="/userlogin" className="link-danger">User Login</a></p>
        </div>
          <p className="text-center fw-bold mx-3 mb-0"></p>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

      </div>

    </MDBContainer>
  );
}

export default MyApp;
