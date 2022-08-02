import React from 'react';
import '../styles/steps.css';

function Steps(props) {
  return (
    <div className='steps'>
       <div className={props.step1? ' active':''}><h4>SIGN IN</h4></div>
       <div className={props.step2? 'active':''}><h4>DELIVERY DETAILS</h4></div>
       <div className={props.step3? 'active':''}><h4>CHECK OUT</h4></div>
       <div className={props.step4? 'active':''}><h4>PAYMENT SUCCESSFUL</h4></div>
    </div>
  )
}

export default Steps;