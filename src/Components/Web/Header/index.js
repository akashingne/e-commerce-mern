import { Badge, IconButton, withStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { productContext } from "../../../Context/productProvider";

import "../../../Assets/css/Header.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Header = () => {
  const { cart } = useContext(productContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const checkCart = cart.map((product) => {
      return product.cartQty;
    });
    setCartCount(checkCart?.reduce((sum, curr) => sum + curr, 0));
  }, [cart]);

  return (
    <section className="header">
      <Navbar bg="bark" expand="lg" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className="d-inline p-2 text-white" to="/">
                Home
              </NavLink>
              <NavLink className="d-inline p-2 text-white" to="/shop">
                Shop
              </NavLink>
            </Nav>
            <Nav className="header_cart">
              <NavLink to="/carts" className="cartUrl">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartCount} color="primary">
                    <ShoppingCart />
                  </StyledBadge>
                </IconButton>
              </NavLink>
              <NavLink className="d-inline p-2 text-white" to="/login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
