import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import { useGlobal } from '../Hooks/Content';
import {FaChevronDown} from 'react-icons/fa'

function Navbar() {
  const {cart, user, logout} = useGlobal();
   
  return (
    <header className='nav'>
      <div className='container'>
            <Link to='/' className='logo'>
                 <label>Ada Store</label>
            </Link>
            <nav className='desktop-nav'>
                <li><NavLink to='/'>home</NavLink></li>
                <li>
                  <NavLink to='/menu'>menu</NavLink>
                </li>
                <li><NavLink to='/services'>services</NavLink></li>
                <li><NavLink to='/about'>contact us</NavLink></li>
                <div className='btns-2'>
                     <Link to='/cart' className='cart-hold1'>
                        { cart.length >=1 && <p className='circle'>{cart.length}</p>}
                        <FaShoppingCart/>
                     </Link>
                    {
                      user === null? <Link to='/login'><button>LOGIN</button></Link>:
                     <div className='menuc'>
                       <h4>{user?.username}</h4>
                       <div className="dropdown">
                        <FaChevronDown/>
                        <div className="dropdown-content">
                          <Link to='/setting'><h5>Settings</h5></Link>
                          <h5 className='logout' onClick={logout}>SIGN OUT</h5>
                        </div>
                    </div>
                     </div>
                    }

                    {
                      user && user.isAdmin && 
                      <div className='menuc'>
                        <h4>ADMIN</h4>
                        <div className="dropdown">
                        <FaChevronDown/>
                        <div className="dropdown-content">
                          <h5><Link to='/newproduct'>ADD NEW</Link></h5>
                          <h5 className='logout' onClick={logout}>SIGN OUT</h5>
                        </div>
                        </div>
                      </div>
                    }
                </div>
            </nav>
            <div className='mobile-drop'>
                   <div className='mob-drop-one'>
                      {
                          user === null? <Link to='/login'><button>LOGIN</button></Link>:
                          <div className='menuc'>
                          <h6>{user?.username}</h6>
                            <div className="dropdown">
                              <FaChevronDown/>
                              <div className="dropdown-content">
                                <p><Link to='/services'>Services </Link></p>
                               <p> <Link to='/about'>About </Link></p>
                                <p className='logout' onClick={logout}>LOG OUT</p>
                              </div>
                            </div>
                          </div>
                      }
                   </div>

                   <div className='mob-drop-two'>
                      {
                          user && user.isAdmin && 
                          <div className='menuc'>
                            <h6>ADMIN</h6>
                            <div className="dropdown">
                            <FaChevronDown/>
                            <div className="dropdown-content">
                              <p><Link to='/newproduct'>New</Link></p>
                            </div>
                            </div>
                          </div>
                        }
                   </div>
            </div>
      </div>
    </header>
  )
}

export default Navbar;