import React, { Component } from "react";
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from "reactstrap";
import PropTypes from "prop-types";

import { AppSidebarToggler } from "@coreui/react";
// import logo from "../../assets/img/brand/logo.svg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <h6 style={{ position: "relative", left: "40px", marginRight: "60px" }}>Geography</h6>
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src={"../../assets/img/avatars/6.jpg"}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem onClick={e => this.props.onProfile(e)}>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
