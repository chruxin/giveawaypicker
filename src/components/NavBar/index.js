import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="bg-faded">
        <div className="container">
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand to={baseUrl + "/"} tag={RRNavLink}>Giveaway Picker</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to={baseUrl + "/instagram"} activeClassName="active" tag={RRNavLink}>INSTAGRAM</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={baseUrl + "/facebook"} activeClassName="active" tag={RRNavLink}>FACEBOOK</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
