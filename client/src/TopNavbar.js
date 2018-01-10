import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./blockhead-logo.svg";

const TopNavbar = (props) => {
  let navItems = "";
  if (props.showNavItems) {
    navItems = (
              <div>
                <Nav pullRight>
                  <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
                  <Link to="/main"><Navbar.Text>Main</Navbar.Text></Link>
                  <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
                </Nav>
              </div>
              );

  }
  return (
    <Navbar inverse collapseOnSelect>
      <img src={logo} className="logo" alt="logo" />
      <Navbar.Collapse>
        <Nav pullRight>
          
        </Nav>
        {navItems}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
