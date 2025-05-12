import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = total * 0.18;
  const grandTotal = total + tax;

  return (
    <>
    <main className="min-h-screen  bg-linear-to-t from-indigo-900 to-gray-800 dark:bg-gray-900 text-white p-6">
      <cart />
      <div className="max-w-3xl mt-15 mx-auto  bg-linear-to-t from-gray-800 to-indigo-900 dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>

        <div className="mt-6 border-t border-gray-700 pt-4 text-right space-y-2">
          <div className="flex justify-between text-sm text-gray-300">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-300">
            <span>Tax (18%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-indigo-800 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-200"
        >
          Proceed to Payment
        </button>
      </div>
    </main>
    </>
  );
};

export default CheckoutPage;
