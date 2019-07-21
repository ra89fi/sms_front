import React from "react";
import { Row, Col } from "reactstrap";
import AttendanceReportForm from "./AttendanceReportForm";
import ShowAttendanceReport from "./ShowAttendanceReport";

class AttendanceReport extends React.Component {
  state = {
    formOpen: true,
    selections: {
      class: "",
      subject: "",
      session: "",
      from: "",
      to: ""
    }
  };

  handleClick = () => this.setState({ formOpen: !this.state.formOpen });

  render() {
    return (
      <div>
        <Row>
          <Col>
            {this.state.formOpen ? (
              <AttendanceReportForm onClick={this.handleClick} {...this.state.selections} />
            ) : (
              <ShowAttendanceReport onClick={this.handleClick} {...this.state.selections} />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AttendanceReport;
