import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Footer from './footer'
function Admin_Login()
{
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate=useNavigate()

    function login()
    {
        var userlogin={
            email:email,
            password:password
        }
        if(email=="admin123@gmail.com" && password=="123456")
        {
            alert("Login Successfull");
            localStorage.setItem('email',userlogin.email)
            localStorage.setItem('name',"Admin")
            localStorage.setItem('gender',"Male")
            localStorage.setItem('age',"44")
           navigate('/admin_home');
        }
        else{
       alert("Login Failed");
       navigate('/adminlogin')
    }

    }
    return(<div>
        <div id="logincontent">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 py-3" id='logindiv'>
                        <h2 className='mb-5'>Admin Login</h2>
                        <input type="text" placeholder='Email id' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br />
                        <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br />
                        <button className='btn btn-primary mb-3 form-control' onClick={login}>Login</button><br />
                    </div>
                </div>
            </div>
        </div>
       
        <Footer/>
    </div>)
}
export default Admin_Login