import React, { useState } from 'react'
import peeps from '../Hooks/Peeps';
import '../styles/settings.css';
import {useNavigate} from 'react-router-dom';
import { useGlobal } from '../Hooks/Content';

function Setting() {
  const {user} = useGlobal();
  const navigate = useNavigate();
  const [go, setgo] = useState("order");

  if(!user){
    navigate('/login')
  }

  const data = peeps.filter(n => n.name === go);

  return (
    <main className='settings'>
       <div className='container'>
        <div className='side-bar-r'>
          <div className='side-bar'>
             {
              peeps && peeps.map((n, index) => {
                return <h3 key={index} onClick={() => setgo(n.name)} className={n.name === go? 'act':''}>{n?.name}</h3>
              })
             }
          </div>
        </div>
        <div className='main-bar'>
          {
            peeps && data.map((n, index) => {
              return <div key={index}>{n?.div}</div>
            })
          }
        </div>
       </div>
    </main>
  )
}

export default Setting;