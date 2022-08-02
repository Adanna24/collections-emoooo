import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaStar, FaShoppingBasket } from 'react-icons/fa';
import { useGlobal } from '../Hooks/Content';
import Alert from './Alert';
//import Loading from './Loading';

function Product() {
  const {fetchproducts, error1,  products, Filter, AddtoCart, saveitem} = useGlobal();

  useEffect( () => {
    fetchproducts();
  }, [fetchproducts])

  const data = products?.filter(n => n.category === Filter);
  return (
    <div>
      {
        error1 && <Alert type='danger' msg={error1} />
      }
        {
           data && <div className='card-collection-1'>
           {
            data && data?.map((n) =>{
              return (
                <article className='card-bg' key={n._id}>
              <div className='img-holder'>
                <img src={n?.img} alt='product'></img>
              </div>
             <div className='info'>
               <div className='card-bg-row'>
               <Link to={`product/${n?._id}`}><h5>{n?.name}</h5></Link>
               <div className='card-bg-row-sm'>
                   <small><strong>{n?.rating}</strong></small>
                   <div className='star'><FaStar/></div>
                 </div>
               </div>
             </div>
             <div className='info-top'>
                <div className='cart' onClick={() => AddtoCart(n)}><FaShoppingBasket/></div>
                <small className='price'>#{n?.price}</small>
                <div className='heart' onClick={() =>saveitem(n)}>S</div>
             </div>
           </article>
              )
            })
           }
        </div>
        }
    </div>
  )
}

export default Product;