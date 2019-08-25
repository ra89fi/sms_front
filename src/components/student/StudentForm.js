import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import FormField from "../common/FormField";
import ParentDetails from "./ParentDetails";
import StudentDetails from "./StudentDetails";
import { resetStudent, updateStudentRoot } from "../../actions/student";
import { studentRootSchema, validateStudent } from "../../validations/student";
import { fetchStudentsDetails } from "../../actions/studentsDetails";
import { fetchLatestAdmissions } from "../../actions/admissions";
import URI from "../../objects/uri";

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
    if (nextProps.student.class == "9" || nextProps.student.class == "10") {
      if (!nextProps.student.group) {
        errors.group = `"Group" is not allowed to be empty`;
      }
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
    this.props.updateStudentRoot(values);
  };

  submitHandler = () => {
    console.log(this.state.student);
    if (validateStudent(this.state.student)) {
      console.log("student is OK");
      // save in db and clear fields
      fetch(`${URI}/api/student_details`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state.student)
      })
        .then(response => response.text())
        .then(msg => {
          if (msg == "OK") {
            this.props.fetchStudentsDetails();
            this.props.fetchLatestAdmissions();
            this.props.resetStudent();
            this.props.history.push("/student/all");
          }
        })
        .catch(err => console.log(err.message));
    }
  };

  resetHandler = () => {
    this.props.resetStudent();
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <FormField
              type="select"
              placeholder="Class *"
              name="class"
              values={["", "6", "7", "8", "9", "10"]}
              value={this.state.student.class}
              onChange={this.changeHandler}
              error={this.state.errors.class}
            />
            <FormField
              type="text"
              placeholder="Roll No *"
              name="rollNo"
              value={this.state.student.rollNo}
              onChange={this.changeHandler}
              error={this.state.errors.rollNo}
            />
          </Col>
          <Col xs="6" style={{ textAlign: "center" }}>
            <h2>Picasso Coaching Centre</h2>
            <h5>Student Registration</h5>
          </Col>
          <Col>
            <FormField
              type="select"
              placeholder="Group *"
              name="group"
              values={["", "B. Studies", "Humanities", "Science"]}
              value={this.state.student.group}
              onChange={this.changeHandler}
              error={this.state.errors.group}
              disabled={this.state.student.class != "9" && this.state.student.class != "10"}
            />
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
        <Row style={{ minHeight: "30px" }} />
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

export default connect(
  state => ({
    student: state.student
  }),
  { resetStudent, updateStudentRoot, fetchStudentsDetails, fetchLatestAdmissions }
)(StudentForm);
