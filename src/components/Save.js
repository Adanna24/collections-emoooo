import React, { useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { useGlobal } from '../Hooks/Content';
import {FaShoppingBasket} from 'react-icons/fa'
import Alert from './Alert';

function Save() {
 const {user, showalert, alert, saved, AddtoCart, removeitem2} = useGlobal();
  const navigate = useNavigate();
  useEffect(() => {
    const time = setTimeout(() => {
      showalert()
    }, 2000)
    return () => clearTimeout(time)
  }, [showalert, alert])
  

 if(!user){
     navigate('/login')
 }
  
  return (
    saved?.length >= 1? 
    <div className='saved'>
       
       <div className='opt lkj'>
          <h2>SAVED PRODUCTS</h2>
          <div className='line'></div>
        </div>
         <main>
          {
            alert?.show && <Alert {...alert} />
          }
           {
            saved && saved?.map((n, index) => {
               return <div key={index}>

                          <article key={index} className='corts'>
                              <div className='img-cart-hold'>
                                 <img src={n?.img} alt='products'></img>
                              </div>
                              <div className='ggg'>
                                 <div className='ghh'>
                                       <h4>{n?.name}</h4>
                                       <p className='pop'>#{n?.price}</p>
                                 </div>
                              </div>
                              <div className='x'>
                              <p>QTY: {n?.quantity}</p>
                              </div>
                              <button onClick={() => AddtoCart(n)} className='x'><FaShoppingBasket/></button>
                              <button className='x' onClick={() => removeitem2(n._id)}> X</button>
                           </article>

                           <article className='mobile-cart' key={n?._id}>
                        <div className='mobile-img'>
                            <img src={n?.img} alt={n?.name}/>
                        </div>
                        <div className='mobile-cart-info'>
                            <div className='dd'>
                                 <h6>{n?.name}</h6>
                                 <h6>#{n?.price}</h6>
                            </div>
                            <div className='dd'>
                                <p className='quan'>QTY: {n?.quantity}</p>
                                <button onClick={() => AddtoCart(n)} className='x'><FaShoppingBasket/></button>
                            <button className='x' onClick={() => removeitem2(n._id)}> X</button>
                            </div>
                        </div>
                              </article>
                     </div>
            })
           }
         </main>
    </div>:
       <article className='empty-cart'>
          <div className='empty-cart-hold'>
              <img src='https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=640&height=483&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FPBwXUmDBhHdM012zADWrWA%2Flarge.jpg' alt='cart-empty'/>
          </div>
          <div className='empty-cart-details'>
             <h4>NO PRODUCT SAVED YET</h4>
             <p>Looks like you have not saved any product yet. Go ahead and explore our product categories</p>
             <button><Link to='/'>START SHOPPING</Link></button>
          </div>
       </article>

  )
}

export default Save;