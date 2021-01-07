import { useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';
import { Product } from './types';


function Orders() {

 const [product, setProducts]=useState<Product[]>([])

   useEffect(() => {
     fetchProducts().then(
        Response => setProducts(Response.data))
        .catch(error => console.log(error))

   }, [])


   return (

      <div className="orders-container">

         <StepsHeaders />
         <ProductsList product={product} />


      </div>
   )
}

export default Orders;