import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Footer from './footer'
import uniqid from 'uniqid'
function Contact()
{
    const [firstname,setfirstname]=useState()
    const [lastname,setlastname]=useState()
    const [email,setemail]=useState()
    const [message,setmessage]=useState()
 function send()
 {
    var user={
        firstname:firstname,
        lastname:lastname,
        email:email,
        message:message,
        postid: uniqid()
    }
    axios.post('/api/messagepost/message',user).then(res=>{
        alert(res.data)
        window.location.reload(true);
     }).catch(err=>{
        console.log(err)
     })
 }
    return(<div>
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 id='heading'>FIT GYM</h2>
                    </div>
                    <div className="col-md-4" id='menu'>
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
        <div className="container">
            <div id="contact" style={{margin:"2rem", backgroundColor:'#bdc3c7',padding:"2rem",borderRadius:"25px"}}>
                           <div className="row justify-content-center">
                    <div className="col-md-5">
                    <h2>Contact Us</h2><br />
                        <div className="row" >
                            <div className="col">
                                <input type="text" placeholder='First Name' className='form-control'value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/>
                            </div>
                            <div className="col">
                            <input type="text" placeholder='Last Name' className='form-control'value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <input type="text" className='form-control' placeholder='Email Id'value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <textarea cols="30" rows="5" className='form-control' placeholder='Message'value={message} onChange={(e)=>{setmessage(e.target.value)}}></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button className='btn btn-success form-control' onClick={send}>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div id="contact_sub">
                    <h2>Lets Get In Touch</h2>
                    <br /><br />
                    <p><span><FontAwesomeIcon icon={faLocationDot} style={{fontSize:"2rem",color:"#40739e"}}/></span> <b>Address:</b> Greater Noida, Uttar Pradesh</p><br />
                    <p><span><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"2rem",color:"#40739e"}}/></span> <b>Email Id:</b> pankajkeshari099@gmail.com,
                    <br />
                    mauryapriya0018@gmail.com,<br />py151419@gmail.com
                    </p>  
                    <br />
                    <p><span><FontAwesomeIcon icon={faPhone} style={{fontSize:"2rem",color:"#40739e"}}/></span> Phone:6307217700</p>                    </div>    
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Contact