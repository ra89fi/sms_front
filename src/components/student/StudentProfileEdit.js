import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import StudentDetails from "./StudentDetails";
import { updateStudentDetails, resetStudent } from "../../actions/student";
import { studentDetailsSchema } from "../../validations/student";

class EditStudentProfile extends React.Component {
  state = {
    student: this.props.studentDetails
  };

  componentDidMount() {
    const details = {};
    Object.keys(this.state.student).forEach(key => (details[key] = this.props.student[key]));
    this.props.updateStudentDetails(details, "studentDetails");
  }

  componentWillUnmount() {
    this.props.resetStudent();
  }

  static getDerivedStateFromProps(nextProps) {
    return { student: nextProps.studentDetails };
  }

  handleSubmit = () => {
    // validate studentDetails
    const { error } = Joi.validate(this.state.student, studentDetailsSchema);
    if (error) {
      return;
    }
    // send to server for update
    console.log(this.state.student);
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <StudentDetails {...this.state.student} />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <Button block color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Col>
          <Col />
        </Row>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    studentDetails: state.student.studentDetails,
    student: state.studentsDetails.filter(item => item.id == props.match.params.id)[0] || {}
  }),
  { updateStudentDetails, resetStudent }
)(EditStudentProfile);
