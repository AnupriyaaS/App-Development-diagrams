// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import './LoginForm.css';
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();

//   const handleName = (event) => {
//     event.preventDefault();
//     setName(event.target.value);
//   };

//   const handleEmail = (event) => {
//     event.preventDefault();
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors(validateForm({ name, email, password }));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
//         name:name,
//         email:email,
//         password:password
  
//       });
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setEmail('');
//         setPassword('');  
//       }
      
//     }
//     catch(error){
//       alert(error);
//       setIsSubmit(false);
  
//     }
//     if (isSubmit) {
//       navigate('/login');
//     }
//   };

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Username is required';
//       setIsSubmit(false);
//     }

//     if (values.email.trim() === '') {
//       errors.email = 'Email is required';
//       setIsSubmit(false);
//     }

//     if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }

//     setIsSubmit(Object.keys(errors).length === 0);

//     return errors;
//   };

//   return (
//     <>
//     <div className='imbg'>
//     <div className='app3'>
//       <div className='login_fm'><center>
//         <form className='login_form' onSubmit={handleSubmit}>
//           <br></br>
//           <h1>Register</h1>
//           <div className='gogo'>
//             <div className='gogo'>
//               <br></br>
//               <div className='bhu'>
//               <label htmlFor='nm'>Username</label>
//               <br />
//               </div>
//               <input
//                 type='name'
//                 className='in'
//                 placeholder='username'
//                 value={name}
//                 id='nm'
//                 onChange={handleName}
//               />
//             </div>
//             {errors.name}
//           </div>
//         <div className="gogo">
//           <div className='gogo'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='email'
//               className='in'
//               placeholder='email'
//               id='email'
//               value={email}
//               onChange={handleEmail}
//             />
//           </div>
//           </div>
//           {errors.email && <span>{errors.email}</span>}

//           <div className='loginbox'>
//             <div className="gogo">
//             <div className='gogo'>
//               <label htmlFor='pwd'>Password</label>
//               <input
//                 type='password'
//                 className='in'
//                 placeholder='password'
//                 id='pwd'
//                 value={password}
//                 onChange={handlePassword}
//               />
//             </div>
            
            
//             {errors.password && <span>{errors.password}</span>}
//           </div>
//           </div>
//           <Link to='/login'>
//           <button
//             type='submit'
//             className='btn btn-secondary'
//             style={{
//               background: 'black',
//               color: 'white',
//               width: 180,
//               height: 50,
//               margin: 40,
//             }}
//           >
//             Sign In
//           </button>
//           </Link>
//           </form>
//           <Link to='/userlogin'
//           style={{
//             // background: 'black',
//             color: 'white',
//             width: 180,
//             height: 50,
//             margin: 40,
//           }}>
//           USER LOGIN
//           </Link>
//         </center>
//       </div>
//       </div>
//       </div>

//     </>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

function AdminLog() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirm, setConfirm] = useState("");
    const [phone, setPhone] = useState("");

    // const handleSubmit =()=>{
    //     console.log(policeId);
    //     console.log(email);
    //     console.log(password);
    //     // console.log(confirm);
    //     console.log(phone);

    // }
    const nav = useNavigate();
    const NavTo = () => {
		nav("/login");
		
	};

	const handleSubmit = () => {
        console.log(name);
		console.log(email);
		console.log(password);

		 axios.post("http://localhost:8080/sign-up",
		{
            "name":name,
			"email":email,
			"password":password
		})
		

	};

    return (
        <div>

            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ right: '10%' }}>

                <MDBRow>

                    <MDBCol className='text-center text-md-start d-flex flex-column' style={{ marginTop: '12%' }}>

                        <h1 className="display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', fontSize: '700%' }}>
                            TAMHSS
                            
                        </h1>

                        <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)', fontSize: '250%', lineHeight: '10px' }}>
                            The Passion To Guide Students
                        </p>

                    </MDBCol>

                    <MDBCol md='5' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <MDBCard className='my-4 bg-glass' style={{ width: '90%', height: '90%' }}>
                            <MDBCardBody className='p-5'>
                                <h1 style={{ textAlign: 'center', marginTop: '-30px' }}>Sign Up</h1>

                                <MDBInput wrapperClass='mb-4' name='name' label='Name' id='form3' type='text' value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' name='Email' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' name='Password' label='Password' id='form4' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                {/* <MDBInput wrapperClass='mb-4' name='ConfirmPassword' label='Confirm Password' id='form4' type='password' value={confirm} onChange={(e) => setConfirm(e.target.value)}/> */}
                                <MDBInput wrapperClass='mb-4' name='Phone' label='Phone' id='form4' type='tel' pattern='[0-9]-{10}' value={phone} onChange={(e) => setPhone(e.target.value)} />

                                <Link to='/login'><MDBBtn className='mb-4 btn btn-outline-secondary' data-mdb-ripple-color="dark" style={{ width: '200px', marginLeft: '5%', height: '50px' }} > sign In </MDBBtn></Link>
                                <Link to='/login'><MDBBtn className='mb-4 btn btn-outline-secondary' data-mdb-ripple-color="dark" style={{ width: '200px', marginLeft: '1%', height: '50px' }}onClick={handleSubmit}> Sign Up </MDBBtn></Link>

                                <hr />

                                <div className="text-center">

                                    <h3>or Sign In with:</h3>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="40%" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="40%" />
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default AdminLog;

//<MDBInput wrapperClass='mb-4' name='Email' label='Email' id='form3' type='email' />