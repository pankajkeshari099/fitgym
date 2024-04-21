import React from "react";
import {Link} from 'react-router-dom'
import Footer from "./footer";
import  Img1  from '../images/day3.1.jpg';
import  Img2  from '../images/day3.2.jpg';
import  Img3  from '../images/day3.3.jpg';
import  Img4  from '../images/day3.4.jpg';
import  Img5  from '../images/day3.5.jpg';
import { useNavigate } from "react-router-dom";

function Day3()
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
        <a><Link to='/day3' className="btn btn-warning">Day-3</Link></a>
        &nbsp;
        <a><Link to='/day4' className="btn btn-success">Day-4</Link></a>
        &nbsp;
        <a><Link to='/rest_day' className="btn btn-success">Rest Day</Link></a>
    </div>
   </div>
   <h1 className="text-white bg-dark">Welcome to Day 3 </h1>
     <h2 className="text-primary"> Legs And Abs </h2>
<h3> 1 Back squat</h3>

<img src={Img1} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec
</h4> <h4> Stand tall, holding a bar across the back of your shoulders. Keeping your chest up and core braced, 
</h4> <h4>squat down as deep as you can. Drive back up through your heels to return to the start.</h4>
&nbsp;

<h3> 2 Good morning</h3>

<img src={Img2} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec
</h4> <h4>Stand tall holding a light barbell across the backs of your shoulders, feet shoulder-width apart. 
</h4> <h4> With your core braced, bend forwards slowly from the hips, as far as your hamstrings allow but 
</h4> <h4>not past horizontal. Return to the start.</h4>
&nbsp;

<h3> 3 Hip thrust </h3>

<img src={Img3} alt=""/>

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec
</h4> <h4>Sit with your upper back supported on a bench, holding a barbell across the tops of your thighs. 
</h4> <h4>Thrust your hips up, squeeze your glutes at the top, and then return to the start. </h4>

&nbsp;

<h3> 4 Incline dumbbell press</h3>

<img src={Img4} alt="" />
<h4> 
Sets 3 Reps 12-15 Tempo 2110 Rest 60sec
</h4> <h4>Lie on an incline bench, holding a dumbbell in each hand by your shoulders. Press the weights 
</h4> <h4>up until your arms are straight, then lower them back to the start under control.
</h4>
&nbsp;
<h3> 5 Incline dumbbell flye</h3>

<img src={Img5} alt="" />

<h4> Sets 3 Reps 12-15 Tempo 2111 Rest 60sec
</h4> <h4>Lie on an incline bench, holding a dumbbell in each hand above your face, with your palms facing and 
</h4> <h4>a slight bend in your elbows. Lower them to the sides, then bring them back to the top.</h4>
</div>
&nbsp;
&nbsp;
  <Footer/>
    </>)
}
export default Day3;