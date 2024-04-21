import React from "react";
import {Link} from 'react-router-dom'
import Footer from "./footer";
import  Img1  from '../images/day2.1.jpg';
import  Img2  from '../images/day2.2.jpg';
import  Img3  from '../images/day2.3.jpg';
import  Img4  from '../images/day2.4.jpg';
import  Img5  from '../images/day2.5.jpg';
import { useNavigate } from "react-router-dom";

function Day2()
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
        <a><Link to='/day2' className="btn btn-warning">Day-2</Link></a>
        &nbsp;
        <a><Link to='/day3' className="btn btn-success">Day-3</Link></a>
        &nbsp;
        <a><Link to='/day4' className="btn btn-success">Day-4</Link></a>
        &nbsp;
        <a><Link to='/rest_day' className="btn btn-success">Rest Day</Link></a>
    </div>
   </div>
   <h1 className="text-white bg-dark">Welcome to Day 2 </h1>
   <h2 className="text-primary"> Back And Biceps </h2>
  
<h3> 1 Pull-up </h3>

<img src={Img1} alt="" />

<h4> Sets 5 Reps 6-10 Tempo 2011 Rest 60sec Hold a pull-up bar with an overhand grip, hands 
</h4> <h4>shoulder-width apart. Brace your core, then pull yourself up until your lower chest touches
</h4> <h4> the bar. Lower until your arms are straight again.</h4>
  &nbsp;
<h3> 2 Bent-over row </h3>

<img src={Img2} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec Hold a barbell using an overhand grip, hands just outside your
</h4> <h4> legs, and lean forward from the hips. Bend your knees slightly and brace your core, then pull the bar 
</h4> <h4>up, leading with your elbows. Lower it back to the start</h4> 

&nbsp;
<h3> 3 Chin-up </h3>

<img src={Img3} alt="" />

<h4> Sets 3 Reps 6-10 Tempo 2011 Rest 60sec Hold a pull-up bar with hands shoulder-width apart, palms 
</h4> <h4>facing you. Brace your core, then pull yourself up until your chin is over the bar. Lower until your
</h4> <h4>varms are straight again. Repeat this thrice with max 10 Reps</h4> 

&nbsp;
<h3> 4 Standing biceps curl </h3>

<img src={Img4} alt="" />

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec Stand with dumbbells by your sides, palms facing forwards.
</h4> <h4> Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them back
</h4> <h4> to the start. Repeat this Thrice with 15 Reps Max in each set</h4>

&nbsp;
<h3> 5 Seated incline curl</h3>

<img src={Img5} alt="" />

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec Sit on an incline bench with dumbbells by your sides, palms facing
</h4> <h4> forwards. Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them 
</h4> <h4> back to the start. Repeat this thrice with 15 Reps max in a set</h4>
&nbsp;

&nbsp;
</div>
  <Footer/>
    </>)
}
export default Day2;