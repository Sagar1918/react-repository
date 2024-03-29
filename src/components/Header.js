import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

/** Here, we are importing the named exported variable, So it should be wrapped in b/w
 * Curly braces{} while importing
 */

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "#282c3f" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#282c3f" }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#282c3f" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#282c3f" }}
              to="/cart"
            >
              Cart - {cartItems.length}
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#282c3f" }}
              to="/login"
            >
              LogIn
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
