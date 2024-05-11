import Product from "../../components/product/product";
import "./discounts.scss";

const Discounts = () => {
  return (
    <div className="my-discounts">
      <div className="container">
        <h1 className="title">Chegirmalar</h1>
        <div className="products-grid">
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <Product term={"-30%"} />
        </div>
      </div>
    </div>
  );
};

export default Discounts;
