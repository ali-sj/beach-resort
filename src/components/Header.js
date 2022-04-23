import React, { useState, useRef, useEffect } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  
 
  const handleToggle = () => {
    setIsopen(!isOpen);
  };
 

  return (
    <nav className="navbars">
    
      <div className="navbar-center">
        <div className="nav-header">
          <button
            
            onClick={handleToggle}
            type="button"
            className="nav-btn"
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
      </div>
              

      <ul className={isOpen ? "nav-links show-navs" : "nav-links"}>

        <Link className="link" to="/">
          <li> Home </li>
        </Link>
        <Link className="link" to="/rooms">
          <li> Rooms </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
