import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";

const exam = {
  id: "290674289367",
  class: "Five",
  group: "",
  subject: "English",
  date: "7/12/2019",
  name: "Exam Name",
  description: "Description",
  marks: {}
};

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="4">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam Details</strong> <i className="icon-docs icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>Class</Col>
                <Col>
                  : <strong>{exam.class}</strong>
                </Col>
              </Row>
              <Row>
                <Col>Group</Col>
                <Col>
                  : <strong>{exam.group}</strong>
                </Col>
              </Row>
              <Row>
                <Col>Subject</Col>
                <Col>
                  : <strong>{exam.subject}</strong>
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
            <Col className="quickLink">
              <Link to={`/exams/entry/${exam.id}`}>
                <Button block color="warning">
                  Edit Exam
                </Button>
              </Link>
            </Col>
            <Col>
              <Button block color="danger">
                Delete Exam
              </Button>
            </Col>
            {Object.keys(exam.marks).length ? (
              <Col className="quickLink">
                <Link to={`/exams/marks/${exam.id}`}>
                  <Button block color="primary">
                    Entry marks
                  </Button>
                </Link>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Col>
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
