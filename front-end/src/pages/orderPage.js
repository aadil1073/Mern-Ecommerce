import Footer from '../components/footer';
import Nav from '../components/navbar';
import { useSelector } from 'react-redux';
import Orders from '../components/orders';

function OrderPage () {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.user);
  
  const orders = Array.isArray(user.orders) ? user.orders : [];
  
  const sorted = [...orders].sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)));

  return (
    <>
      <Nav cartCount={cartItems.length} />
      <h2>My Orders</h2>
      {sorted.length > 0 ? (
        sorted.map(order => <Orders key={order.id} items={order.items} order={order} />)
      ) : (
        <p>No orders found.</p> // Optionally, display a message if there are no orders
      )}
      <Footer />
    </>
  );
}

export default OrderPage;
