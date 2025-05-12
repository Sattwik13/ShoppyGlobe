import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { products, error } = useProducts();
  const query = useSelector((state) => state.search.query.toLowerCase());

  // Filter by title, description, or category
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4bg-linear-to-t from-indigo-900 to-gray-800 dark:bg-gray-900">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No products found.
        </div>
      )}
    </div>
  );
};

export default ProductList;