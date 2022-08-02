import React, { useEffect } from 'react'
import Product from '../components/Product';
import Filter from '../components/Filter'
import Popular from '../components/Popular';
import Sneakers from '../components/Sneakers';
import {Link} from 'react-router-dom';
import { useGlobal } from '../Hooks/Content';
import Alert from '../components/Alert';
import Search from '../components/Search';
import {ImSearch} from 'react-icons/im'

function Home() {
   const { alert, showalert, setTerm, term, searchHandler, cancelsearch} = useGlobal();
   useEffect(() => {
      const time = setTimeout(() => {
        showalert()
      }, 2000)
      return () => clearTimeout(time)
    }, [showalert, alert])
    

  return (
    <div className='main_home'>
      <section className='section-1'>
        <div className='one'>
           <div className='container'>
             <h1>we promise comfort with class</h1>
             <div className='flex-top'>
               <div className='hr'></div>
               <p>matching styles and class with luxury and confort</p>
             </div>

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
             <button><Link to='/menu'>SHOP NOW</Link></button>
           </div>
        </div>
        <div className='two'>
            <div className='container'>
                <div className='card-1'>
                   <div>
                      <img src='https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='side-card'></img>
                   </div>
                   <div className='card1-info'>
                      <h3>classy Wears</h3>
                      <p>All gender</p>
                      <p className='btn-1'>shop with us</p>
                   </div>
                </div>
                <div className='card-1 left'>
                   <div>
                      <img src='https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80' alt='side-card'></img>
                   </div>
                   <div className='card1-info'>
                      <h3>Comfy Shoes</h3>
                      <p>All gender</p>
                      <p className='btn-1'>shop with us</p>
                   </div>
                </div>
                <div className='card-1 right'>
                   <div>
                      <img src='https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80' alt='side-card'></img>
                   </div>
                   <div className='card1-info'>
                      <h3>classy Bags</h3>
                      <p>All gender</p>
                      <p className='btn-1'>shop with us</p>
                   </div>
                </div>
                
            </div>
        </div>
      </section>
      <section>
          <Search />
      </section>
      <section className='popular-section'>
        <div className='container'>
           <h2>Our Most Popular Products</h2>
           <div className='line'></div>
           <Popular/>
        </div>
      </section>
      <section className='products-2'>
         <div className='container'>
           <h2>Product Category</h2>
           <div className='line'></div>
           {
              alert?.show && <Alert {...alert} />
          }
           <Filter/>
           <Product/>
         </div>
      </section>
      <section className='popular-section sneak'>
          <div className='container'>
             <h2>Our Sneakers Collection</h2>
             <div className='line'></div>
             <Sneakers/>
          </div>
      </section>
    </div>
  )
}

export default Home;