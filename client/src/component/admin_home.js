import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faUser,faMessage} from '@fortawesome/free-solid-svg-icons'
function Admin_Home(){

    const[userdata,setuserdata]=useState([]);
    const[usermessage,setusermessage]=useState([]);
    useEffect(()=>{
        axios.get('/api/post/getdata').then(res=>{
           console.log(res.data[0]);
            setuserdata(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    useEffect(()=>{
        axios.get('/api/messagepost/getmessage').then(res=>{
           console.log(res.data[0]);
           setusermessage(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

    let navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/adminlogin');
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
                                <li><a><Link to='/admin_home'>Home</Link></a></li>
                                <li><a><Link to='/user_details'>User Details</Link></a></li>
                                 <li><a><Link to='/user_message'>Message</Link></a></li>
                                <li><a><button onClick={logout} style={{ border: 'none', background: 'none', color: 'white' }}>Logout</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
           <div className="container" style={{margin:"2rem"}}>
            <h2><b>Admin Dashboard</b></h2>
        <div className="row" style={{margin:"4rem"}}>
            <div className="col-md-6">
            <div className="card text-bg-info mb-3" style={{maxWidth:"25rem"}}>
            <div className="card-header">
                <div className="card-body">
                    <h3>Your Profile</h3>
                <FontAwesomeIcon icon={faUserTie} style={{fontSize:"8rem",color:"red"}}/>
                    <h4 class="card-text text-dark">Name: {localStorage.getItem('name')}</h4>
                    <h5 class="card-text text-dark">Email Id: {localStorage.getItem('email')}</h5>
                    <h5 class="card-text text-dark">Gender: {localStorage.getItem('gender')}</h5>
                    <h5 class="card-text text-dark">Age: {localStorage.getItem('age')}</h5>

                 </div>
            </div>
           </div>
           </div>

           <div className='col-md-3'>
           <div className="card text-bg-warning mb-3" style={{maxWidth:"18rem"}}>
            <div className="card-header">
                <div className="card-body">
                    <h3>USERS</h3>
                < FontAwesomeIcon icon={faUser} style={{fontSize:"8rem",color:"#1abc9c"}}/>
                    <h5 class="card-text text-dark mt-1">{userdata.length}</h5>
 
                </div>
            </div>
           </div>
            </div>
            <div className='col-md-3'>
           <div className="card text-bg-success mb-3" style={{maxWidth:"18rem"}}>
            <div className="card-header">
                <div className="card-body">
                    <h3 className='text-light'>Messages</h3>
                < FontAwesomeIcon icon={faMessage} style={{fontSize:"8rem",color:"#ff5252"}}/>
                    <p class="card-text">{usermessage.length}</p>
 
                </div>
            </div>
           </div>
            </div>
        </div>
           </div>
            <Footer />
        </>
    )
    }
export default Admin_Home;