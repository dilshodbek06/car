import "./new-products.scss";
import Product from "../../components/product/product";

const NewProducts = () => {
  return (
    <div className="my-newProducts">
      <div className="container">
        <h1 className="title">Yangi Mahsulotlar</h1>
        <div className="products-grid">
          <Product term={"NEW"} />
          <Product term={"NEW"} />
          <Product term={"NEW"} />
          <Product term={"NEW"} />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
