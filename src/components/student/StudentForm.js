import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
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
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Student Registration</strong>
                <i className="icon-note icons" />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="3">
                    <FormField
                      type="select"
                      placeholder="Degree *"
                      values={["", "Honors", "Masters"]}
                      name="degree"
                      value={this.state.student.degree}
                      onChange={this.changeHandler}
                      error={this.state.errors.degree}
                    />
                    <FormField
                      type="select"
                      placeholder="Subject *"
                      values={["", "Geography"]}
                      name="subject"
                      value={this.state.student.subject}
                      onChange={this.changeHandler}
                      error={this.state.errors.subject}
                    />
                  </Col>
                  <Col xs="1" />
                  <Col xs="4" style={{ textAlign: "center" }}>
                    <h4>Department Of Geography</h4>
                    {this.state.student.degree && (
                      <p>
                        Degree : <strong>{this.state.student.degree}</strong>
                      </p>
                    )}
                    {this.state.student.subject && (
                      <p>
                        Subject : <strong>{this.state.student.subject}</strong>
                      </p>
                    )}
                    {this.state.student.session && (
                      <p>
                        Session : <strong>{this.state.student.session}</strong>
                      </p>
                    )}
                    <p>
                      Date: <strong>{new Date().toLocaleDateString()}</strong>
                    </p>
                  </Col>
                  <Col xs="1" />
                  <Col xs="3">
                    <FormField
                      type="select"
                      placeholder="Session *"
                      values={["", "2019-20", "2020-21"]}
                      name="session"
                      value={this.state.student.session}
                      onChange={this.changeHandler}
                      error={this.state.errors.session}
                    />
                    <FormField
                      type="text"
                      placeholder="Roll No *"
                      name="rollNo"
                      value={this.state.student.rollNo}
                      onChange={this.changeHandler}
                      error={this.state.errors.rollNo}
                    />
                    <FormField
                      type="text"
                      placeholder="Registration No *"
                      name="regNo"
                      value={this.state.student.regNo}
                      onChange={this.changeHandler}
                      error={this.state.errors.regNo}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
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
          <Col>
            <PreviousExamDetails {...this.state.student.previousExamDetails} />
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
