import { IconButton } from "@material-ui/core";
import { Facebook, LinkedIn, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import "../../../Assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_social">
            <ul>
              <li>
                <IconButton>
                  <Facebook />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <Twitter />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <Pinterest />
                </IconButton>
              </li>
            </ul>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/carts">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_mainFooter text-center">
        <p>KSPL @2020. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
