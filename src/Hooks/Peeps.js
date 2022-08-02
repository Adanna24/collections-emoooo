import React from 'react'
import History from '../components/History'
import Profile from '../components/Profile'
import Save from '../components/Save'


const peeps = [
  {
   name: "order" ,
    div: <History/> 
  },
  {
   name: "profile",
   div: <Profile/>
  },
  {
   name: "save",
   div: <Save/>
  }
   
]



export default peeps;