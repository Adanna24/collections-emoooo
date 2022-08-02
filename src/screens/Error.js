import React from 'react'
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className='cart-sect'>
       <div className='container'>
          <h2>Error</h2>
          <div className='line'></div>
          <article className='empty-cart'>
             <div className='empty-cart-hold'>
                 <img src='https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png' alt='cart-empty'/>
             </div>
             <div className='empty-cart-details'>
                <h4>404 PAGE NOT FOUND</h4>
                <p>We are Sorry the page your are looking for cannot be found please go back to home page</p>
                <button><Link to='/'>RETURN BACK</Link></button>
             </div>
          </article>
       </div>
    </div>        
  )
}

export default Error;