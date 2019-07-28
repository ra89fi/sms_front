import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

const student = {
  id: "29067429867473",
  degree: "Honors",
  subject: "Geography",
  session: "2013-14",
  rollNo: "11152622",
  regNo: "4685867",
  name: "Raihan",
  mobileNo: "9034704096",
  email: "test@email.com"
};

class ResultCoaching extends React.Component {
  state = {
    student: "",
    exam: "",
    subject: ""
  };

  changeStudent = e =>
    this.setState({
      student: e.target.value
    });

  render() {
    return (
      <div className="animated fade-in">
        <Row>
          <Col>
            <Row>
              <Col>
                <FormField
                  type="select"
                  placeholder="Select Student"
                  name="student"
                  values={["", "Raihan"]}
                  value={this.state.student}
                  onChange={this.changeStudent}
                />
              </Col>
              <Col>
                <FormField
                  type="select"
                  placeholder="Select Exam"
                  name="exam"
                  values={["", "Test-3"]}
                  value={this.state.exam}
                  onChange={this.changeexam}
                />
              </Col>
              <Col>
                <FormField
                  type="select"
                  placeholder="Select Subject"
                  name="subject"
                  values={["", "Geography"]}
                  value={this.state.subject}
                  onChange={this.changesubject}
                />
              </Col>
            </Row>
            <Row>
              <Col />
              <Col>
                <Button block color="primary" onClick={this.addExam}>
                  Add To Result
                </Button>
              </Col>
              <Col />
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Result - Coaching</strong> <i className="icon-list icons" />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col />
                  <Col>
                    <Row>
                      <Col>Name</Col>
                      <Col>
                        : <strong>Raihan</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Roll No</Col>
                      <Col>
                        : <strong>1346345</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Degree</Col>
                      <Col>
                        : <strong>Honors</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Subject</Col>
                      <Col>
                        : <strong>Geography</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Session</Col>
                      <Col>
                        : <strong>2019-20</strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultCoaching;
