import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer'
import axios from 'axios'
import uniqid from 'uniqid'
function Registration()
{
    const[username,setusername]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const[phone,setphone]=useState()
    const[address,setaddress]=useState()

        function submit()
        {
            var user={
                username:username,
                email:email,
                password:password,
                phone:phone,
                address:address,
                postid: uniqid()
            }
         axios.post('/api/post/addpost',user).then(res=>{
            alert(res.data)
         }).catch(err=>{
            console.log(err)
         })
        }

    return(<div>
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
        <div id="registrationcontent">
            <div className="container">
                <div className="row justify-content-center">
                    <h2>REGISTRATION</h2>
                    <div className="col-md-6 mt-4">
                    <input type="text" placeholder='Username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/><br />
                    <input type="text" placeholder='Email Id' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br />
                    <input type="text" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br />
                    <input type="text" placeholder='Phone number' className='form-control' value={phone} onChange={(e)=>{setphone(e.target.value)}}/><br />
                    <input type="text" placeholder='Address' className='form-control' value={address} onChange={(e)=>{setaddress(e.target.value)}}/><br />
                    <button className='btn btn-success' onClick={submit}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
    </div>)
}
export default Registration