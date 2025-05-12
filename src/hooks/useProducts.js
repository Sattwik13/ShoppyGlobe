import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProduct = async () => {

      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(response.data);

      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
      }
    };
    
  fetchProduct();
}, []);

  return { products, error };
};

export default useProducts;