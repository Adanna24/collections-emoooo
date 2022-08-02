import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import reducer from './reducer';


const App = createContext();


const initialstate = {
  cart: JSON.parse(localStorage.getItem("cart-item-1")) || [],
  total:0,
  amount:0,
  user:  localStorage.getItem("users-info")? JSON.parse(localStorage.getItem("users-info")):null,
  orderdetails: localStorage.getItem("orders-info")? JSON.parse(localStorage.getItem("orders-info")):{},
  orders: {},
  saved: localStorage.getItem("saved-item")? JSON.parse(localStorage.getItem("saved-item")):[],
}

function Content({children}) {

 const [products, setproducts] = useState([]);
 const [backendorder, setbackendorder] = useState({});
 const [alert, setalert] =useState({show:false, type:"", msg:""})
 const [push, setpush] = useState(false);
 const [ans, setans] = useState("All");
 const [ordererror, setordererror] = useState(false)
 const [error1, seterror1] = useState(false);
 const [loading1, setloading1] = useState(false);
 const [loading4, setloading4] = useState(false);
 const [error3, seterror3] = useState(false);
 const [error4, seterror4] = useState(false);
 const [error8, seterror8] = useState(false);
 const [loading3, setloading3] = useState(false);
 const [Filter, setFilter] = useState('female shoes');
 const [showmodel, setshowmodel] = useState(false)
 const [receive, setrecieve] = useState(false)
 const [one, setone] = useState(false);
 const [myorders, setmyorders] = useState([]);
 const [userprofile, setuserprofile] = useState({});
 const [red, setred] = useState(false);
 const [term, setTerm] = useState("");
 const [searchresult, setSearchresult] = useState([]);
 const [info, setinfo] = useState({show:false, type:"", msg:""})
  
 
 const showalert = (show=false, type="", msg="") => {
  setalert({show, msg, type})
}

const showhold = (show=false, type="", msg="") => {
  setinfo({show, msg, type})
}
 const openmodel = () => {
     setshowmodel(true)
     //localStorage.setItem("signin-model", JSON.stringify(showmodel))
 }

 const closemodel = () => {
    setshowmodel(false)
    //localStorage.setItem("signin-model", JSON.stringify(showmodel))
 }
 const fetchproducts = async () => {
      setloading1(true)
      try {
        const { data } = await axios.get('/api/products')
        setloading1(false)
        setproducts(data)
      } catch (error) {
        const message =
        error.response && error.response.data.message
       ? error.response.data.message
       : error.message;
       seterror1(message)
      }
 }

 const [state, dispatch]= React.useReducer(reducer, initialstate )
 
 useEffect(() => {
  localStorage.setItem("cart-item-1", JSON.stringify(state.cart))
 },[state.cart])

 const AddtoCart = (item) => {
  showalert(true, 'success', 'product added')
  dispatch({type:'ADD_TO_CART', payload:item})
  localStorage.setItem("cart-item-1", JSON.stringify(state.cart))
 }

 const removeitem = (id) => {
     const remove = state.cart.filter((n) => n._id !== id)
     dispatch({type: 'REMOVE_ITEM', payload:remove})
     showalert(true, 'danger', 'product removed')
     localStorage.setItem("cart-item-1", JSON.stringify(state.cart))
 }

 
 const removeitem2 = (id) => {
  showalert(true, 'danger', 'product removed')
  const remove = state.saved.filter((n) => n._id !== id)
  dispatch({type: 'REMOVE_ITEM-1', payload:remove})
  localStorage.setItem("saved-item", JSON.stringify(state.saved))
}

  useEffect(() => {
    dispatch({type: 'AMOUNT'})
     localStorage.setItem("cart-item-1", JSON.stringify(state.cart))
  },[state.cart])

  useEffect(() => {
    const totalprice = state.cart.reduce((a, c) => a + c.price * c.quantity, 0)
    dispatch({type:'TOTAL', payload:totalprice})
    localStorage.setItem("cart-item-1", JSON.stringify(state.cart))
  }, [state.cart])


  const addnumber = (id) => {
    showalert(true, 'success', 'product increased')
    dispatch({type:"INCREASE", payload:id})
  }
  
  
  const removernumber = (id) => {
    showalert(true, 'success', 'product decreased')
    dispatch({type:"DECREASE", payload:id})
  }
  
  const emptycart = () => {
    showalert(true, 'danger', 'cart empty')
    dispatch({type: "EMPTY_CART"})
    localStorage.removeItem("cart-item-1")
  }
  const login = (email, password) => {
    setloading3(true)
    axios.post('/api/users/signin', {
     email: email,
     password: password
    })
    .then(({data}) => {
      dispatch({type:"GET_USER", payload: data })
      setloading3(false)
      showalert(true, 'success', 'LOGIN SUCCESSFUL')
      localStorage.setItem("users-info", JSON.stringify(data))
    }, (error) => {
      const message =
        error.response && error.response.data.message
       ? error.response.data.message
       : error.message;
       seterror3(message)
       setloading3(false)
    })
  }


  const logout = () => {
    dispatch({type: "REMOVE_USER"})
    localStorage.removeItem("users-info")
    localStorage.removeItem("orders-info")
  }

  const newuser = (fullname, email, username, password) => {
    setloading4(true)
    axios.post('/api/users/register', {
      fullname: fullname,
      email: email,
      username: username,
      password: password
    })
    .then(({data}) => {
      dispatch({type:"NEW_USER", payload: data })
      dispatch({type:"GET_USER", payload: data })
      setloading4(false)
      showalert(true, 'success', 'registration sussessful')
      localStorage.setItem("users-info", JSON.stringify(data))
    },(error) => {
      const message =
        error.response && error.response.data.message
       ? error.response.data.message
       : error.message;
       seterror4(message)
       setloading4(false)
    })
  }

  const getorder = (info) => {
    dispatch({type:"GET_ORDER", payload:info})
    localStorage.setItem("orders-info", JSON.stringify(info))
  }
  
  const order = (data) => {
     axios.post("/api/orders", data, 
    {
      headers: {
        Authorization: `Bearer ${state.user.token}`
      }
    }).then(({data}) => {
      setrecieve(false)
      dispatch({type:"GETTING_ORDERS", payload: data.order})
      setrecieve(true)
      dispatch({type: "EMPTY_CART"})
      localStorage.removeItem("cart-item-1")
    }, (error) => {
      const message =
      error.response && error.response.data.message
     ? error.response.data.message
     : error.message;
     seterror8(message)
    })
  }
 
  const emptyorder = () => {
    dispatch({type: "EMPTY_ORDERS_R"})
  }


  const fetchoderbackend = (id) => {
     axios.get(`/api/orders/${id}`, 
      {
        headers: {
          Authorization: `Bearer ${state.user.token}`
        }
      }
     )
     .then(({data}) => {
      setbackendorder(data)
     }, (error) => {
      const message =  error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      setordererror(message)
     })
  }


  const successpayment = (order, paymentResult) => {
      dispatch({type:"PAYMENT_REQUEST", payload:{order, paymentResult}})
      setpush(false)
      axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
        headers: {
          Authorization: `Bearer ${state.user.token}`
        }
      })
      .then(({data}) => {
        dispatch({type: "SUCCESSFUL_PAYMENT", payload:data})
        setrecieve(true)
        setpush(true)
      }, (error) => {
        const message =  error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      alert(message)
      setpush(false);
      })
  }


  const getmyorders = async () => {
    try {
      setone(true)
      const { data } = await axios.get('/api/orders/history', {
        headers:{Authorization: `Bearer ${state.user.token}`}
      });
      setone(false)
      setmyorders(data)
    } catch (error) {
      const message =
       error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      alert(message);
      setone(false)
    }
  }


  const profile = (id) => {
    axios.get(`/api/users/${id}`, {
     headers: { Authorization: `Bearer ${state.user.token}`}
    })
    .then(({data}) => {
      setuserprofile(data)
    }, (error) => {
     const message =
     error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
    alert(message);
    })
  }
 
  const updateuserdetails = (user) => {
   axios.put(`/api/users/profile`, user, {
     headers: { Authorization: `Bearer ${state.user.token}`}
    })
    .then(({data}) => {
     dispatch({type:"GET_USER", payload:data});
     localStorage.setItem("users-info", JSON.stringify(data))
      setuserprofile(data)
    }, (error) => {
     const message =
     error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
    alert(message);
    })
  }

  const saveitem = (item) => {
    dispatch({type:'ADD_TO_SAVE', payload:item})
    showalert(true, 'success', `${item.name} is saved`)
    localStorage.setItem("saved-item", JSON.stringify(state.saved))
  }
  
  const searchHandler = () => {
    const newproduct = products.filter((n) => {
      return  Object.values(n).join(" ").toLowerCase().includes(term.toLowerCase());
    }) 
      setSearchresult(newproduct)
  }

   
  const cancelsearch = () => {
    setTerm("")
    setSearchresult([])
  }

  return <App.Provider value={{
    ...state,logout,newuser,saveitem, showalert, loading4, getorder,error8,order,
    info, cancelsearch, searchHandler, term, setTerm, setproducts, removeitem2, products,setshowmodel,error4,receive,getmyorders,
    fetchproducts,AddtoCart, removeitem,addnumber, removernumber,
    loading1, setred, showmodel, openmodel, closemodel,one,myorders, showhold,
    error1,login, userprofile , loading3, error3, emptycart, fetchoderbackend, backendorder, ordererror,
    searchresult, red, ans, setans, Filter,setFilter, emptyorder, successpayment, push,updateuserdetails, profile
  }}>{children}</App.Provider>
}

function useGlobal(){
   return useContext(App);
}
export {Content, useGlobal};