import React, { useState } from 'react';
import axios from 'axios';
import { useGlobal } from '../Hooks/Content';
import {useNavigate} from 'react-router-dom';

function Addproduct() {
  const {setproducts, products, user} = useGlobal();
  const [name, setname] = useState();
  const [category, setcategory] = useState();
  const [brand, setbrand] = useState();
  const [clasS, setclasS] = useState();
  const [price, setprice] = useState();
  const [details, setdetails] = useState();
  const [quantity, setquantity] = useState();
  const [img, setimg] = useState();
  const [review, setreview] = useState();
  const [rating, setrating] = useState();
  const navigate = useNavigate()
  


  const tption = [
    {value: '', text: '---choose a class---'},
    {value: 'heels', text: 'heels'},
    {value: 'flats', text: 'flats'},
    {value: 'sneakers', text: 'sneakers'},
    {value: 'leather', text: 'leather'},
    {value: 'fashion bag', text: 'fashion bag'},
    {value: 'male shoes', text: 'male shoes'},
    {value: 'female shoes', text: 'female shoes'},
    {value: 'female bag', text: 'female bag'},
    {value: 'male bags', text: 'male bags'},
    {value: 'heels', text: 'heels'}
  ]
  

  const pop = [
    {value: '', text:'---choose a category---'},
    {value: 'popular', text:'popular'},
    {value: 'male bags', text:'male bags'},
    {value: 'female bags', text:'female bags'},
    {value: 'male shoes', text:'male shoes'},
    {value: 'female shoes', text:'female shoes'}
  ]

    const item = {
       name:name,
       category: category, 
       brand: brand,
       class: clasS,
       price: price,
       details: details,
       quantity: quantity,
       img: img,
       review: review,
       rating: rating
    }
  const newdata = () => {
    axios.post("/api/products/newproduct", item, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then(({data}) => {
       const p = [data, ...products]
       setproducts(p)
    }, (error) => {
      const message =
      error.response && error.response.data.message
     ? error.response.data.message
     : error.message;
     alert(message)
    })
  }

  const handlenew = (e) => {
    e.preventDefault();
    if(name.trim().length > 1 && category.trim().length > 1 && brand.trim().length > 1 && clasS.trim().length > 1
    && details.trim().length > 1
    ){
      newdata()
      alert("PRODUCT ADDED")
      setname(""); setbrand(""); setcategory(""); setclasS(""); setdetails(""); setimg(""); setprice(""); setrating("");
      setreview("");
    }
    else{
      alert("EMPTY INPUT")
    }
  }
  
  if(!user){
    navigate('/')
  }

  if(!user.isAdmin){
    navigate('/')
  }

  return (
    <div className='new-product'>
       <div className='container'>
         <h2>New Product</h2>
         <div className='line'></div>
         <main>
         <form className='form-1' onSubmit={handlenew}>
             <div>
               <label htmlFor='name'>NAME</label> <br></br>
               <input 
               type='text' 
               placeholder='product name' 
               required 
               onChange={(e) => setname(e.target.value)}
               id='name'/>
             </div>
             
             <div>
               <label htmlFor='brand'>BRAND NAME</label> <br></br>
               <input 
               type='text' 
               placeholder='brand name' 
               required 
               onChange={(e) => setbrand(e.target.value)}
               id='brand'/>
             </div>

              <div className='popll'>
                 <select value={clasS} onChange={(e) => setclasS(e.target.value)}>
                     {
                      tption?.map((n, index) => (
                        <option key={index} value={n?.value}>{n?.text}</option>
                      ))
                     }
                 </select>
                 <select value={category} onChange={(e) => setcategory(e.target.value)}>
                     {
                       pop?.map((n, index) => (
                        <option key={index} value={n.value}>{n.text}</option>
                      ))
                     }
                 </select>
              </div>
             <div>
               <label htmlFor='price'>PRICE</label> <br></br>
               <input 
               type='number' 
               placeholder='product price' 
               required 
               onChange={(e) => setprice(e.target.value)}
               id='price'/>
             </div>

             <div>
               <label htmlFor='details'>DETAILS</label> <br></br>
               <input 
               type='text' 
               placeholder='product name' 
               required 
               onChange={(e) => setdetails(e.target.value)}
               id='details'/>
             </div>
             <div>
               <label htmlFor='qty'>QUANTITY</label> <br></br>
               <input 
               type='number' 
               placeholder='number of products' 
               required 
               onChange={(e) => setquantity(e.target.value)}
               id='qty'/>
             </div>

             <div>
               <label htmlFor='img'>IMG URL</label> <br></br>
               <input 
               type='text' 
               placeholder='img url' 
               required 
               onChange={(e) => setimg(e.target.value)}
               id='img'/>
             </div>

             <div>
               <label htmlFor='review'>REVIEW</label> <br></br>
               <input 
               type='number' 
               placeholder='reviews' 
               required 
               onChange={(e) => setreview(e.target.value)}
               id='review'/>
             </div>

             <div>
               <label htmlFor='rate'>RATING</label> <br></br>
               <input 
               type='number' 
               placeholder='1-5' 
               required 
               onChange={(e) => setrating(e.target.value)}
               id='rate'/>
             </div>
               <button type='submit'>ADD PRODUCT</button>
    
           </form> 
         </main>
       </div>
    </div>
  )
}

export default Addproduct