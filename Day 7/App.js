// import React from 'react';
// import LoginScreen from './login/userlogin';


// const App = () => {
//   return (
//     <div>
//       <LoginScreen />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import LoginForm from './login/LoginForm';
import Home from './login/Home';
import Home1 from './login/Home1';
import AdminLoginForm from './login/admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home2 from './login/Home2';
import FileUpload from './file/fileupload';
import CustomizedTables from './result/results';
import ProfilePage from './user/profile';
import StudentTable from './result/stddb';
import Customized from './user/ures';
import Login from './result/uresl';
import AdminAssignments from './result/assi';
import AssignmentStatus from './result/astatus';
import Contactus from './user/contactus';
import MyApp from './login/admnuser';
import LoginScreen from './login/userlogin';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<LoginForm />}></Route>
      <Route path='/assig' element={<AdminAssignments />}></Route>
      <Route path='/home1' element={<Home1 />}></Route>
      <Route path='/admin' element={<AdminLoginForm />}></Route>
      <Route path='/home2' element={<Home2 />}></Route>
      <Route path='/assign' element={<FileUpload />}></Route>
      <Route path='/ures' element={<Customized />}></Route>
      <Route path='/uresl' element={<Login />}></Route>
      <Route path='/stddb' element={<StudentTable />}></Route>
      <Route path='/results' element={<CustomizedTables />}></Route>
      <Route path='/astatus' element={<AssignmentStatus />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>
      <Route path='/contact' element={<Contactus />}></Route>
      <Route path='/adminlogin' element={<MyApp />}></Route>
      <Route path='/userlogin' element={<LoginScreen />}></Route>
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
