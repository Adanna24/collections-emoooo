import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobal } from '../Hooks/Content';
import '../styles/login.css'

function Profile() {
  const [p, setp] = useState(false)
  const { user, profile, userprofile,  updateuserdetails} = useGlobal();
  const navigate = useNavigate();

  useEffect( () => {
      profile(user._id)
  }, [user, profile])

  const [userdetails, setuserdetails] = useState(localStorage.getItem("user-details")? JSON.parse(localStorage.getItem("users-info")):{
    name: userprofile.fullname,
    email:userprofile.email,
    username:userprofile.username,
    password:'',
    confirmpassword: '',
  });

  useEffect(() => {
    localStorage.setItem("user-details", JSON.stringify(userdetails))
  }, [userdetails])

 const handlechange = (e) => {
   const value  = e.target.value;
   setuserdetails({
    ...userdetails,
    [e.target.name]: value,
   });
 }
  const handlesubmit = (e) => {
    e.preventDefault()

    if(userdetails.password !== userdetails.confirmpassword){
      setp('PASSWORD DOES NOT MATCH')
    }
    else {
      updateuserdetails({userid: user._id, ...userdetails })
    }
  }
  if(!user){
     navigate('/')
  }

  return (
    <div>
        <div className='opt'>
          <h2>UPDATE PROFILE</h2>
          <div className='line'></div>
        </div>
       <div>
          {
            
            p? <p>{p}</p>: user?
            <form className='form-1' onSubmit={handlesubmit}>
               <div>
                 <label htmlFor='username'>username</label> <br></br>
                 <input type='text' id='username' value={userdetails.fullname} placeholder='username' name='name' onChange={handlechange}></input>
               </div>
               <div>
                 <label htmlFor='email'>email</label> <br></br>
                 <input type='email' id='email' value={userdetails.email} placeholder='email' name='email' onChange={handlechange}></input>
               </div>
               <div>
                 <label htmlFor='username'>username</label> <br></br>
                 <input type='text' id='username' value={userdetails.username} placeholder='username' name='username' onChange={handlechange}></input>
               </div>
               <div>
                 <label htmlFor='password'>password</label> <br></br>
                 <input type='text' id='password' value={userdetails.password} placeholder='password' name='password' onChange={handlechange}></input>
               </div>
               <div>
                 <label htmlFor='password'>confirm password</label> <br></br>
                 <input type='text' id='password' value={userdetails.confirmpassword} placeholder='password' name='confirmpassword' onChange={handlechange}></input>
               </div>
               <div>
                 <button type='submit' className='btn-1'>SAVE CHANGE</button>
               </div>
            </form>: !user._id? <div>
               <Link to='/signin'>Signin to view your profile</Link>
            </div>:<div> <Link to='/'>back</Link></div>

          }
       </div>
    </div>
  )
}

export default Profile;