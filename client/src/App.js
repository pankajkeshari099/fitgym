import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/css/style.css'
import Home from './component/home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import About from './component/about';
import Contact from './component/contactus';
import Login from './component/login';
import Registration from './component/registration';
import Userdashboard from './component/userdashboard';
import Exercise from './component/exercise';
import Day1 from './component/day1';
import Day2 from './component/day2';
import Day3 from './component/day3';
import Day4 from './component/day4';
import Rest_Day from './component/rest_day';
import User_Profile from './component/user_profile';
import Admin_Home from './component/admin_home';
import User_Details from './component/user_details';
import User_list_Item from './component/user_list_item';
import Admin_Userdata_Edit from './component/admin_userdata_edit';
import Admin_Upload_Video from './component/admin_upload_video';
import Admin_Login from './component/admin_login';
import User_Message from './component/user_message';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/about' element={<About/>}>About</Route>
      <Route path='/contact' element={<Contact/>}>Contact</Route>
      <Route path='/login' element={<Login/>}>Login</Route>
      <Route path='/registration' element={<Registration/>}>registration</Route>
      <Route path='/userdashboard' element={<Userdashboard/>}>Userdashboard</Route>
      <Route path='/exercise' element={<Exercise/>}>Exercise</Route>
      <Route path='/day1' element={<Day1/>}>Day1</Route>
      <Route path='/day2' element={<Day2/>}>Day2</Route>
      <Route path='/day3' element={<Day3/>}>Day3</Route>
      <Route path='/day4' element={<Day4/>}>Day4</Route>
      <Route path='/rest_day' element={<Rest_Day/>}>Rest_Day</Route>
      <Route path='/user_profile' element={<User_Profile/>}>User_Profile</Route>
      <Route path='/admin_home' element={<Admin_Home/>}>Admin_Home</Route>
      <Route path='/user_details' element={<User_Details/>}>User_Details</Route>
      <Route path='/user_list_item' element={<User_list_Item/>}>User_list_Titem</Route>
      <Route path='/admin_userdata_edit/:postid' element={<Admin_Userdata_Edit/>}>Admin_Userdata_Edit</Route>
      <Route path='/admin_upload_video' element={<Admin_Upload_Video/>}>Admin_Upload_Video</Route>
      <Route path='/adminlogin' element={<Admin_Login/>}>Admin_Login</Route>
      <Route path='/user_message' element={<User_Message/>}>Admin_Login</Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
