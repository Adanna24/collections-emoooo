import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import Rating from '../components/Rating';
import { useGlobal } from '../Hooks/Content';

function ProductDetails2() {
  const {id} = useParams();
  const {AddtoCart} = useGlobal();
  const [singleproduct, setsingleproduct] = useState({})
  const [error2, seterror2] = useState(false);
  const [loading2, setloading2] = useState(false);

  
  useEffect(() => {
    const fetchdata = async () => {
      setloading2(true)
      try {
        const { data } = await axios.get(`/api/products/${id}`)
        setloading2(false)
        setsingleproduct(data)
      } catch (error) {
        const message =
        error.response && error.response.data.message
       ? error.response.data.message
       : error.message;
        seterror2(message)
        setloading2(false)
      }
   };
   fetchdata()
  }, [id])
 
  if(!singleproduct){
    return(
       <Loading/>
    )
  }

  return (
     <section className='details'>
       <div className='container'>
          <h1>Product Details</h1>
          <div className='line'></div>
          {
            loading2? <Loading/>:
            error2? <p>{error2}</p>:
            <div className='detail'>
                <div className='detail-one'> 
                    <div className='img-holder2'> 
                        <img src={singleproduct?.img} alt={singleproduct?.name}></img>
                    </div>
                    <div className='available'>
                        <h3>Name: {singleproduct?.name}</h3>
                        <div><h4>Price:</h4><p className='price'>#{singleproduct?.price}</p></div>
                        <h5>{
                          singleproduct?.quantity >=1? "AVAILABLE IN STOCK":"OUT OF STOCK"
                        }</h5> 
                        <div className='btns'>
                           <button className='btn-cart' onClick={() => AddtoCart(singleproduct)}>ADD TO CART</button>
                           <button className='btn-save'>SAVE PRODUCT</button>
                        </div>
                    </div>
                    <div className='class'>
                        <div><h4>Category:</h4> <p>{singleproduct?.category}</p></div>
                        <div><h4>Class: </h4> <p>{singleproduct?.class}</p></div>      
                        <div><h4>Brand:</h4> <p>{singleproduct?.brand}</p></div>
                        <small><Rating rating={singleproduct?.rating} review={singleproduct?.review}></Rating></small>
                    </div>
                    <div className='p'>
                       <h4>Details</h4>
                       <p>{singleproduct?.details}</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
          }
       </div>
     </section>
  )
}

export default ProductDetails2;