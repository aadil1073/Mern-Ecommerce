
import CheckOut from '../components/checkout';
import Footer from '../components/footer';
import Nav from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressAC, setShipAddressAC, placeOrderAC, emptyCartAC } from '../actions';
import { useNavigate } from 'react-router-dom';

function CheckOutPage () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user);

  const addAddress = (address)=> {
    dispatch(addAddressAC(address))
  }

  const setShipAddress = (address)=> {
    dispatch(setShipAddressAC(address))

  }

  const placeOrder = ()=> {
    if(order.shipping_address) {
      dispatch(placeOrderAC(order,navigate))
      dispatch(emptyCartAC())
    } else {
      alert('Choose a Shipping Address')
    }
  }

  return (
    <>
    <Nav cartCount={cartItems.length}/>
    <CheckOut order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder}/>
    <Footer />
    </>
  )
}
export default CheckOutPage;