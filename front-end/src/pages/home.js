import { useEffect } from 'react';
import { addToCartAC, initializeProductAC } from '../actions';
import Carousel from '../components/carausel';
import Footer from '../components/footer';
import Nav from '../components/navbar';
import ProductList from '../components/product-list';
import { useDispatch, useSelector } from 'react-redux';

function Home () {
  const dispatch = useDispatch();
  const products = useSelector((state=>state.product.products))
  const cartItems = useSelector(state=>state.cart.items)

  const addToCart = (product)=> {
    dispatch(addToCartAC(product))
  }

  useEffect(()=> {
    dispatch(initializeProductAC());
  },[])

  return (
    <>
    <Nav cartCount={cartItems.length}/>
    <Carousel />
    <ProductList products={products} addToCart={addToCart}/>
    <Footer />
    </>
  )
}
export default Home;