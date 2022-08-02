import React from 'react'
import {Link} from 'react-router-dom';
import {FaFacebook, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
       <div className='container'>
            <Link to='/' className='logo'>
                <h1>Ada Store</h1>
            </Link>
          <div className='footer-nav'>
                <h4>LINKS</h4>
                <div className='com re'>
                    <li><Link to='/'>home</Link></li>
                    <li>
                      <Link to='/menu'>menu</Link>
                    </li>
                    <li><Link to='/services'>services</Link></li>
                    <li><Link to='/about'>contact us</Link></li>
                    <div className='btns'>
                        <button><Link to='/signin'>Login</Link></button>
                    </div>
                </div>
          </div>
          <div className='texts'>
              <h4>About Ada</h4>
              <p>
                The placeholder is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage
              </p>
          </div>
          <div className='com'>
             <h4>
                 Contact Info
             </h4>
             <div className='com re'>
                <p>Ada@gmail.com</p>
                <p>Ada@facebbok.com</p>
                <p>Ada@instagram</p>
                <p>ada@ticktok</p>
             </div>
             <div className='socials'>
                <div className='fa'><FaFacebook/></div>
                <div className='in'><FaInstagram/></div>
                <div className='tik'><FaTiktok/></div>
                <div className='twi'><FaTwitter/></div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Footer