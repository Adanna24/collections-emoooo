import React, { useRef } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useGlobal } from '../Hooks/Content';
import {FaStar, FaShoppingBasket } from 'react-icons/fa';
import {Link} from 'react-router-dom';
//import Loading from './Loading';
import Alert from './Alert';

function Popular() {
  const ref = useRef(null);
  const {products, AddtoCart, saveitem,  error1 } = useGlobal();
 
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  
  
  const data = products?.filter(n => n.category === 'popular')
  return (
    <main>
        <div className='chevrons'>
            <div onClick={() => scroll(-260)}><FaChevronLeft/></div>
            <div onClick={() => scroll(260)}><FaChevronRight/></div>
        </div>
        {
          error1 && <Alert  type='danger' msg={error1} />
        }
  {
    products &&  <div className='popular-card-collection' ref={ref}>
    {
      data && data?.map((n, index) => {
        return(
          <article key={n._id} className='card-md'>
           <img src={n?.img} alt={n?.name}></img>
           <Link to={`product/${n?._id}`}> <div className='product-detail'> 
            <h5>{n?.name}</h5>
               <small>#{n?.price}.00</small>
               <div className='card-bg-row-sm w2'>
                  <small><strong>{n?.rating}</strong></small>
                  <div className='star'><FaStar/></div>
               </div>
           </div></Link>
           <div className='info-top info-top-2'>
              <div className='cart' onClick={() => AddtoCart(n)}><FaShoppingBasket/></div>
                <div className='heart' onClick={() =>saveitem(n)}>S</div>
              
           </div>
          </article>
        )
      })
    }
 </div>
  }
    </main>
  )
}

export default Popular;