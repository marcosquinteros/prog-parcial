import ProductsList from "../Components/ProductsList";

const Products = ({ products }) => {
  return (
    <div className="productos-container">
      <ProductsList pathError="/*" />
    </div>
  );
};

export default Products;
