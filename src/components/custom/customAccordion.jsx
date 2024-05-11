/* eslint-disable react/prop-types */
import { useState } from "react";
import "./customAccordion.scss";
import { IoIosArrowDown } from "react-icons/io";

const CustomAccordion = ({ index, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-customAccordion">
      <div className={`accordion ${isOpen ? "active" : ""}`}>
        <div
          className={`accordion-header ${isOpen ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <div className="left-side">
            <p>{index}</p>
            <p>{title}</p>
          </div>

          <span
            className={`material-symbols-outlined ${isOpen ? "active" : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        {isOpen && (
          <div className="accordion-content">
            <p>{children}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAccordion;
