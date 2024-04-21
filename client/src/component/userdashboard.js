import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import video1 from '../videos/test.mp4';
import video2 from '../videos/home1.mp4';
import video3 from '../videos/home2.mp4'
import axios from 'axios'
import Footer from './footer';
import { useNavigate } from "react-router-dom";

function Userdashboard() {
  const [myData,setmyData] = useState([]);
  const emailid = localStorage.getItem('email');
  useEffect(()=>{
    axios.post('/api/post/getpostdata',{emailid}).then(res=>{
      
      setmyData(res.data);
    }).catch(err=>{
        console.log(err)
    })
},[])
  const navigate = useNavigate();

 function logout()
 {
  localStorage.clear();
  navigate('/login');
 }
  return (
    <>
       <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 id='heading'>FIT GYM</h2>
                    </div>
                    <div className="col-md-8" id='menu'>
                        <ul>
                        <li><a><Link to='/userdashboard'>Home</Link></a></li>
                        <li><a><Link to='/exercise'>Exercise</Link></a></li>
                        <li><a><Link to='/user_profile'>Profile</Link></a></li>
                        <li><a><button onClick={logout} style={{border:'none',background:'none',color:'white'}}>Logout</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        &nbsp;
        {
          myData.map((post)=>{
            return(
        <div className='container'> 
   <h1 className="text-white bg-dark">Welcome to FIT GYM <span style={{color:"blue",textTransform:'uppercase'}}>{post.username}</span></h1>
   &nbsp;
  <center>
  <p> Regular exercise and physical activity promotes strong muscles and
  bones. It improves respiratory, cardiovascular health, and overall health.
  Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and reduce your risk for some cancers.</p>

   
     <video src={video2}   width='950' height='550' className="border border-dark" controls autoplay="true"/>
     &nbsp;

  <p> Staying active and healthy allows you to do activities that require
    a certain level of physical fitness. For example, hiking to the top of
     a mountain is a rewarding experience that instills a sense of accomplishment 
    and provides spectacular scenery, but there are people who cannot experience 
   this due to fitness limitations. </p> 
     <video src={video3}   width='980' height='550' className="border border-dark" controls autoplay="true"/>
    &nbsp;&nbsp;
     <video src={video1}   width='980' height='550' className="border border-dark" controls autoplay="true"/>
&nbsp;
     <p>Encourage your family to be more active, and challenge yourself to meet daily or weekly
     physical activity goals. Play outdoor sports with the whole family, schedule time each day
    to go to the gym, or pick up healthy, active hobbies like hiking or cycling. National Physical
    Fitness and Sports Month is a great time to get more active, but don’t stop at the end of the
   month. Make exercise and physical activity a permanent part of your daily routine! </p>
     &nbsp;
     </center>
  </div>
   )
  })
}
    <Footer/>
    </>
  )
}
export default Userdashboard;