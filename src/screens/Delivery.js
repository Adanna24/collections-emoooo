import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import Steps from '../components/Steps';
import { useGlobal } from '../Hooks/Content';
import '../styles/delivery.css';

function Delivery() {
  const {user, getorder} = useGlobal();
  const [fullname, setfullname] = useState('')
  const [number, setnumber] = useState('')
  const [address, setaddress] = useState('')
  const [city, setcity] = useState('')
  const [state, setstate] = useState('')
  const [country, setcountry] = useState('')
  const [paymentmethod, setpaymentmethod] = useState('Paypal');
  const navigate = useNavigate();
  const [error6, seterror6] = useState(false);
  
  const handlesubmit = (e) => {
     e.preventDefault();
     if( fullname.trim().length > 1 )
     {
      getorder({fullname, number, address, paymentmethod, city, state, country})
      navigate('/order')
     }
     else{
       seterror6("CANNOT SUBMIT EMPTY INPUT");
     }
  }

  if(!user){
     navigate('/login')
  }

  return (
    <div className='delivery'>
       <div className='container'>
          <Steps step1 step2></Steps>
          <h2>DELIVERY DETAILS</h2>
          <div className='line'></div>
          {
            error6 && <Alert  type='danger' msg={error6} />
          }
         <div className=' oyu container'>
         <form className='form-1' onSubmit={handlesubmit}>
              <div>
                <label htmlFor='full-name'>FULL NAME</label> <br></br>
                <input 
                type='text' 
                placeholder='full name' 
                required 
                onChange={(e) => setfullname(e.target.value)}
                id='full-name'/>
              </div>
              <div>
                <label htmlFor='phone-no'>PHONE NUMBER</label> <br></br>
                <input 
                type='number' 
                placeholder='phone number' 
                required 
                onChange={(e) => setnumber(e.target.value)}
                id='phone-no'/>
              </div>
              <div>
                <label htmlFor='address'>ADDRESS</label> <br></br>
                <input 
                type='text' 
                placeholder='address' 
                required 
                onChange={(e) => setaddress(e.target.value)}
                id='address'/>
              </div>
              <div>
                <label htmlFor='city'>CITY</label> <br></br>
                <input 
                type='text' 
                placeholder='city' 
                required 
                onChange={(e) => setcity(e.target.value)}
                id='city'/>
              </div>
              <div>
                <label htmlFor='state'>STATE</label> <br></br>
                <input 
                type='text' 
                placeholder='state' 
                required 
                onChange={(e) => setstate(e.target.value)}
                id='state'/>
              </div>
              <div>
                <label htmlFor='country'>COUNTRY</label> <br></br>
                <input 
                type='text' 
                placeholder='country' 
                required 
                onChange={(e) => setcountry(e.target.value)}
                id='country'/>
              </div>

              
             <div>
             <label htmlFor='payment-method'>PAYMENT METHOD</label>
                <div className='radio' id='payment-method'>
                      <div>
                          <input 
                          type='radio' 
                          id='paypal' 
                          name='payment'
                          value='paypal'
                          required 
                          checked
                          onChange={e => setpaymentmethod(e.target.value)}
                      ></input>
                        <label htmlFor='paypal'>paypal</label>
                      </div>
                      <div>
                        <input 
                            type='radio' 
                            id='cash' 
                            name='payment'
                            value='Pay on Delivery'
                            required 
                            onChange={e => setpaymentmethod(e.target.value)}
                        ></input>
                        <label htmlFor='cash'>Pay Cash</label>
                      </div>
              </div>
             </div>
              
              <button>CONTINUE</button>
          </form>
         </div>
       </div>
    </div>
  )
}

export default Delivery