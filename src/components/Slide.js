import React, { useEffect, useState } from 'react';
import slidedata from '../Hooks/slidedata';
import '../styles/service.css';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'


function Slide() {
  const [imge] = useState(slidedata);
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
    <div className='slide'>
      {
        imge && imge.map((n,index) => {
          let position = 'nextslide';
          if(index === Index) {
            position = 'activeslide'
          }
          if(index === Index - 1 || (Index === 0 && index === imge.length -1)){
            position = 'lastslide'
          }
          return <div className={`service-article ${position}`} key={n.id} > 
            <div className='service-card'>
             <img src={n?.img} alt={n?.h2}></img>
             <div className='service-card-info'>
                <h2>{n?.h2}</h2>
                <p>{n?.p}</p>
                <div className='chevron'>
                   <div onClick={() => setIndex(Index - 1)}><FiChevronLeft/></div>
                   <div onClick={() => setIndex(Index + 1)}><FiChevronRight/></div>
                </div>
             </div>
          </div>
          </div>
        })
      }
    </div>
  )
}

export default Slide;