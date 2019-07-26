import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import AttendanceTakeAttForm from "./AttendanceTakeAttForm";
import AttendanceTakeSelForm from "./AttendanceTakeSelForm";

class AttendanceTake extends Component {
  state = {
    formOpen: true
  };

  handleClick = () => {
    this.setState({ formOpen: !this.state.formOpen });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            {this.state.formOpen ? (
              <AttendanceTakeSelForm onClick={this.handleClick} />
            ) : (
              <AttendanceTakeAttForm onClick={this.handleClick} />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AttendanceTake;
