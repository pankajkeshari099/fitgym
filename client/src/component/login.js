import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Footer from './footer'
function Login()
{
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate=useNavigate()

    async function login(event)
    {
        event.preventDefault();
        
        var userlogin={
            email:email,
            password:password
        }
        try{
            axios.post('/api/post/login',userlogin).then(res=>{
               console.log(res.data)
               const status = res.data;
               if(res.data ===email)
               {
                localStorage.setItem('email',email);
                alert("Login Successfull")
                navigate('/userdashboard')
               }
               else
               {
                alert("Failed");
               }
            }).catch(err=>{
                console.log(err)
            })
        }
        catch{

        }
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
        <div id="logincontent">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" id='logindiv'>
                        <h2>User Login</h2>
                        <input type="text" placeholder='Email id' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br />
                        <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br />
                        <button className='btn btn-primary mb-3 form-control' onClick={login}>Login</button><br />
                        <a ><Link to='/registration'>New Registration</Link></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Login