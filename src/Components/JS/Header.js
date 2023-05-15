/** @format */
import { Link } from "react-router-dom";
import "../css/Header.css";
import React from "react";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header__Container container-fluid ">
      <div className="header  container-fluid col-10 ">
        <div className="header__navLeft ">
          <Link to="/" className="header__Link p-2 ">
            <div className="header__logo p-2 " />
          </Link>

          <div className="header__option__location d-none d-md-block">
            <div className="header__placeIcon " />
            <div className="header__option">
              <span className="header__optionLineOne">Deliver to</span>
              <span className="header__optionLineTwo">Germany</span>
            </div>
          </div>
        </div>
        {/*====================== Search container Start ===========*/}

        <div className="header__search">
          <select className="nav__dropdown d-none d-md-block">
            <option value="All">All</option>
            <option value="Alexa">Alexa</option>
            <option value="Books">Books</option>
            <option value="Baby">Baby</option>
            <option value="Beauty">Beauty</option>
            <option value="Clothes">Clothes</option>
          </select>
          <input
            className="header__searchInput"
            type="text"
            placeholder=" Search Amazon"
          />
          <div className="navbar__seaarchboxdiv">
            <div className="header__searchIcon" />
          </div>
        </div>

        {/*====================== Search container end ===========*/}

        <div className="header__navRight">
          <Link to={!user && "/login"} className="header__clearLink">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user?.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="header__clearLink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__clearLink">
            <div className="header__optionBasket">
              <span className="ShoppingBasketIcon"></span>
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar__footer">
        <div className="navbar__footer_text">
          <div className="navbar__footerIcon" /> All
        </div>
        <div className="navbar__footer_text">Best Seller</div>
        <div className="navbar__footer_text">Mobile</div>
        <div className="navbar__footer_text">Amazon Pay</div>
        <div className="navbar__footer_text">Fashion</div>
        <div className="navbar__footer_text">Electronics</div>
        <div className="navbar__footer_text">Prime</div>
        <div className="navbar__footer_text">New Release</div>
        <div className="navbar__footer_text">Customer Service</div>
        <div className="navbar__footer_text">Computers</div>
        <div className="navbar__footer_text">Home & Kitchen</div>
      </div>
    </div>
  );
}

export default Header;


