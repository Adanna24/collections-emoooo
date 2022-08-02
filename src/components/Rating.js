import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

function Rating(prop) {
  const {rating, review} = prop
  return (
    <div className='rate'>
      <div className='rating2'>
      <span>{
          rating >= 1? <FaStar/>: rating >= 0.5? <FaStarHalfAlt/>: <FaRegStar/>
        }
      </span>
      <span>{
          rating >= 2? <FaStar/>: rating >= 1.5? <FaStarHalfAlt/>: <FaRegStar/>
        }
      </span>
      <span>{
          rating >= 3? <FaStar/>: rating >= 2.5? <FaStarHalfAlt/>: <FaRegStar/>
        }
      </span>
      <span>{
          rating >= 4? <FaStar/>: rating >= 3.5? <FaStarHalfAlt/>: <FaRegStar/>
        }
      </span>
      <span>{
          rating >= 5? <FaStar/>: rating >= 4.5? <FaStarHalfAlt/>: <FaRegStar/>
        }
      </span>
      </div>
      <span>
        {`${review} reviews`}
      </span>
    </div>
  )
}

export default Rating;