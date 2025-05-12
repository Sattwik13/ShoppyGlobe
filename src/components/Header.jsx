import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/searchSlice';
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-1 bg-gradient-to-t from-indigo-900 to-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex-1 flex items-center gap-2">
            <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/fast-cart.png" alt="fast-cart" />
            <Link to="/" className="text-xl bg-gradient-to-r from-indigo-800 to-gray-700 p-2 rounded-xl text-amber-500 font-bold dark:text-amber-50 transition-colors duration-600">
              ShoppyGlobe
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden  md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <input
                    type="text"
                    aria-label="Search products"
                    placeholder="Search products..."
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    className="px-2 py-1 rounded-xl font-mono bg-white text-gray-800"
                  />
                </li>

                <li className="relative">
                  <Link to="/cart" className="text-gray-500 font-semibold hover:text-gray-500/75 dark:text-white dark:hover:text-indigo-400">
                    <MdShoppingCart size={25} />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-rose-800 text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </li>

                <li>
                  <Link to="/checkout" className="text-gray-500 font-semibold hover:text-gray-500/75 dark:text-white dark:hover:text-indigo-400">
                    Checkout
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="text-gray-500 font-semibold hover:text-gray-500/75 dark:text-white dark:hover:text-indigo-400">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="text-gray-500 font-semibold hover:text-gray-500/75 dark:text-white dark:hover:text-indigo-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Sign In/Register */}
            <div className="flex items-center gap-4">
              <Link to="/login" className="group relative inline-block">
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-50 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="relative inline-block border-2 border-indigo-500 px-5 py-3 text-sm font-bold tracking-widest text-gray-700 uppercase">
                  Sign In
                </span>
              </Link>

              <Link to="/register" className="group relative inline-block">
                 <span
                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-50 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                  ></span>

                  <span
                    className="relative inline-block border-2 border-indigo-500 px-5 py-3 text-sm font-bold tracking-widest text-gray-700 uppercase"
                  >
                  Register
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-sm bg-gray-100 p-2 text-gray-600 dark:bg-gray-800 dark:text-white"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="mt-4 md:hidden ">
            <ul className="flex flex-col gap-4 text-sm text-white">
              <li>
                <input
                  type="text"
                  aria-label="Search products"
                  placeholder="Search products..."
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                  className="px-2 py-1 rounded-xl font-mono bg-white text-gray-800"
                />
              </li>
              <li><Link to="/cart">Cart ({cartCount})</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>

   
  );
};

export default Header;
