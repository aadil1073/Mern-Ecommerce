
import Footer from '../components/footer';
import Nav from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from '../components/productDetail';
import { useParams } from 'react-router-dom';
import { addToCartAC } from '../actions';

function ProductDetailsPage () {
  const dispatch = useDispatch();
  let {productId} = useParams()
  const cartItems = useSelector(state=>state.cart.items)
  const products = useSelector(state=>state.product.products);
  const product = products.find(p=>p._id===productId)

  const addToCart = (product)=> {
    dispatch(addToCartAC(product))
  }

  return (
    <>
    <Nav cartCount={cartItems.length}/>
    <ProductDetails product={product} addToCart={addToCart}/>
    <Footer />
    </>
  )
}
export default ProductDetailsPage;