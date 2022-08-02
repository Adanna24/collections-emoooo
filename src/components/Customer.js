import React,{useEffect, useState} from 'react'
import cus from '../Hooks/customer';
import '../styles/service.css';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaStar} from 'react-icons/fa';

function Customer() {
  const [imge] = useState(cus);
  const [Index, setIndex] = useState(0);

  useEffect(() => {
     const last = imge?.length - 1;
     if(Index < 0){
      setIndex(last);
     }
     if(Index > last){
      setIndex(0);
     }
  }, [Index, imge])

  useEffect(() => {
   let time = setInterval(() => {
      setIndex(Index + 1)
    }, 4000);
    return () => clearInterval(time);
  },[Index])

  return (
    <div className='customer'>
      <h2>Customer Reviews</h2>
      <div className='line'></div>
      <main className='cus-slide'>
        {
          imge && imge.map((n, index) => {
            let position = 'nextslide';
            if(index === Index) {
              position = 'activeslide'
            }
            if(index === Index - 1 || (Index === 0 && index === imge.length -1)){
              position = 'lastslide'
            }
            return <article className={position} key={n.id}>
               <img src={n?.img} alt={n?.name}></img>
               <div>
                  <h4>{n?.name}</h4>
                  <p className='fr-star'>
                    {
                      Array.from({length: n?.rating}, (index) => <h5 key={index}><FaStar/></h5>)
                    }
                  </p>
                  <small>{n?.sm}</small>
                  <p>{n?.p}</p>
               </div>
            </article>
          })
        } 
      </main>
      <div className='chevron'>
          <div onClick={() => setIndex(Index - 1)}><FiChevronLeft/></div>
          <div onClick={() => setIndex(Index + 1)}><FiChevronRight/></div>
      </div>
    </div>
  )
}

export default Customer;