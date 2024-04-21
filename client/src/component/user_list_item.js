import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function User_list_Item({post})
{
    function deletepost(postid)
    {
        if(window.confirm("DO you want to delete"))
        {
            axios.post('api/post/deletepost',{postid:postid}).then(res=>{
                //console.log(res.data)
                alert(res.data)
                window.location.reload(true);
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    return(
        <>
        <table class="table table-bordered table-dark table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email Id</th>
      <th>Contact Number</th>
      <th>Address</th>
      <th colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
  <tr>
        <td style={{color:"#1dd1a1"}}>{post.username}</td>
        <td style={{color:"#0abde3"}}>{post.email}</td>
        <td style={{color:"#feca57"}}>{post.phone}</td>
        <td style={{color:"#1dd1a1"}}>{post.address}</td>
        <td style={{color:"#c44569"}}><a ><Link to={`/admin_userdata_edit/${post.postid}`} className='btn btn-warning'>Update</Link></a></td>
        <td><button className='btn btn-danger'onClick={()=>{deletepost(post.postid)}}>Delete</button></td>
        </tr>
  </tbody>
</table>
        
        </>
    )
}
export default User_list_Item;