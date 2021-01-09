import { useEffect, useState } from 'react';
import {  toast } from 'react-toastify';
import { isConstructorDeclaration } from 'typescript';
import { fetchProducts, saveOrder } from '../api';
import ProductsList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css';
import { OrderLocatioData, Product } from './types';
import OrderLocation from './OrderLocation';
import OrderSummary from '../OrderSummary';
import Footer from '../Footer';
import { checkIsSelected, formatPrice } from '../helpers';


function Orders() {

   const [product, setProducts] = useState<Product[]>([])
   const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
   const [orderlocation, setOrderLocation] = useState<OrderLocatioData>();
   const totalPrice = selectedProducts.reduce((sum,item)=>{
      return sum + item.price;

   },0)

   useEffect(() => {
      fetchProducts().then(
         Response => setProducts(Response.data))
         .catch(error => console.log(error))

   }, []);


   const handleSelectProduct = (product: Product) => {
      const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
    
      if (isAlreadySelected) {
        const selected = selectedProducts.filter(item => item.id !== product.id);
        setSelectedProducts(selected);
      } else {
        setSelectedProducts(previous => [...previous, product]);
      }
    }
    
    const handleSubmit = () => {
      const productsIds = selectedProducts.map(({ id }) => ({ id }));
      const payload = {
        ...orderlocation!,
        products: productsIds
      }
    
      saveOrder(payload).then((response) => {
         toast.error(`Pedido enviado com sucesso! Nª ${response.data.id}`);
        setSelectedProducts([]);
      })
        .catch(() => {
          toast.warning('Erro ao enviar pedido');
        })
    }

  
   return (

      <>
         <div className="orders-container">

            <StepsHeaders />
            <ProductsList product={product} 
            onSelectProduct={handleSelectProduct} 
            selectedProduct ={selectedProducts}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary
            amount={selectedProducts.length} 
            totalPrice={totalPrice}
            onSubmit={handleSubmit} />
         </div>
         <Footer />

      </>
   )
}

export default Orders;