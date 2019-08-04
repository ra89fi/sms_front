import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import AttendanceTakeAttForm from "./AttendanceTakeAttForm";
import AttendanceTakeSelForm from "./AttendanceTakeSelForm";

class AttendanceTake extends Component {
  state = {
    formOpen: true,
    selections: {}
  };

  handleClick = () => {
    this.setState({ formOpen: !this.state.formOpen });
  };

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
        {this.state.formOpen ? (
          <AttendanceTakeSelForm
            onClick={this.handleClick}
            onChange={this.changeHandler}
            {...this.state.selections}
          />
        ) : (
          <AttendanceTakeAttForm onClick={this.handleClick} {...this.state.selections} />
        )}
      </div>
    );
  }
}

export default AttendanceTake;
