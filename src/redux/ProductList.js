import useProducts from '../hooks/useProducts';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { products, error } = useProducts();
  const query = useSelector((state) => state.search.query.toLowerCase());

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;