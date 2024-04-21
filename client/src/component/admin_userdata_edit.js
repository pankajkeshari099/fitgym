import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer';
import axios from 'axios'
import { useNavigate,useParams } from "react-router-dom";

function Admin_Userdata_Edit() {
    const params = useParams() 
    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[phone,setphone]=useState('')
    const[address,setaddress]=useState('')
    let navigate = useNavigate();

   useEffect(()=>{
    axios.post('/api/post/getuserdata',{postid:params.postid}).then(res=>{
        console.log(res.data[0])
        const postdata = res.data[0]
        setusername(postdata.username)
        setemail(postdata.email)
        setpassword(postdata.password)
        setphone(postdata.phone)
        setaddress(postdata.address)
    }).catch(err=>{
        console.log(err)
    })
   },[])
   function update(){
        var updatedata={
            username:username,
            email:email,
            password:password,
            phone:phone,
            address:address,
            postid:params.postid
        }
        axios.post('/api/post/updatepost',updatedata).then(res=>{
            console.log(res)
            alert(res.data)
            navigate('/user_details')
        }).catch(err=>{
            console.log(err)
        })
   }
 function logout()
 {
  localStorage.clear();
  navigate('/login');
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
                        <li><a><Link to='/admin_upload_video'>Post</Link></a></li>    
                        <li><a><Link to='/user_message'>Message</Link></a></li>                    
                        <li><a><button onClick={logout} style={{border:'none',background:'none',color:'white'}}>Logout</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="registrationcontent">
            <div className="container py-3">
                <div className="row justify-content-center">
                    <h2>USER DETAILS UPDATE</h2>
                    <div className="col-md-6 mt-4">
                    <input type="text" placeholder='Username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/><br />
                    <input type="text" placeholder='Email Id' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br />
                    <input type="text" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br />
                    <input type="text" placeholder='Phone number' className='form-control' value={phone} onChange={(e)=>{setphone(e.target.value)}}/><br />
                    <input type="text" placeholder='Address' className='form-control' value={address} onChange={(e)=>{setaddress(e.target.value)}}/><br />
                    <button className='btn btn-warning' onClick={update}>UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}
export default Admin_Userdata_Edit;