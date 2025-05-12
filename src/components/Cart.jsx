import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  if (!items.length) return <div className="p-4">Your cart is empty.</div>;

  return (
    <div className="p-4 bg-gray-900">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;