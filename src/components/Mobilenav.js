import React from 'react';
import { NavLink} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {BiFoodMenu} from 'react-icons/bi';
import {FiHome} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import {useGlobal} from '../Hooks/Content';

function Mobilenav() {
   const {cart} = useGlobal();
  return (
    <div className='mobile-nav'>
       <div className='container'>
       <div className='flex'>
                <NavLink to='/' className='flex-col'>
                   <FiHome/>
                </NavLink>
                <NavLink to='/menu' className='flex-col'>
                   <BiFoodMenu/>
                </NavLink>
                <NavLink to='/search' className='flex-col search'>
                   <ImSearch/>
                </NavLink>
                <NavLink to='/cart' className='flex-col'>
                   <div to='/cart' className='cart-hold1'>
                        { cart.length >=1 && <p className='circle'>{cart.length}</p>}
                        <FaShoppingCart/>
                     </div>
                </NavLink>
                <NavLink to='/setting' className='flex-col'>
                   <CgProfile/>
                </NavLink>
            </div>
       </div>
    </div>
  )
}

export default Mobilenav;