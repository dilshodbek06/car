import OfferApps from "../../components/offer-apps/offer-apps";
import Carusel from "../../components/carusel/carusel";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "24px" }}>
        <Carusel />
      </div>
      <div style={{ marginTop: "200px" }}>
        <OfferApps />
      </div>
    </div>
  );
};

export default Home;
