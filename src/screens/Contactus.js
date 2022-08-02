import React, { useEffect, useState } from 'react';
import '../styles/contact.css';
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {FaTiktok, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import Alert from '../components/Alert';
import { useGlobal } from '../Hooks/Content';

function Contactus() {
  const {showhold, info} = useGlobal();
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [masge, setmasge] = useState('');
 
 
 
  useEffect(() => {
    const time = setTimeout(() => {
      showhold()
    }, 3000)
    return () => clearTimeout(time)
  }, [showhold] )

  const handlequerry = (e) => {
     e.preventDefault();
     setemail("");
     setname("");
     setmasge("");
     showhold(true, "success", "THANK YOU FOR THE MESSAGE")
  }

 
  return (
    <div className='contact-us'>
       <div className='container'>
          <h2>Get In Touch</h2>
          <div className='line'></div>
          <p>How can we help you?</p>
          {
              info.show && <Alert {...info} />
          }
          <main>
             <form className='form-1' onSubmit={handlequerry}>
               <h2>Drop A Message</h2>
               <div>
                 <label>FULL NAME</label>
                 <input
                  type='text'
                  placeholder='enter your name'
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                  />
               </div>
               <div>
                 <label>EMAIL ADDRESS</label>
                 <input
                  type='email'
                  placeholder='enter your email address'
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  />
               </div>
               <div className='text-area'>
                 <label>YOUR MESSAGE</label>
                 <textarea
                   placeholder='enter your message'
                   required
                   value={masge}
                   onChange={(e) => setmasge(e.target.value)}
                 />
               </div>
               <button>Submit</button>
             </form>
             <aside>
               <div className='asidee-img'><img src='https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?k=20&m=1271752802&s=612x612&w=0&h=O_QjEVcEdtQUGcUkJ8q19S93FFHNfs6AVlceDiqQ_jY=' alt='contact-us'></img></div>
               <div className='asidde-svg'>
                  <div>
                    <p className='aside-svg-svg'><BsTelephoneFill/></p>
                    <p>07063797156</p>
                  </div>
                  <div>
                     <p className='aside-svg-svg'><MdEmail/></p>
                      <p>Ada@gmail.com</p>
                  </div>
                  <div>
                     <p className='aside-svg-svg'><ImLocation2/></p>
                      <p>Abuja, Nigeria.</p>
                  </div>
               </div>
               <div className='aside-svg-svg-svg'>
                 <p><FaFacebookF/></p>
                 <p><FaTwitter/></p>
                 <p><FaInstagram/></p>
                 <p><FaTiktok/></p>
                 <p><FaWhatsapp/></p>
               </div>
             </aside>
          </main>
       </div>
    </div>
  )
}

export default Contactus;