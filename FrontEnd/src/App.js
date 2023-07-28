// // main-app.js (or any other filename)

// import React from 'react';
//  import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Login from './login/Login';
// import SignUp from './login/LoginForm';
// import Login from './login/LoginForm';
// import Home2 from './login/Home2';
// const App = () => {
//   return (
//     <div className='App'>
//         <BrowserRouter>
//          <Routes>
//          <Route path='/' element={<Login />}></Route>
//          <Route path='/SignUp' element={<SignUp />}></Route>
//          <Route path='/home2' element={<Home2 />}></Route>
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import SignUp from './login/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './login/Home';
import Home1 from './login/Home1';
import AdminLoginForm from './login/admin';
import Home2 from './login/Home2';
import FileUpload from './file/fileupload';
import CustomizedTables from './result/results';
import ProfilePage from './user/profile';
import StudentTable from './result/stddb';
import Customized from './user/ures';
// import Login from './login/Login';
import Login from './login/Login';
import AdminAssignments from './result/assi';
import AssignmentStatus from './result/astatus';
import Contactus from './user/contactus';
import MyApp from './login/admnuser';
import LoginScreen from './login/userlogin';
import AddProduct from './component/AddProduct';
import Ho from './component/home2';
import EditProduct from './component/EditProduct';
import Feedback from './Feedback';
// import Hom from './database/home1';
// import AddStudent from './database/AddStudent';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route path='/assig' element={<AdminAssignments />}></Route>
      <Route path='/home1' element={<Home1 />}></Route>
      <Route path='/admin' element={<AdminLoginForm />}></Route>
      <Route path='/home2' element={<Home2 />}></Route>
      <Route path='/assign' element={<FileUpload />}></Route>
      <Route path='/ures' element={<Customized />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/stddb' element={<StudentTable />}></Route>
      <Route path='/results' element={<CustomizedTables />}></Route>
      <Route path='/astatus' element={<AssignmentStatus />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/contact' element={<Contactus />}></Route>
      <Route path='/adminlogin' element={<MyApp />}></Route>
      <Route path='/userlogin' element={<LoginScreen />}></Route>
      <Route path='/addProduct' element={<AddProduct />}></Route>
      <Route path='/return' element={<Ho />}></Route>
      <Route path='/EditProduct/:id' element={<EditProduct />}></Route>  
      <Route path='/Feedback' element={<Feedback/>}></Route>  
          
    </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';

// const App = () => {
//   return (
//     <Provider store={store}>
//       {/* Your component hierarchy goes here */}
//       <Contact />
//     </Provider>
//   );
// };

// export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import Contactus from './Contact';

// function App() {
//   return (
//     <Provider store={store}>
//       <Contactus />
//     </Provider>
//   );
// }

// export default App;
