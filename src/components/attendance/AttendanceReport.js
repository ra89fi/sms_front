import React from "react";
import { Row, Col } from "reactstrap";
import AttendanceReportForm from "./AttendanceReportForm";
import AttendanceReportView from "./AttendanceReportView";

class AttendanceReport extends React.Component {
  state = {
    formOpen: true,
    selections: {}
  };

  handleClick = () => this.setState({ formOpen: !this.state.formOpen });

  changeHandler = e => {
    this.setState({
      selections: {
        ...this.state.selections,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            {this.state.formOpen ? (
              <AttendanceReportForm
                onClick={this.handleClick}
                onChange={this.changeHandler}
                {...this.state.selections}
              />
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
