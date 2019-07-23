import React, { Component } from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";
import ParentDetails from "./ParentDetails";
import PreviousExamDetails from "./PreviousExamDetails";
import StudentDetails from "./StudentDetails";

class StudentForm extends Component {
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
                    <FormField type="select" placeholder="Degree" values={["JSC", "SSC", "HSC"]} />
                    <FormField
                      type="select"
                      placeholder="Subject"
                      values={["Option1", "Option2"]}
                    />
                    <FormField
                      type="select"
                      placeholder="Session"
                      values={["Option1", "Option2"]}
                    />
                  </Col>
                  <Col xs="1" />
                  <Col xs="4" style={{ textAlign: "center" }}>
                    <h4>Student Registration</h4>
                    <p>Date: {new Date().toLocaleDateString()}</p>
                  </Col>
                  <Col xs="1" />
                  <Col xs="3">
                    <FormField type="select" placeholder="Class" values={["Option1", "Option2"]} />
                    <FormField type="text" placeholder="Roll No" />
                    <FormField type="text" placeholder="Registration No" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <StudentDetails />
          </Col>
        </Row>
        <Row>
          <Col>
            <ParentDetails />
          </Col>
        </Row>
        <Row>
          <Col>
            <PreviousExamDetails />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "20px" }}>
            <Button block color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentForm;
