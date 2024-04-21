import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './footer';
import { useNavigate } from "react-router-dom";
function User_Message(){

    let navigate = useNavigate();
const[userdata,setuserdata]=useState([])
    useEffect(()=>{
        axios.get('/api/messagepost/getmessage').then(res=>{
           console.log(res.data[0]);
           setuserdata(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
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
             <div className="container py-3">
                <h2><b>ALL MESSAGES</b></h2>
                <div className="row justify-content-center"style={{marginBottom:'5rem',marginTop:'3rem'}}>
                    <div className="col-md-8">
                    <table class="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
   {
    userdata.map((post)=>{
        return(
            <tr>
            <td style={{color:"#1abc9c"}}>{post.firstname}</td>
            <td style={{color:"#2980b9"}}>{post.lastname}</td>
            <td style={{color:"#d35400"}}>{post.email}</td>
            <td  style={{color:"yellow"}}>{post.message}</td>
          </tr>
        )
    })
   }
  </tbody>
</table>
<a href="https://mail.google.com" className='btn btn-success'>Reply</a>
                    </div>
                </div>
             </div>
            <Footer />
        </>
    )
    }
export default User_Message;