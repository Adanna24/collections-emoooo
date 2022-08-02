import React from 'react'
import '../styles/service.css';
import card from '../Hooks/Card'

function Serve() {
  return (
    <div className='serve'>
       <h2>What Makes Us Special</h2>
       <div className='line'></div>
       <div className='seve-collect'>
       {
        card && card.map((n, index) => {
          return <article key={index}>
             <img src={n?.img} alt={n?.text}></img>
             <div>
               <h4>{n?.text}</h4>
               <p><small>{n?.sm}</small></p>
             </div>
          </article>
        })
       }
       </div>
    </div>
  )
}

export default Serve;