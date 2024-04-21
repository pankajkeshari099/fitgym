import React from "react";
import {Link} from 'react-router-dom'
import Footer from "./footer";
import video1 from "../videos/Restday1.mp4";
import video2 from "../videos/Restday2.mp4";
import { useNavigate } from "react-router-dom";
function Rest_Day()
{
    const navigate = useNavigate();
   function logout(){
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
<div className="row m-1 justify-content-center">
<div className="col-md-8">
        <a><Link to='/exercise' className="btn btn-success">Warmup</Link></a>
        &nbsp;
        <a><Link to='/day1' className="btn btn-success">Day-1</Link></a>
        &nbsp;
        <a><Link to='/day2' className="btn btn-success">Day-2</Link></a>
        &nbsp;
        <a><Link to='/day3' className="btn btn-success">Day-3</Link></a>
        &nbsp;
        <a><Link to='/day4' className="btn btn-success">Day-4</Link></a>
        &nbsp;
        <a><Link to='/rest_day' className="btn btn-warning">Rest Day</Link></a>
    </div>
   </div>
   <h1 className="text-white bg-dark">Its Your Rest Day </h1>
    
    <h4 className="text-primary"> GRAB A CUP OF COFEE AND LET YOUR MUSCLES REST TODAY! </h4>
      
     <center> 
     
        <video src={video1}   width='980' height='550' className="border border-dark" controls autoplay="true"/>
       <video src={video2}   width='980' height='550' className="border border-dark" controls autoplay="true"/> 
        </center>
&nbsp;
</div>
  <Footer/>
    </>)
}
export default Rest_Day;