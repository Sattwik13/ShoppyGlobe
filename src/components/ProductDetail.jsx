import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError('Failed to fetch product details. Please try again later.');
    }
  };

  fetchProductDetails();
}, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  return (

  <section >
    <div className="mx-auto max-h-screen-xl max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-linear-to-t from-indigo-900 to-gray-800">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
        <div className="md:col-span-3">
          <img
            src={product.image}
            className="rounded"
            alt={product.title}
            loading="lazy"
          />
        </div>

        <div className="md:col-span-1  ">
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-2xl font-semibold text-gray-200 sm:text-3xl">
              {product.title}
            </h2>

            <p className="mt-4 font-mono text-gray-300">
              {product.description}
            </p>
          
          </div>
          <br />
          <button className="relative block group ">
            <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
            <div className="transition bg-linear-to-t from-gray-800 to-indigo-900 border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2 ">
                <p className="text-xl text-gray-50 font-outerSans font-medium">Buy now</p>
              </div>
            </div>
          </button>

        </div>
      </div>
    </div>
  </section>
  );
};

export default ProductDetail;