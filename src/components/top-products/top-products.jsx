import "./top-products.scss";
import Product from "../product/product";

const TopProducts = () => {
  return (
    <div className="my-topProducts">
      <div className="container">
        <div className="title-wrapper">
          <h1>Top Mahsulotlar</h1>
        </div>
        <div className="products-grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="more-wrapper">
          <button>Ko’proq ko’rish</button>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
