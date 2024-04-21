import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer';

function Home()
{
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
        <div id="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="contentpart">
                        <h2>STRONG MIND STRONG BODY</h2>
                        <p>Shape your body like the way you want it. We will be you, fitness leaders.</p>
                    
                        </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Home;