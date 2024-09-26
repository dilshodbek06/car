import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="min-h-[70px] border-b shadow-sm flex items-center ">
      <div className="container  mx-auto flex items-center justify-between">
        <Logo />
        <button className="hover:bg-gray-100 rounded-full p-2">
          <RxHamburgerMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
