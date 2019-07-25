import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";
import ParentDetails from "./ParentDetails";
import PreviousExamDetails from "./PreviousExamDetails";
import student from "../../objects/student";
import StudentDetails from "./StudentDetails";
import { updateStudentRoot } from "../../actions/student";

class StudentForm extends Component {
  state = {
    ...this.props.student
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      ...nextProps.student
    };
  }

  changeHandler = e => {
    const values = {
      [e.target.name]: e.target.value
    };
    this.props.dispatch(updateStudentRoot(values));
  };

  submitHandler = () => {};
  resetHandler = () => {
    this.setState({
      ...student
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
                      value={this.state.degree}
                      onChange={this.changeHandler}
                    />
                    <FormField
                      type="select"
                      placeholder="Subject *"
                      values={["", "Geography"]}
                      name="subject"
                      value={this.state.subject}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col xs="1" />
                  <Col xs="4" style={{ textAlign: "center" }}>
                    <h4>Department Of Geography</h4>
                    {this.state.degree && (
                      <p>
                        Degree : <strong>{this.state.degree}</strong>
                      </p>
                    )}
                    {this.state.subject && (
                      <p>
                        Subject : <strong>{this.state.subject}</strong>
                      </p>
                    )}
                    {this.state.session && (
                      <p>
                        Session : <strong>{this.state.session}</strong>
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
                      value={this.state.session}
                      onChange={this.changeHandler}
                    />
                    <FormField
                      type="text"
                      placeholder="Roll No *"
                      name="rollNo"
                      value={this.state.rollNo}
                      onChange={this.changeHandler}
                    />
                    <FormField
                      type="text"
                      placeholder="Registration No *"
                      name="regNo"
                      value={this.state.regNo}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <StudentDetails {...this.state.studentDetails} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ParentDetails {...this.state.parentDetails} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PreviousExamDetails {...this.state.previousExamDetails} />
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
