import "./header.scss";
import { LuSearch } from "react-icons/lu";
import brandLogo from "../../images/brand.svg";
import cartLogo from "../../images/cart.svg";
import heartLogo from "../../images/heart.svg";
import userLogo from "../../images/user.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const menus = [
    {
      id: 1,
      name: "Bosh sahifa",
      url: "/",
    },
    {
      id: 2,
      name: "Kategoriyalar",
      url: "/categories",
    },
    {
      id: 3,
      name: "Yangi mahsulotlar",
      url: "/products/new",
    },
    {
      id: 4,
      name: "Chegirmalar",
      url: "/discounts",
    },
    {
      id: 5,
      name: "Ijtimoiy tarmoq",
      url: "/",
    },
  ];
  return (
    <header className="my-header">
      {/* top */}
      <div className="top-header">
        <div className="container">
          <div className="brand-wrapper">
            <img className="" src={brandLogo} alt="brand logo" />
            <h1 className="">Zap-chast.uz</h1>
          </div>
          <div className="input-wrapper">
            <input className="" type="text" placeholder="Qidirish..." />
            <LuSearch className="search-btn" />
          </div>
          <div className="buttons-wrapper">
            <button className="cart-btn">
              <div className="cart-inner">
                <img src={cartLogo} alt="cart" />
                <h5 className="">Cart</h5>
              </div>
              <div className="quantity-btn">2</div>
            </button>
            <button className="like-btn">
              <img className="" src={heartLogo} alt="heart icon" />
            </button>
            <button className="user-btn">
              <img className="" src={userLogo} alt="user icon" />
            </button>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bottom-header">
        <div className="container">
          <div className="menus-wrapper">
            <div className="dropdown-btn">
              <RxHamburgerMenu className="dropdown-icon" />
              <p className="">Mahsulotlar</p>
            </div>
            <ul className="menu-list">
              {menus?.map((menu) => (
                <li key={menu.id} className="">
                  {menu?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-wrapper">
            <p>
              Contact: <span>+99 888 111 47 47</span>
            </p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </header>
  );
};

export default Header;
