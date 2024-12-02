import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerCare from './components/components/CustomerCare';
import Home from './components/components/Home';
import NavBar from './components/components/NavBar';
import Orders from './components/components/Orders';
import ShoppingCart from './components/components/ShoppingCart';
import SignIn from './components/components/SignIn';
import SignUp from './components/components/SignUp';

function App() {
	let [isLoggedIn,setIsLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>               
           <Routes>        
					 		<Route path ='/' element = { <SignIn/>} />      
							<Route path ='/home' element ={<Home/>} />                         
              <Route path ='/orders' element ={<Orders/>} />  
              <Route path ='/cart' element ={<ShoppingCart/>} />  
              <Route path ='/customercare' element ={<CustomerCare/>} />  
							<Route path ='/signIn' element ={<SignIn/>}/>
							<Route path ='/signUp' element ={<SignUp setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn}/>} />  
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
