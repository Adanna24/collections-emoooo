import React from 'react'
import Aboout from '../components/Aboout';
import Customer from '../components/Customer';
import Middle from '../components/Middle';
import Remain from '../components/Remain';
import Serve from '../components/Serve';
import Slide from '../components/Slide';
import '../styles/service.css';

function Services() {
  return (
    <div className='services'>
       <div className='contain'>
         <Slide/>
         <div className='container'>
           <Serve/>
         </div>
         <Middle/>
         <div className='container'>
           <h2>About Us</h2>
           <div className='line'></div>
           <Aboout/>
         </div>
          <div className='container'>
            <Remain />
          </div>
          <div className='container'>
             <Customer/>
          </div>
        </div>
    </div>
  )
}

export default Services;