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

  changeHandler = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <div className="animated fade-in">
        <Row>
          <Col xs="3">
            <FormField
              type="select"
              placeholder="Select Student"
              name="student"
              values={["", "Raihan"]}
              value={this.state.student}
              onChange={this.changeHandler}
            />
            <FormField
              type="select"
              placeholder="Select Exam"
              name="exam"
              values={["", "Test-3"]}
              value={this.state.exam}
              onChange={this.changeHandler}
            />
            <Button block color="primary" onClick={this.addExam}>
              Show Result
            </Button>
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
                  <Col>
                    <Row>
                      <Col>
                        <h5>Name</h5>
                      </Col>
                      <Col>
                        <h5>
                          : <strong>Raihan</strong>
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h5>Roll No</h5>
                      </Col>
                      <Col>
                        <h5>
                          : <strong>1346345</strong>
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h5>Session</h5>
                      </Col>
                      <Col>
                        <h5>
                          : <strong>2019-20</strong>
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h5>Degree</h5>
                      </Col>
                      <Col>
                        <h5>
                          : <strong>Honors</strong>
                        </h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h5>Subject</h5>
                      </Col>
                      <Col>
                        <h5>
                          : <strong>Geography</strong>
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {/* header */}
                    <Row className="row-styles">
                      <Col xs="2">Name of Subject</Col>
                      <Col xs="4">
                        <Row>
                          <Col />
                          <Col>Marks</Col>
                          <Col />
                        </Row>
                        <Row>
                          <Col>Marks</Col>
                          <Col>Obtained</Col>
                          <Col>Total</Col>
                          <Col>Highest</Col>
                        </Row>
                      </Col>
                      <Col xs="1">Out of 100</Col>
                      <Col xs="1">Letter Grade</Col>
                      <Col xs="1">Grade Points</Col>
                      <Col xs="1" className="col-styles">
                        GPA
                      </Col>
                      <Col xs="1" className="col-styles">
                        Grade
                      </Col>
                      <Col xs="1" className="col-styles">
                        Total Marks
                      </Col>
                    </Row>
                    {/* data */}
                    <Row>
                      <Col>
                        <Row className="row-styles">
                          <Col xs="2">Mathematics (Creative)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>50</Col>
                              <Col>13</Col>
                              <Col>13</Col>
                              <Col>50</Col>
                            </Row>
                          </Col>
                          <Col xs="1">26</Col>
                          <Col xs="1">F</Col>
                          <Col xs="1">0</Col>
                        </Row>
                        <Row className="row-styles">
                          <Col xs="2">English 2nd Paper</Col>
                          <Col xs="4">
                            <Row>
                              <Col>50</Col>
                              <Col>37</Col>
                              <Col>37</Col>
                              <Col>44</Col>
                            </Row>
                          </Col>
                          <Col xs="1">74</Col>
                          <Col xs="1">A</Col>
                          <Col xs="1">4</Col>
                        </Row>
                        <Row className="row-styles">
                          <Col xs="2">Bengali 1st Paper (Creative)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>30</Col>
                              <Col>12</Col>
                              <Col>24</Col>
                              <Col>26</Col>
                            </Row>
                          </Col>
                          <Col xs="1">48</Col>
                          <Col xs="1">C</Col>
                          <Col xs="1">2</Col>
                        </Row>
                        <Row>
                          <Col xs="2">Bengali 2nd Paper (Objective)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>20</Col>
                              <Col>12</Col>
                              <Col />
                              <Col>19</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="row-styles">
                          <Col xs="2">Accounting (Creative)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>30</Col>
                              <Col>21</Col>
                              <Col>35</Col>
                              <Col>28</Col>
                            </Row>
                          </Col>
                          <Col xs="1">70</Col>
                          <Col xs="1">A</Col>
                          <Col xs="1">4</Col>
                        </Row>
                        <Row>
                          <Col xs="2">Accounting (Objective)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>20</Col>
                              <Col>14</Col>
                              <Col />
                              <Col>18</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="row-styles">
                          <Col xs="2">Business E. (Creative)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>30</Col>
                              <Col />
                              <Col>0</Col>
                              <Col>22</Col>
                            </Row>
                          </Col>
                          <Col xs="1">0</Col>
                          <Col xs="1">F</Col>
                          <Col xs="1">0</Col>
                        </Row>
                        <Row>
                          <Col xs="2">Business E. (Objective)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>20</Col>
                              <Col />
                              <Col />
                              <Col>17</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="row-styles">
                          <Col xs="2">Science (Creative)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>30</Col>
                              <Col />
                              <Col>0</Col>
                              <Col>29</Col>
                            </Row>
                          </Col>
                          <Col xs="1">0</Col>
                          <Col xs="1">F</Col>
                          <Col xs="1">0</Col>
                        </Row>
                        <Row>
                          <Col xs="2">Science (Objective)</Col>
                          <Col xs="4">
                            <Row>
                              <Col>20</Col>
                              <Col />
                              <Col />
                              <Col>20</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="1" className="col-styles" />
                      <Col xs="1" className="col-styles" />
                      <Col xs="1" className="col-styles" />
                    </Row>
                  </Col>
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
