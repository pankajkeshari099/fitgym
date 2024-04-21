import React from "react";
import {Link} from 'react-router-dom'
import Footer from "./footer";
import  Img1  from '../images/day4.1.jpg';
import  Img2  from '../images/day4.2.jpg';
import  Img3  from '../images/day4.3.jpg';
import  Img4  from '../images/day4.4.jpg';
import  Img5  from '../images/day4.5.jpg';
import { useNavigate } from "react-router-dom";

function Day4()
{
    const navigate = useNavigate();
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
        <a><Link to='/day4' className="btn btn-warning">Day-4</Link></a>
        &nbsp;
        <a><Link to='/rest_day' className="btn btn-success">Rest Day</Link></a>
    </div>
   </div>
   <h1 className="text-white bg-dark">Welcome to Day 4 </h1>
 <h2 className="text-primary" >Back And Shoulders </h2>
    
<h3> 1 Overhead press </h3>

<img src={Img1} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec
</h4> <h4>Hold a bar in front of your neck with your hands just wider than shoulder-width apart. Keeping your 
</h4> <h4>chest up and core braced, press the bar overhead until your arms are straight. Lower it back to the start.</h4>
&nbsp; 

   <h3> 2 Rack pull </h3>

<img src={Img2} alt="" /> 

<h4> Sets 5 Reps 10 Tempo 2111 Rest 60sec
</h4> <h4>Stand tall in front of a barbell resting on safety bars at knee height. Bend and grasp the bar with an 
</h4> <h4>overhand grip, then stand up until your back is straight again, squeezing your shoulder blades together 
</h4> <h4>at the top. Do this for 5 times and max 10 reps in a set</h4>

   &nbsp;   
<h3> 3 Seated dumbbell press </h3>

<img src={Img3} alt="" /> 
<h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec
</h4> <h4>Sit on an upright bench with a dumbbell in each hand at shoulder height. Keeping your chest up,
</h4> <h4>press the weights directly overhead until your arms are straight, then lower them back to the start.</h4>

&nbsp;
<h3> 4 Lateral raise </h3>

<img src={Img4} alt="" /> 

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec
</h4> <h4>Stand tall, holding a light dumbbell in each hand with palms facing. Keeping your chest up and a bend in 
</h4> <h4>your elbows, raise the weights out to shoulder height, then lower back to the start.</h4>

&nbsp;

<h3> 5 Reverse flye </h3>

<img src={Img5} alt="" /> 

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec
</h4> <h4>Bend forward from the hips holding a light dumbbell in each hand with palms facing. Keeping a slight bend
</h4> <h4>in your elbows, raise the weights out to shoulder height, then lower back to the start.</h4>

&nbsp;
&nbsp;
</div>
  <Footer/>
    </>)
}
export default Day4;