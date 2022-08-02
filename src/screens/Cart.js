import React, { useEffect } from 'react'
import { useGlobal } from '../Hooks/Content';
import {Link} from 'react-router-dom';
import {FaPlus, FaMinus} from 'react-icons/fa';
import Alert from '../components/Alert';
//import {useNavigate} from 'react-router-dom'

function Cart() {
  const {cart, alert, showalert, emptycart, removeitem,addnumber, user, removernumber,total,amount} = useGlobal();
  const tax = 20 * amount;
  const delivery = 320 * cart.length;
  //const navigate = useNavigate();
  //const redirect = -1;
  useEffect(() => {
   const time = setTimeout(() => {
     showalert()
   }, 2000)
   return () => clearTimeout(time)
 }, [showalert])
 
  return (
    cart.length >= 1? 
    <main className='cart-sect'>
       <div className='container'>
          <h2>Cart Items</h2>
          {
              alert?.show && <Alert {...alert} />
          }
         <div className='whole-cat'>
          <div className='cart-collection'>
            {
               cart && cart.map((n, index)=> {
                  return (
                     <div key={index} >
                        <article key={index} className='corts'>
                        <div className='img-cart-hold'>
                            <img src={n?.img} alt='products'></img>
                        </div>
                        <div className='ggg'>
                            <div className='ghh'>
                                <h4>{n?.name}</h4>
                                <div className='kk'>
                                   <div onClick={() => addnumber(n._id)}><FaPlus/></div>
                                   <p>{n?.quantity}</p>
                                   <div onClick={() => removernumber(n._id)}><FaMinus/></div>
                                </div>
                                <p className='pop'>#{n?.price}</p>
                                <div className='x'>
                            <p onClick={() => removeitem(n._id)}>X</p>
                        </div>
                            </div>
                            
                        </div>
                        
                     </article>
                     <article className='mobile-cart' key={n?._id}>
                        <div className='mobile-img'>
                            <img src={n?.img} alt={n?.name}/>
                        </div>
                        <div className='mobile-cart-info'>
                            <div className='dd'>
                                 <h6>{n?.name}</h6>
                                 <div onClick={() => removernumber(n._id)}><FaMinus/></div>
                            </div>
                            <div className='dd'>
                               <h6>#{n?.price}</h6>
                                <p className='quan'>{n?.quantity}</p>
                            </div>
                            <div className='dd'>
                               <p className='del' onClick={() => removeitem(n._id)}>DELETE</p>
                               <div onClick={() => addnumber(n._id)}><FaPlus/></div>
                            </div>
                        </div>
                     </article>
                     </div>
                  )
               })
            }
          </div>
          <div className='calculate'>
               <h4>Cart Summay</h4>
             <div className='oiy'>
               <div>
                  <h5>NO. ITEMS:</h5>
                  <p><strong>{amount}</strong></p>
               </div>
               <div>
                  <h5>Price:</h5>
                  <p><strong>#{total}.00</strong></p>
               </div>
               <div>
                  <h5>Tax Cost:</h5>
                  <p><strong>#{tax}.00</strong></p>
               </div>
               <div>
                  <h5>Delivery Cost:</h5>
                  <p><strong>#{delivery}.00</strong></p>
               </div>
             </div>
             <div className='ih'>
                 <button className='js' onClick={emptycart}>Empty Cart</button>
                 <Link to={ user? '/delivery':'/login'}><button className='check-out'>CONTINUE</button></Link>
             </div>
          </div>
         </div>
       </div>
    </main>:
    <div className='cart-sect'>
       <div className='container'>
          <h2>Cart</h2>
          <div className='line'></div>
          <article className='empty-cart'>
             <div className='empty-cart-hold'>
                 <img src='https://www.kindpng.com/picc/m/45-456866_shopping-cart-png-image-empty-shopping-cart-png.png' alt='cart-empty'/>
             </div>
             <div className='empty-cart-details'>
                <h4>YOUR CART IS EMPTY</h4>
                <p>Looks like you have not made any purchase yet Go ahead and explore our  product categories</p>
                <button><Link to='/'>START SHOPPING</Link></button>
             </div>
          </article>
       </div>
    </div>        
  )
}

export default Cart;