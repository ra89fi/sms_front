import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import AttendanceForm from "./AttendanceForm";
import AttendanceTakeForm from "./AttendanceTakeForm";

class AttendanceTake extends Component {
  state = {
    attendanceToggle: true
  };

  ToggleHandler = () => {
    this.setState({ attendanceToggle: !this.state.attendanceToggle });
  };
  render() {
    return (
      <Row>
        <Col>
          {this.state.attendanceToggle ? (
            <AttendanceForm onClick={this.ToggleHandler} />
          ) : (
            <AttendanceTakeForm onClick={this.ToggleHandler} />
          )}
        </Col>
      </Row>
    );
  }
}

export default AttendanceTake;
