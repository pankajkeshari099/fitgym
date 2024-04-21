import React from "react";
import {Link} from 'react-router-dom'
import video1 from '../videos/1-Neck-circles.mp4'
import video2 from '../videos/2-Shoulder-Rotation.mp4'
import video3 from '../videos/3-Arm-Circles.mp4'
import video4 from '../videos/4-ElbowCircle.mp4'
import video5 from '../videos/5-hiprotation.mp4'
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
function Exercise()
{
    const navigate =useNavigate();
    function logout()
    {
        localStorage.clear();
        navigate('/login');
    }
    return(
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

        <div className="container-fluid"> 
   
   <div className="row mt-1 justify-content-center">
    <div className="col-md-8">
        <a><Link to='/exercise' className="btn btn-warning">Warmup</Link></a>
        &nbsp;
        <a><Link to='/day1' className="btn btn-success">Day-1</Link></a>
        &nbsp;
        <a><Link to='/day2' className="btn btn-success">Day-2</Link></a>
        &nbsp;
        <a><Link to='/day3' className="btn btn-success">Day-3</Link></a>
        &nbsp;
        <a><Link to='/day4' className="btn btn-success">Day-4</Link></a>
        &nbsp;
        <a><Link to='/rest_day' className="btn btn-success">Rest Day</Link></a>
    </div>
   </div>
   <h2 className="text-white bg-dark">Its Time to Warmup your body </h2>
  
  
    
   <center> 
   &nbsp;
   
   <h2>1- Neck Circles </h2>
    <video src={video1}   width='980' height='550' className="border border-dark" controls/>
     &nbsp;
     <h4  className="lead"> Duration 30 Seconds </h4>
     <h4 > 
       Standup and Straight your posture and Start rotating your neck in clockwise or Anticlockwise direction
     </h4>
     &nbsp;

     <h2>2- Shoulder Rotation </h2>
     <video src={video2}   width='980' height='550' className="border border-dark" controls/> 
     &nbsp;
     <h4 className="lead"> Duration 30 Seconds </h4>
     <h4 > Keep your Standing Position and this time Rotate your shoulder in Cloclwise direction</h4>
     &nbsp;
     <h2>3- Arm Circles </h2>
     <video src={video3}   width='980' height='550' className="border border-dark" controls/> 
     &nbsp;
     <h4 className="lead" > Duration 30 Seconds </h4>
     <h4  > Keep your Standing Position and Rotate your Arms in Cloclwise direction</h4>
     &nbsp;
     <h2>4- Elbow Circles </h2>
     <video src={video4}   width='980' height='550' className="border border-dark" controls/> 
     &nbsp;
     <h4  className="lead"> Duration 30 Seconds </h4>
     <h4> Keep your Standing Position and Rotate your Elbows in Circular direction</h4>
     &nbsp;
     <h2>5- Hip Rotation </h2>
     <video src={video5}   width='980' height='550' className="border border-dark" controls/> 
     &nbsp;
     <h4  className="lead"> Duration 30 Seconds </h4>
     <h4> Keep your Standing Position and Rotate your Uper Body along with Hips in Cloclwise direction</h4>

    &nbsp;
      </center>

  </div>
  <Footer/>
    </>)
}
export default Exercise;