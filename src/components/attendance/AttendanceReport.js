import React from "react";
import Joi from "@hapi/joi";
import AttendanceReportForm from "./AttendanceReportForm";
import AttendanceReportView from "./AttendanceReportView";

const attendanceSelectionSchema = {
  class: Joi.string().required(),
  group: Joi.any().optional(),
  subject: Joi.string().required(),
  dateFrom: Joi.string().required(),
  dateTo: Joi.string().required()
};

class AttendanceReport extends React.Component {
  state = {
    formOpen: true,
    selections: {},
    errors: {}
  };

  handleSubmit = () => {
    // validate selections here
    console.log(this.state.selections);
    let error = Joi.validate(this.state.selections, attendanceSelectionSchema).error;
    if (error) {
      const err = error.details[0];
      this.setState({ errors: { [err.path[0]]: err.message } });
      return;
    }
    const className = this.state.selections.class;
    if (className == "9" || className == "10") {
      if (!this.state.selections.group) {
        this.setState({ errors: { group: '"Group" is required' } });
        return;
      }
    }
    this.setState({ formOpen: !this.state.formOpen, errors: {} });
  };

  handleBackClick = () => this.setState({ formOpen: !this.state.formOpen });

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
          <AttendanceReportForm
            onSubmit={this.handleSubmit}
            onChange={this.changeHandler}
            errors={this.state.errors}
            {...this.state.selections}
          />
        ) : (
          <AttendanceReportView
            backClick={this.handleBackClick}
            {...this.state.selections}
            history={this.props.history}
          />
        )}
      </div>
    );
  }
}

export default AttendanceReport;
