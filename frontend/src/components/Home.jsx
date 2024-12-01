import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Products from './Products';
const Home = () => {
  const [products_list,setProductsList] = useState([]);
  useEffect(
  axios.get('http://localhost:8000/api/v1/products')
       .then( (res) => {setProductsList(res.data);
                       console.log(products_list);} ),[]);
  return (
    <div>
      <Products products_list={products_list}/>
	  </div>
  )
}

export default Home