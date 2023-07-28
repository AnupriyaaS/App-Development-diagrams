// import React from 'react'
// import { useState,useEffect } from 'react'
// import { redirect, useNavigate } from 'react-router-dom'
// import './Login.css'
// import axios from 'axios'
// import { useDispatch } from "react-redux";

// import { Link } from 'react-router-dom'



// const Login = () => {
//  const [name,setName]=useState('')
//  const [id,setId]=useState('')  
//  const [password,setPassword]=useState('')
//  const [errors, setErrors] = useState({});
//  const[isSubmit,setIsSubmit]=useState(false);
//  const navigate =useNavigate();
//  const dispatch=useDispatch();

//  const handleName=(event)=>{
//     event.preventDefault();
//     setName(event.target.value)
//   }
 
//   const handleId=(event)=>{
//     event.preventDefault();
//     setId(event.target.value)
//   }
//   const handlePassword=(event)=>{
//     event.preventDefault();
//     setPassword(event.target.value)
//   }
//   const handleSubmit=async (event)=>{
//     event.preventDefault();
//     setErrors(validateForm({name,id,password}));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
//         email:name,
//         password:password
  
//       });
//       navigate('/home2');
//       let token=response.data.token;
//       localStorage.setItem('token',token);
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setId('');
//         setPassword('');
  
        
  
//       }
      
//     }
//     catch(error){
//       console.log(error);
//       setIsSubmit(false);
  
//     }
//     // setIsSubmit(true);
    
    
   
// };
  

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Email is required';
//       setIsSubmit(false);
//     }

//     else if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }
//     else{
//         setIsSubmit(true)
//     }
//     return errors;

//     // setErrors(errors);
//   };

  

//   return (
//     <>
  
//     <div className='login'>
//         <form className='login_form' onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <div className='gogo'>
//             <div className='form-floating mb-3'>
//             <label for='nm'>Email</label>
//             <br></br>
//             <input type='email' className='form-control'
//             placeholder='abc@gmail.com'
//             value={name} id='nm'
//             onChange={handleName} />
//             </div>
//             {errors.name}
//             </div>

//             <div className='loginbox'>
//               <div className="jo">
//             <div className='form-floating mb-3'>
//             <label for='pwd'>Password</label>
//             <input type='password' className='form-control'
//             placeholder='password' id='pwd'
//             value={password}
//             onChange={handlePassword}/>
//             </div>
//             </div>
//             {errors.password && <span>{errors.password}</span>}
//             </div>
            
//             <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

//         </form>
//         <br></br><br></br>
//         <h2>Don't have an account? <a href='/SignUp'>SignUp</a></h2>
//     </div>
    
//     </>
//   )
// }

// export default Login


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

    const [policeId, setPoliceId] = useState("");
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
		nav("/home2");
		
	};

	const handleSubmit =  () => {
		console.log(email);
		console.log(password);

		 axios.post("http://localhost:8080/authenticate",
		{
			"email":email,
			"password":password
		})
		.then(response => {
			// toast.success(`Logged in Successfully !!`, {
				// 	position: 'bottom-center',
				// 	autoClose: 5000,
				// 	hideProgressBar: false,
				// 	closeOnClick: true,
				// 	pauseOnHover: true,
				// 	draggable: true,
				// 	progress: undefined,
				// 	theme: 'light',
				//   });
				window.sessionStorage.setItem("jwt", response.data.jwtToken);
				console.log('Token:', response.data.jwtToken);
				NavTo();
			
			// Handle the response here
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
                                <h1 style={{ textAlign: 'center', marginTop: '-30px' }}>Sign In</h1>

                                <MDBInput wrapperClass='mb-4' name='PId' label='Id' id='form3' type='number' value={policeId}
                                    onChange={(e) => setPoliceId(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' name='Email' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' name='Password' label='Password' id='form4' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                {/* <MDBInput wrapperClass='mb-4' name='ConfirmPassword' label='Confirm Password' id='form4' type='password' value={confirm} onChange={(e) => setConfirm(e.target.value)}/> */}
                                <MDBInput wrapperClass='mb-4' name='Phone' label='Phone' id='form4' type='tel' pattern='[0-9]-{10}' value={phone} onChange={(e) => setPhone(e.target.value)} />

                                <Link to='/home2'><MDBBtn className='mb-4 btn btn-outline-secondary' data-mdb-ripple-color="dark" style={{ width: '200px', marginLeft: '5%', height: '50px' }} onClick={handleSubmit}> sign In </MDBBtn></Link>
                                <Link to='/SignUp'><MDBBtn className='mb-4 btn btn-outline-secondary' data-mdb-ripple-color="dark" style={{ width: '200px', marginLeft: '1%', height: '50px' }}> sign Up </MDBBtn></Link>

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