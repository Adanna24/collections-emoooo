import React, { useEffect} from 'react'
import { useGlobal } from '../Hooks/Content';
//import Loading from './Loading';
import {Link} from 'react-router-dom';

function History() {
  const {getmyorders, myorders} = useGlobal();

  useEffect(() => {
    getmyorders()
  },[getmyorders]);


  return (
    myorders?.length >= 1?
   <div>
             <div className='opt odfdf'>
          <h2>ORDER HISTORY</h2>
          <div className='line'></div>
        </div>
       <table className='table'>
    <thead>
      <tr>
        <th>SN</th>
        <th>ID</th>
        <th>DATE</th>
        <th>TOTAL</th>
        <th>PAID</th>
        <th>DELIVERED</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {
        myorders && myorders?.map((n, index) => {
         return <tr key={n._id}>
               <td>{index + 1}</td>
               <td>{n?._id}</td>
               <td><small>{n?.createdAt.substring(0, 10)}</small></td>
               <td>#{n?.Total}.00</td>
               <td>{n.isPaid? <h4 className='alert alert-successinfo'>{n.paidAt.substring(0, 10)}</h4>:'NO'}</td>
               <td>{n.isDelivered? n.deliveredAt.substring(0, 10):'NO'}</td>
               <td>
                  <Link to={`/mini/${n._id}`} className='check-out'>Details</Link>
               </td>
         </tr>
       })
      }
    </tbody>
 </table>
     <div className='mobile-table'>
       {
        myorders && myorders?.map((n, index) => {
           return <div key={index} className='mob-tab'>
              <h4>ID: {n?._id}</h4>
              <h4>TOTAL: <p>#{n?.Total}.00</p></h4>
              
              {
                n.isPaid? <h4>Paid: <p>YES AT {n.paidAt.substring(0, 10)}</p></h4>:<h4>PAID: <p>NO</p></h4>
              }
                            
                            {
                n.isDelivered? <p className=''><h4>Delivered: {n.deliveredAt.substring(0, 10)}</h4></p>:<h4>Delivered: <p>NO</p></h4>
              }
              <h4 className='jdjd'>
              <Link to={`/mini/${n._id}`} className='check-out'>Details</Link>
                  <p>{index + 1}</p>
              </h4>
           </div>
        })
       }
     </div>
   </div>:
    <article className='empty-cart'>
    <div className='empty-cart-hold'>
        <img src='https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=640&height=483&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FPBwXUmDBhHdM012zADWrWA%2Flarge.jpg' alt='cart-empty'/>
    </div>
    <div className='empty-cart-details'>
       <h4>NO ORDERS YET</h4>
       <p>Looks like you have not made  any order yet. Go ahead and explore our product categories</p>
       <button><Link to='/'>START SHOPPING</Link></button>
    </div>
 </article>
  )
}

export default History;