import React, { useEffect, useState } from 'react';
import {BiShow, BiHide} from 'react-icons/bi'
import { useGlobal } from '../Hooks/Content';
import {useNavigate, Link} from 'react-router-dom'
import '../styles/login.css'
import Alert from '../components/Alert';

function Signin() {
  const {error3, newuser, user, showalert, alert } = useGlobal();
  const [show, setshow] = useState(false);
  const [fullname, setfullname] = useState('')
  const [username, setusername] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [dial, setdial] = useState(false);
  const navigate = useNavigate();
  const redirect = -1;
  const [error4, seterror4] = useState(false)
  
  useEffect(() => {
    const time = setTimeout(() => {
      showalert()
    }, 2000)
    return () => clearTimeout(time)
  }, [showalert, alert])
  

  const handleregister = (e) => {
    e.preventDefault();
    if(password === confirmpassword){
      if( fullname.trim().length && email.trim().length && username.trim().length && confirmpassword.trim().length && password.trim().length)
      {
        newuser(fullname, email, username, password)
        setfullname('')
        setpassword('')
        setconfirmpassword('')
        setemail('')
        setusername('')

      }else{
        setdial('CANNOT SUBMIT EMPTY INPUT')
      }
    }else{
      seterror4("PASSWORD AND CONFIRM PASSWORD DO NOT MATCH")
    }

  }
 
  useEffect(() => {
    if(user) {
      navigate(redirect === null? '/': redirect);
    }
  }, [user, navigate, redirect])

  
  return (
    <section className='login-section show'>
        <div className='container'>
           <h2>CREATE AN ACCOUNT</h2>
           <div className='line'></div>
           {
            error4 && <Alert type='danger' msg={error4} />
           }
           {
            error3 && <Alert type='danger' msg={error3} />
           }
           {
            dial && <Alert type='danger' msg={dial} />
           }
           {
            alert?.show && <Alert {...alert} />
           }
           <form className='form-1' onSubmit={handleregister}>
              <div>
               <label htmlFor='full-name'> FULL NAME</label> <br></br>
               <input 
               type='text' 
               placeholder='full name' 
               required 
               onChange={(e) => setfullname(e.target.value)}
               id='full-name'/>
             </div>

             <div>
               <label htmlFor='email'>EMAIL ADDRESS</label> <br></br>
               <input 
               type='email' 
               placeholder='email address' 
               required 
               onChange={(e) => setemail(e.target.value)}
               id='email'/>
             </div>

             <div>
               <label htmlFor='username'>USER NAME</label> <br></br>
               <input 
               type='text' 
               placeholder='user name' 
               required 
               onChange={(e) => setusername(e.target.value)}
               id='username'/>
             </div>
             
             <div>
               <label htmlFor='password'>PASSWORD</label> <br></br>
               {
                show ? <div className='ama'><input type='text' placeholder='password' required  onChange={(e) => setpassword(e.target.value)} id='password'/><BiHide onClick={() => setshow(false)}/></div>:
                <div className='ama'><input type='password' placeholder='password' required onChange={(e) => setpassword(e.target.value)} id='password'/><BiShow onClick={() =>setshow(true)}/></div>
               }
             </div>
             <div>
               <label htmlFor='confirm-password'>CONFIRM PASSWORD</label> <br></br>
               {
                show ? <div className='ama'><input type='text' placeholder='confirm-password' required  onChange={(e) => setconfirmpassword(e.target.value)} id='confirm-password'/><BiHide onClick={() => setshow(false)}/></div>:
                <div className='ama'><input type='password' placeholder='confirm-password' required onChange={(e) => setconfirmpassword(e.target.value)} id='confirm-password'/><BiShow onClick={() =>setshow(true)}/></div>
               }
             </div>
             
               <button type='submit'>SIGN UP</button>
    
           </form> 
           <div className='new-customer'>
              Already Have An Account?
            <Link to='/signin'><p>Sign In</p></Link>
          </div>
        </div>
    </section>
  )
}

export default Signin;