import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import FormField from "../common/FormField";
import ParentDetails from "./ParentDetails";
import PreviousExamDetails from "./PreviousExamDetails";
import student from "../../objects/student";
import StudentDetails from "./StudentDetails";
import { updateStudentRoot } from "../../actions/student";
import { studentRootSchema, validateStudent } from "../../validations/student";

class StudentForm extends Component {
  state = {
    student: {
      ...this.props.student
    },
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    const errors = {};
    let error = Joi.validate(nextProps.student, studentRootSchema).error;
    if (error) {
      const err = error.details[0];
      errors[err.path[0]] = err.message;
    }
    this.setState({
      errors,
      student: {
        ...nextProps.student
      }
    });
  }

  changeHandler = e => {
    const values = {
      [e.target.name]: e.target.value
    };
    this.props.dispatch(updateStudentRoot(values));
  };

  submitHandler = () => {
    if (validateStudent(this.state.student)) {
      console.log("student is OK");
      // save in db and clear fields
    }
  };

  resetHandler = () => {
    this.setState({
      student: {
        ...student
      }
    });
    this.props.dispatch(updateStudentRoot(student));
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col />
          <Col style={{ textAlign: "center" }}>
            <h2>Picasso Coaching Centre</h2>
            <h5>Student Registration</h5>
          </Col>
          <Col />
        </Row>
        <Row style={{ minHeight: "30px" }} />
        <Row>
          <Col>
            <FormField
              type="text"
              placeholder="Class *"
              name="class"
              value={this.state.student.class}
              onChange={this.changeHandler}
              error={this.state.errors.class}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Group"
              name="group"
              value={this.state.student.group}
              onChange={this.changeHandler}
              error={this.state.errors.group}
              disabled={this.state.student.class != "9" && this.state.student.class != "10"}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Roll No *"
              name="rollNo"
              value={this.state.student.rollNo}
              onChange={this.changeHandler}
              error={this.state.errors.rollNo}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="School *"
              name="school"
              value={this.state.student.school}
              onChange={this.changeHandler}
              error={this.state.errors.school}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <StudentDetails {...this.state.student.studentDetails} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ParentDetails {...this.state.student.parentDetails} />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "20px" }}>
            <Button block color="secondary" onClick={this.resetHandler}>
              All Clear
            </Button>
          </Col>
          <Col style={{ marginBottom: "20px" }}>
            <Button block color="primary" onClick={this.submitHandler}>
              Register Student
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => ({
  student: state.student
}))(StudentForm);
