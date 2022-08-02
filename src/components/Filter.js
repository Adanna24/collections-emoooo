import React from 'react';
import { useGlobal } from '../Hooks/Content';
import filter from '../Hooks/data';

function Filter() {
  const { Filter, setFilter } = useGlobal();

  return (
    <div className='mobile-sm-collection sm-collection'>
       {
        filter && filter.map((n, index) => {
           return(
            <div className={n.cate === Filter? 'card-sm active-card':'card-sm'} 
            key={index} onClick={() => setFilter(n.cate)}>
              <img src={n?.img} alt='product'></img>
              <div className='info'>
                <p><strong>{n?.cate}</strong></p>
              </div>
          </div>
           )
        })
       }
    </div>
  )
}

export default Filter;