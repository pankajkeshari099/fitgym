import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import User_list_Item from './user_list_item';

function User_Details() {
    let navigate = useNavigate();
    const[userdata,setuserdata]=useState([]);
    useEffect(()=>{
        axios.get('/api/post/getdata').then(res=>{
           console.log(res.data[0]);
            setuserdata(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

    const postlist = userdata.map(post=>{
      return(<div>
        <User_list_Item post={post}/>
      </div>)
    })

 function logout()
 {
  localStorage.clear();
  navigate('/adminlogin');
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
                        <li><a><Link to='/admin_home'>Home</Link></a></li>
                        <li><a><Link to='/user_details'>User Details</Link></a></li>    
                        <li><a><Link to='/user_message'>Message</Link></a></li>                  
                        <li><a><button onClick={logout} style={{border:'none',background:'none',color:'white'}}>Logout</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        &nbsp;
        <div className="container">

  {postlist}
        </div>
    <Footer/>
    </>
  )
}
export default User_Details;