import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobal } from '../Hooks/Content';
import {FaPlus, FaMinus} from 'react-icons/fa';
//import {FaStar} from 'react-icons/fa'
import '../styles/order.css';


function Order() {
  const {orderdetails, addnumber, removernumber, orders, emptyorder, receive, order, user, cart, total, amount, removeitem} = useGlobal();
  const navigate = useNavigate();
  const tax = 20 * amount;
  const delivery = 320 * cart.length;
  const Total = total + tax + delivery;
  const toprice = (num) => Number(num.toFixed(2));

  const data = {
    cartItems: cart,
    orderdetails:orderdetails,
    Total: Total,
    total: total,
    amount: amount,
    tax: tax,
    delivery: delivery,
    user: user
  }

  const handleorder = () => {
         order(data)
  } 

  useEffect( () => {
    if(receive){
      emptyorder()
      navigate(`/payment/${orders._id}`)
    }
  }, [receive, navigate, emptyorder,orders])



  if(!user){
    navigate('/login')
  }

  if(cart.length === 0){
    navigate('/')
  }

  return (
   orderdetails === null?   <div className='cart-sect'>
   <div className='container'>
      <h2>EMPTY ORDER</h2>
      <div className='line'></div>
      <article className='empty-cart'>
         <div className='empty-cart-hold'>
             <img src='https://www.kindpng.com/picc/m/45-456866_shopping-cart-png-image-empty-shopping-cart-png.png' alt='cart-empty'/>
         </div>
         <div className='empty-cart-details'>
            <h4>YOUR CART IS EMPTY</h4>
            <p>Looks like you have not made any purchase yet Go ahead and explore our  product categories</p>
            <button><Link to='/menu'>START SHOPPING</Link></button>
         </div>
      </article>
   </div>
</div>:
   <section className='order-summary'>
   <div className='container'>
     <h2>Order Summay</h2>
     <div className='line'></div>
     <main className='order-object'>
        <div className='order-object-section'>
            <div className='card-collection-1'>
                {
                  cart && cart.map((n, index) => {
                    return(
                     <div key={index}>

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
                                 </div>
                              </div>
                              <div className='x'>
                                
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
            <div className='order-object-info'>
               <h4>Order Info</h4>
               <strong>Name: <p>{orderdetails.fullname}</p></strong><br></br>
               <strong>Phone No: <p>{orderdetails.number}</p></strong><br></br>
               <strong>Address: <p>{orderdetails.address}</p></strong><br></br>
               <strong>Payment Method: <p>{orderdetails.paymentmethod}</p></strong><br></br>
               <strong>City: <p> {orderdetails.city}</p></strong><br></br>
               <strong>State: <p> {orderdetails.state}</p></strong><br></br>
               <strong>Country: <p>{orderdetails.country} </p></strong>
            </div>
        </div>
        <div className='calculate'>
           <h4>TOTAL SUMMARY</h4>
         <div className='oiy'>
           <div>
              <h5>NO. ITEMS:</h5>
              <p><strong>{amount}</strong></p>
           </div>
           <div>
              <h5>Price:</h5>
              <p><strong>#{toprice(total)}.00</strong></p>
           </div>
           <div>
              <h5>Tax Cost:</h5>
              <p><strong>#{toprice(tax)}.00</strong></p>
           </div>
           <div>
              <h5>Delivery Cost:</h5>
              <p><strong>#{toprice(delivery)}.00</strong></p>
           </div>
           <div>
              <h5>Total Cost:</h5>
              <p><strong>#{toprice(Total)}.00</strong></p>
           </div>
         </div>
         <div className='ih'>
            <Link to='/delivery'><button className='js'>CHANGE</button> </Link> 
             <button className='check-out' onClick={handleorder}>CONFIRM ORDER</button>
         </div>
      </div>
     </main>
   </div>
</section>
  )
}

export default Order;