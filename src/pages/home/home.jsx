import OfferApps from "../../components/offer-apps/offer-apps";
import Carusel from "../../components/carusel/carusel";
import TopProducts from "../../components/top-products/top-products";
import TopCategories from "../../components/top-categories/top-categories";
import OurProducts from "../../components/our-products/our-products";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "24px" }}>
        <Carusel />
      </div>

      <div style={{ marginTop: "120px" }}>
        {/* top products */}
        <TopProducts />
      </div>
      <div style={{ marginTop: "100px" }}>
        {/* top categories */}
        <TopCategories />
      </div>
      <div style={{ marginTop: "100px" }}>
        <OurProducts />
      </div>
      <div style={{ marginTop: "100px" }}>
        <OfferApps />
      </div>
      <div>{/* our products */}</div>
    </div>
  );
};

export default Home;
