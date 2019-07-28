import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import FormField from "../common/FormField";

const exam = {
  id: "290674289367",
  degree: "Honors",
  subject: "Geography",
  session: "2019-20",
  date: "7/12/2019",
  name: "Exam Name",
  description: "Description",
  marks: {},
  notes: {}
};

class ExamMarks extends React.Component {
  state = {
    total: "",
    highest: "",
    marks: {
      11152622: ""
    },
    notes: {
      11152622: ""
    }
  };

  changeHandler = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  updateMarks = (e, id) => {
    this.setState({
      marks: {
        ...this.state.marks,
        [id]: e.target.value
      }
    });
  };

  updateNotes = (e, id) => {
    this.setState({
      notes: {
        ...this.state.notes,
        [id]: e.target.value
      }
    });
  };

  submitHandler = () => {
    console.log(this.state);
    // validate and send to server
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Entry Marks</strong> <i className="icon-note icons" />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <Row>
                      <Col>Degree</Col>
                      <Col>
                        : <strong>{exam.degree}</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Subject</Col>
                      <Col>
                        : <strong>{exam.subject}</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Session</Col>
                      <Col>
                        : <strong>{exam.session}</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Date</Col>
                      <Col>
                        : <strong>{exam.date}</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Exam Name</Col>
                      <Col>
                        : <strong>{exam.name}</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Exam Description</Col>
                      <Col>
                        : <strong>{exam.description}</strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col />
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Total Marks"
                      name="total"
                      value={this.state.total}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Highest"
                      name="highest"
                      value={this.state.value}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Roll No</th>
                          <th>Student Name</th>
                          <th>Obtained</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>11152622</td>
                          <td>saumik</td>
                          <td className="removeMarginBottom">
                            <FormField
                              type="text"
                              placeholder="Marks"
                              name="11152622"
                              value={this.state.marks["11152622"]}
                              onChange={e => this.updateMarks(e, "11152622")}
                            />
                          </td>
                          <td className="removeMarginBottom">
                            <FormField
                              placeholder="Notes"
                              type="text"
                              name="11152622"
                              value={this.state.notes["11152622"]}
                              onChange={e => this.updateNotes(e, "11152622")}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ minHeight: "20px" }} />
                </Row>
                <Row>
                  <Col />
                  <Col>
                    <Button block color="primary" onClick={this.submitHandler}>
                      Submit
                    </Button>
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

export default ExamMarks;
