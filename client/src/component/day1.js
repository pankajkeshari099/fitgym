import React from "react";
import {Link} from 'react-router-dom'
import Footer from "./footer";
import  Img1  from '../images/day1.1.jpg';
import Img2 from '../images/day1.2.jpg';
import  Img3  from '../images/day1.3.jpg';
import  Img4  from '../images/day1.4.jpg';
import  Img5  from '../images/day1.5.jpg';
import { useNavigate } from "react-router-dom";

function Day1()
{
    const navigate = useNavigate();
    function logout()
    {  localStorage.clear();
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
        <a><Link to='/day1' className="btn btn-warning">Day-1</Link></a>
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
   <h1 className="text-white bg-dark" >Welcome to Day 1</h1>
   <h2 className="text-primary"> Chest And Triceps </h2>
   &nbsp;
  
   <h3> 1 Bench press </h3>
 &nbsp;
  <img src={Img1} alt="" />
   <div>
   <h4   >Sets 5 Reps 10 Tempo 2010 Rest 60sec Lie on a flat bench holding a barbell with your hands.</h4>
   <h4 >slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your.</h4>
   <h4  >chest. Press it back up to the start.</h4> </div>

   &nbsp;
   <h3> 2 Triceps dip </h3>
  
  <img src={Img2} alt="" />

  <h4> Sets 5 Reps 6-10 Tempo 2110 Rest 60sec Grip rings or parallel bars with your arms straight. 
  </h4> <h4> Keeping your chest up, bend your elbows to lower your body as far as your shoulders allow. 
  </h4> <h4> Press back up powerfully to return to the start.</h4>
  &nbsp; 

  <h3> 3 Incline dumbbell press </h3>

  <img src={Img3} alt="" />

  <h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each
  </h4> <h4> hand by your shoulders. Press the weights up until your arms are straight, then lower them 
  </h4> <h4>   back to the start under control.</h4>
  &nbsp;
  <h3> 4 Incline dumbbell flye</h3>

  <img src={Img4} alt="" />

  <h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each hand above 
  </h4> <h4>your face, with your palms facing and a slight bend in your elbows. Lower them to the sides, then bring 
  </h4> <h4>them back to the top. Repeat it thrice and each set has max 15 Reps  </h4>
&nbsp;
  <h3> 5 Triceps extension</h3> 

   <img src={Img5} alt="" />

   <h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Stand tall holding a dumbbell over your head with both hands,
   </h4> <h4> arms straight. Keeping your chest up, lower the weight behind your head, then raise it back to the start.</h4>
   &nbsp;
   &nbsp;
</div>

  <Footer/>
    </>)
}
export default Day1;