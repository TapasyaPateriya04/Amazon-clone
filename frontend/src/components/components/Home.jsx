import React, { useState } from 'react';
const Home = () => {
  const [products_list,setProductsList] = useState([]);
  /* useEffect(
  axios.get('http://localhost:8001/api/v1/products')
       .then( (res) => {setProductsList(res.data);
                       console.log(products_list);} ),[]); */
  return (
    <div>
     {/* <Products products_list={products_list}/>*/ }
	  </div>
  )
}

export default Home