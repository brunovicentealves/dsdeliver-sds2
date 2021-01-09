import { useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
import { fetchProducts } from '../api';

import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';
import { OrderLocatiodata, Product } from './types';
import OrderLocation from './OrderLocation';


function Orders() {

 const [product, setProducts]=useState<Product[]>([])
 const [orderlocation,setOrderLocation] = useState<OrderLocatiodata>();

   useEffect(() => {
     fetchProducts().then(
        Response => setProducts(Response.data))
        .catch(error => console.log(error))

   }, [])


   return (

      <div className="orders-container">

         <StepsHeaders />
         <ProductsList product={product} />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>


      </div>
   )
}

export default Orders;