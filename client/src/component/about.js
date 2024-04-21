import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer';
import pankaj from '../images/pankaj.jpg'
import pankajkeshari from '../images/pankajkeshari.jpg'

import priya from '../images/priya.jpg'
import pankajkumar from '../images/pankaj kumar.jpg'

function About() {
    return (<div>
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 id='heading'>FIT GYM</h2>
                    </div>
                    <div className="col-md-8" id='menu'>
                        <ul>
                            <li><a><Link to='/'>Home</Link></a></li>
                            <li><a><Link to='/about'>About</Link></a></li>
                            <li><a><Link to='/contact'>Contact</Link></a></li>
                            <li><a><Link to='/login'>Login</Link></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        &nbsp;
        &nbsp;
        &nbsp;
        <div className='container'>
            <h1 className="text-center">About US</h1>
            &nbsp;
            <p>We are dedicated to helping you achieve your fitness goals. Our experience runs deep and our coaches know just that
                how do you get the adrenaline going. We believe in following the latest fitness trends and  also invest in it
                time-tested techniques.Our gym features the best state-of-the-art strength and cardio equipment, and personal
                time tested techniques. Our gym has state-of-the-art strength and cardio equipment and personal equipment
                training sessions that will get you on track even when you're not. We believe that when you come to VelocityX, you won't
                If you join just  another gym, you're entering a world of like-minded people who are here to give you everything
                you need to do strength training.
            </p>
        </div>
        <div className="container">
            <h2 className='text-center'>Our Teams</h2>
            &nbsp;
            <div className="row mt-3"style={{marginLeft:'2rem'}}>
                <div className="col-md-4" style={{ borderRadius: '25px' }}>
                    <div className="card" style={{ width: "18rem", borderRadius: '25px' }}>
                        <img src={pankajkeshari} style={{ borderRadius: '25px', height: "25rem" }} alt="" />
                        <div className="card-body">
                            <h3 className="card-text">Pankaj Keshari</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{ borderRadius: '25px' }}>
                    <div className="card" style={{ width: "18rem", borderRadius: '25px' }}>
                        <img src={priya} style={{ borderRadius: '25px', height: "25rem" }} alt="" />
                        <div className="card-body">
                            <h3 className="card-text">Priya Maurya</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{ borderRadius: '25px' }}>
                    <div className="card" style={{ width: "18rem", borderRadius: '25px' }}>
                        <img src={pankajkumar} alt="" style={{ borderRadius: '25px' }} />
                        <div className="card-body">
                            <h3 className="card-text">Pankaj Kumar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        &nbsp;
        <Footer />
    </div>)
}
export default About;