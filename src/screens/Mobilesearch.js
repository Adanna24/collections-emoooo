import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobal } from '../Hooks/Content';
import {FaStar, FaShoppingBasket} from 'react-icons/fa'
import {ImSearch} from 'react-icons/im'

function MobileSearch() {
  const {searchresult, AddtoCart, setTerm, saveitem, cancelsearch, term, searchHandler} = useGlobal();
  return (
    <div className='search-result-div-sec'>
       <div className='container'>
          <h2>Product Search</h2>
          <div className='line'></div>
          <div className='fidgees-kllo-juuuuuu'>
                  <input  
                     type='text'
                     placeholder='search product'
                     value={term}
                     onChange={(e) => setTerm( e.target.value)}
                  />
                  <h6  onClick={cancelsearch}>X</h6>
                  <small onClick={searchHandler}><ImSearch/></small>
               </div>
        <div className='card-collection-1'>
          {
            searchresult.length >= 1 && searchresult.map((n) => {
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
      </div>
    </div>
   
  )
}

export default MobileSearch;