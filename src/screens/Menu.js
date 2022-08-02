import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/settings.css';
import { useGlobal } from '../Hooks/Content';
//import {ImSearch} from 'react-icons/im';
import {FaShoppingBasket, FaStar} from 'react-icons/fa'


function Menu() {
  const {AddtoCart, saveitem, products, fetchproducts,} = useGlobal();
  const [indes, setindes] = useState("All");

  useEffect( () => {
    fetchproducts();
  }, [fetchproducts])

  const [menuitems, setmenuitems] = useState(products);

  const tption = [
    {value: 'All', text: 'All'},
    {value: 'heels', text: 'heels'},
    {value: 'flats', text: 'flats'},
    {value: 'sneakers', text: 'sneakers'},
    {value: 'leather', text: 'leather'},
    {value: 'fashion bag', text: 'fashion bag'},
    {value: 'male shoes', text: 'male shoes'},
    {value: 'female shoes', text: 'female shoes'},
    {value: 'female bag', text: 'female bag'},
    {value: 'male bags', text: 'male bags'},
  ]

  const [btn] = useState(tption)

  const filtermenu = (category) => {
    setindes(category)
    if(category === "All") {

      setmenuitems(products)
      
      return;
    }

    const newmenu = products.filter((item) => {
      return (item.class === category)
    })
    return setmenuitems(newmenu);
  }

  return (
      <main className='settings'>
        <h2>OUR PRODUCTS</h2>
        <div className='line'></div>
       <div className='container'>
        <div className='side-bar-r'>
          <div className='side-bar-t'>
             {
              btn && btn?.map((n, index) => {
                return <h3 key={index} onClick={() => filtermenu(n.text)} className={indes === n.text? 'act':''}>{n.text}</h3>
              })
             }
          </div>
        </div>
        <div className='main-bar'>
             {
                menuitems && <div className='card-collection-2'>
                {
                 menuitems && menuitems?.map((n) =>{
                   return (
                     <article className='card-bg' key={n._id}>
                   <div className='img-holder'>
                     <img src={n?.img} alt='product'></img>
                   </div>
                  <div className='info'>
                    <div className='card-bg-row'>
                    <Link to={`/menu/product/${n?._id}`}><h5>{n?.name}</h5></Link>
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
       </div>
    </main>
  )
}

export default Menu;