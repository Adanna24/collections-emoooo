import React from 'react';
import {Link} from 'react-router-dom';
import { useGlobal } from '../Hooks/Content';
import '../styles/thanks.css';
import Steps from '../components/Steps';

function Thanks() {
  const { backendorder } = useGlobal();
  return (
    <div className='thanks'>
       <div className='container'>
       <Steps step1 step2 step3 step4></Steps>
          <h2>Thank YOU</h2>
          <div className='line'></div>
           <div className='thnks-card'>
              <div className='thnks-img'><img src='https://www.pngitem.com/pimgs/m/384-3845333_thank-you-png-image-thank-you-in-orange.png' alt='thanks'/></div>
              <div className='thnks-info'>
                 <p>Thank You So Much FOR Choosing Us</p>
                 <p>Your Payment  {backendorder?._id} Was Successful  and it was paid  <h4>{backendorder?.paidAt}</h4></p>
              </div>
              <button className='thanks-btn'><Link to='/'>Continue Shopping</Link></button>
           </div>
       </div>
    </div>
  )
}

export default Thanks;