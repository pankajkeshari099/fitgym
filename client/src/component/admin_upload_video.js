import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Admin_Upload_Video(){

    let navigate = useNavigate();
    const [title,settitle] = useState()
    const [description,setdescription] = useState()
    const [video,setvideo] = useState()
    function submit()
    {
        var user={
            title:title,
            description:description,
            video:video
        }
        axios.post('/api/postvideo/addvideo',user).then(res=>{
            alert(res.data)
         }).catch(err=>{
            console.log(err)
         })
    }
    function logout() {
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
                                <li><a><button onClick={logout} style={{ border: 'none', background: 'none', color: 'white' }}>Logout</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
             <div className="container py-3">
                <h2><b>Post New Exercise Video</b></h2>
                <div className="row justify-content-center"style={{marginBottom:'5rem',marginTop:'3rem'}}>
                    <div className="col-md-8">
                    <input type="text" placeholder='Title'className='form-control' value={title} onChange={(e)=>{settitle(e.target.value)}}/><br />
                    <textarea name="" id="" cols="30" rows="5" placeholder='Descriptions' className='form-control'value={description} onChange={(e)=>{setdescription(e.target.value)}}></textarea><br />
                    <input type="file" className='form-control' accept='.mp4, .mkv'value={video} onChange={(e)=>{setvideo(e.target.value)}}/><br />
                    <button className='btn btn-primary form-control' onClick={submit}>Submit</button>
                    </div>
                </div>
             </div>
            <Footer />
        </>
    )
    }
export default Admin_Upload_Video;