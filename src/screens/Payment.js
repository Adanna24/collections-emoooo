import React, { useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
//import axios from '../../node_modules/axios/index';
import { useGlobal } from '../Hooks/Content';
import '../styles/order.css';
//import { PayPalButton } from 'react-paypal-button-v2'
import Steps from '../components/Steps';

function Payment() {
  const {id} = useParams();
  const {fetchoderbackend,user,backendorder} = useGlobal();
  const navigate = useNavigate();
  const toprice = (num) => Number(num.toFixed(2));



  useEffect(() => {
    fetchoderbackend(id)
  }, [fetchoderbackend, id]);

  if(backendorder?.orderdetails?.paymentmethod === "Pay on Delivery") {
    navigate('/thanks')
 }

  if(!user){
    navigate('/login')
  }


  if(!id || id === undefined){
    return(
      <div className='cart-sect'>
       <div className='container'>
          <h2>Cart</h2>
          <div className='line'></div>
          <article className='empty-cart'>
             <div className='empty-cart-hold'>
                 <img src='https://www.kindpng.com/picc/m/45-456866_shopping-cart-png-image-empty-shopping-cart-png.png' alt='cart-empty'/>
             </div>
             <div className='empty-cart-details'>
                <h4>ORDER NOT FOUND</h4>
                <p>Looks like your the order doesnt exist Go ahead and explore our  product categories</p>
                <button><Link to='/menu'>BACK TO SHOPPING</Link></button>
             </div>
          </article>
       </div>
    </div>        
    )
  }

 const {Total, amount, cartItems, delivery, orderdetails, tax, total} = backendorder;

  return (
    <section className='order-summary'>
    <div className='container'>
      <Steps step1 step2 step3></Steps>
      <h2>{`ORDER REVIEW FOR ${id}`}</h2>
      <div className='line'></div>
      <main className='order-object'>
         <div className='order-object-section'>
             <div className='card-collection-1'>
                 {
                   cartItems && cartItems.map((n, index) => {
                     return(
                      <div key={index}>

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
                           </article>

                           <article className='mobile-cart' key={n?._id}>
                        <div className='mobile-img'>
                            <img src={n?.img} alt={n?.name}/>
                        </div>
                        <div className='mobile-cart-info'>
                            <div className='dd'>
                                 <h6>{n?.name}</h6>
                            </div>
                            <div className='dd'>
                               <h6>#{n?.price}</h6>
                                <p className='quan'>QTY: {n?.quantity}</p>
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
                <strong>Name: <p>{orderdetails?.fullname}</p></strong><br></br>
                <strong>Name: <p>{orderdetails?.number}</p></strong><br></br>
                <strong>Address: <p>{orderdetails?.address}</p></strong><br></br>
                <strong>Payment Method: <p>{orderdetails?.paymentmethod}</p></strong><br></br>
                <strong>City: <p> {orderdetails?.city}</p></strong><br></br>
                <strong>State: <p> {orderdetails?.state}</p></strong><br></br>
                <strong>Country: <p>{orderdetails?.country} </p></strong>
             </div>
         </div>
         <div className='calculate'>
            <h4>TOTAL SUMMARY</h4>
          <div className='oiy'>
            <div>
               <h5>NO. ITEMS:</h5>
               {
                amount && <p><strong>{amount}</strong></p>
               }
            </div>
            <div>
               <h5>Price:</h5>
               {
                total && <p><strong>#{toprice(total)}.00</strong></p>
               }
            </div>
            <div>
               <h5>Tax Cost:</h5>
                {
                  tax &&  <p><strong>#{toprice(tax)}.00</strong></p>
                }
            </div>
            <div>
               <h5>Delivery Cost:</h5>
                {
                  delivery &&   <p><strong>#{toprice(delivery)}.00</strong></p>
                }
            </div>
            <div>
               <h5>Total Cost:</h5>
              {
                Total &&  <p><strong>#{toprice(Total)}.00</strong></p>
              }
            </div>
          </div>
          <div className='ih'>
          <Link to='/'><button className='js'>PAY LATER</button></Link>
            <Link to={`/mini/${id}`}><button className='check-out'>PAY NOW</button></Link>
          </div>
       </div>
      </main>
    </div>
 </section>
  )
}

export default Payment;