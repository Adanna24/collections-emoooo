import React, { useEffect, useState } from 'react';
import {BiShow, BiHide} from 'react-icons/bi'
import { useGlobal } from '../Hooks/Content';
import {useNavigate, Link} from 'react-router-dom'
import '../styles/login.css'
import Alert from '../components/Alert';
import Loading from '../components/Loading';

function Signin() {
  const {login, showalert, alert, user, error3, loading3 } = useGlobal();
  const [show, setshow] = useState(false);
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const navigate = useNavigate();
  const redirect = -1;
  const [error4, seterror4] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      showalert()
    }, 2000)
    return () => clearTimeout(time)
  }, [showalert, alert])
  
  const handlelogin = (e) => {
    e.preventDefault();
    if(password.trim().length > 1 && email.trim().length > 1){
      login(email, password)
     setemail('')
     setpassword('')
    } else{
      seterror4("CANNOT SUBMIT EMPTY INPUT FIELD")
    }
  }

  useEffect(() => {
    if(user) {
      navigate(redirect === null? '/': redirect);
    }
  }, [user, navigate, redirect]);


  return (
    <section className='login-section show'>
        <div className='container'>
           <h2>LOGIN</h2>
           <div className='line'></div>
           {
            error4 && <Alert type='danger' msg={error4} />
           }
           {
            error3 && <Alert type='danger' msg={error3} />
           }
           {
            alert?.show && <Alert {...alert} />
           }
           {
            loading3 && <Loading/>
           }
           <form className='form-1' onSubmit={handlelogin}>
             <div>
               <label htmlFor='email'>EMAIL ADDRESS</label> <br></br>
               <input 
               type='email' 
               placeholder='email' 
               required 
               onChange={(e) => setemail(e.target.value)}
               id='email'/>
             </div>
             <div>
               <label htmlFor='password'>PASSWORD</label> <br></br>
               {
                show ? <div className='ama'><input type='text' placeholder='password' required  onChange={(e) => setpassword(e.target.value)} id='password'/><BiHide onClick={() => setshow(false)}/></div>:
                <div className='ama'><input type='password' placeholder='password' required onChange={(e) => setpassword(e.target.value)} id='password'/><BiShow onClick={() =>setshow(true)}/></div>
               }
             </div>
             
               <button type='submit'>LOGIN</button>
    
           </form> 
           <div className='new-customer'>
              New Customer?
            <Link to='/signup'><p>Create an Account</p></Link>
          </div>
        </div>
    </section>
  )
}

export default Signin;