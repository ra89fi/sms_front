import React from "react";
import { Row, Col } from "reactstrap";
import AttendanceReportForm from "./AttendanceReportForm";
import AttendanceReportView from "./AttendanceReportView";

class AttendanceReport extends React.Component {
  state = {
    formOpen: true,
    selections: {
      class: "Honors",
      subject: "Geography",
      session: "2019-20",
      from: "7/1/2019",
      to: "7/12/2019"
    }
  };

  handleClick = () => this.setState({ formOpen: !this.state.formOpen });

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            {this.state.formOpen ? (
              <AttendanceReportForm onClick={this.handleClick} {...this.state.selections} />
            ) : (
              <AttendanceReportView onClick={this.handleClick} {...this.state.selections} />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AttendanceReport;
