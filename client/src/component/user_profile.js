import React,{ useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function User_Profile() {
  const [myData,setmyData] = useState([]);
  const emailid = localStorage.getItem('email');
  useEffect(()=>{
    axios.post('/api/post/getpostdata',{emailid}).then(res=>{
      
      setmyData(res.data);
    }).catch(err=>{
        console.log(err)
    })
},[])
    const navigate = useNavigate();
    
    function logout(){
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
                        <li><a><Link to='/userdashboard'>Home</Link></a></li>
                        <li><a><Link to='/exercise'>Exercise</Link></a></li>
                        <li><a><Link to='/user_profile'>Profile</Link></a></li>
                        <li><a><button onClick={logout} style={{border:'none',background:'none',color:'white'}}>Logout</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {
          myData.map((post)=>{
return(
         
        <div class="container">
                        <div class="row d-flex justify-content-center" style={{marginBottom:"10rem"}}>
                            <div class="col-md-10 mt-5 pt-5">
                                <div class="row z-depth-3">
                                  <div class="col-sm-4 bg-info ronded-left">
                                      <div class="card-block text-center text-white">

                                        < FontAwesomeIcon icon={faUserTie} style={{fontSize:"8rem",marginTop:"1rem"}}/>
                                          <h2 class="font-weight-bold mt-4">{post.username}</h2>
                                        </div>
                                  </div>
                                  <div class="col-sm-8 bg-white rounded-right">
                                      <h3 class="mt-3 text-center font-weight-bold">Information</h3>
                                      <center><hr class="badge-primary mt-0 w-25"></hr></center>
                                      <div class="row">
                                          <div class="col-sm-6">
                                              <p class="font-weight-bold">Email:</p>
                                              <h6 class="text-muted">{post.email}</h6>
                                          </div>
                                          <div class="col-sm-6">
                                            <p class="font-weight-bold">Password:</p>
                                            <h6 class="text-muted">{post.password}</h6>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-sm-6">
                                            <p class="font-weight-bold">Username:</p>
                                            <h6 class="text-muted">{post.username}</h6>
                                        </div>
                                        <div class="col-sm-6">
                                          <p class="font-weight-bold">Contact:</p>
                                          <h6 class="text-muted">{post.phone}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div> 
           ) })
                    }
    <Footer/>
    </>
  )
}
export default User_Profile;