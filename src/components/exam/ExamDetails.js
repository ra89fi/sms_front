import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";

const exam = {
  id: "290674289367",
  degree: "Honors",
  subject: "Geography",
  session: "2019-20",
  date: "7/12/2019",
  name: "Exam Name",
  description: "Description",
  marks: {}
};

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam Details</strong> <i className="icon-docs icons" />
            </CardHeader>
            <CardBody>
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
            </CardBody>
          </Card>
          <Row>
            <Col>
              <Link to={`/exams/entry/${exam.id}`}>
                <Button color="warning">Edit Exam</Button>
              </Link>
              &nbsp;
              <Button color="danger">Delete Exam</Button>&nbsp;
              {Object.keys(exam.marks).length ? (
                <Link to={`/exams/marks/${exam.id}`}>
                  <Button color="primary">Entry marks</Button>
                </Link>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Col>
        <Col />
        <Col />
      </Row>
      <Col style={{ minHeight: "30px" }} />
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Marks Details</strong> <i className="icon-list icons" />
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Roll No</th>
                    <th>Student Name</th>
                    <th>Marks</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11152622</td>
                    <td>saumik</td>
                    <td>30</td>
                    <td>Excellent</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
