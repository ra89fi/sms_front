import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam Details</strong> <i className="icon-docs icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>Degree</Col>
                <Col>: Honors</Col>
              </Row>
              <Row>
                <Col>Subject</Col>
                <Col>: Geography</Col>
              </Row>
              <Row>
                <Col>Session</Col>
                <Col>: 2019-20</Col>
              </Row>
              <Row>
                <Col>Date</Col>
                <Col>: 7/12/2019</Col>
              </Row>
              <Row>
                <Col>Exam Name</Col>
                <Col>: Exam Name</Col>
              </Row>
              <Row>
                <Col>Exam Description</Col>
                <Col>: Exam Description</Col>
              </Row>
            </CardBody>
          </Card>
          <Row>
            <Col>
              <Link to="/exams/entry/123">
                <Button color="warning">Edit Exam</Button>
              </Link>
              &nbsp;
              <Button color="danger">Delete Exam</Button>
              &nbsp;
              <Link to="/exams/marks/123">
                <Button color="primary">Entry marks</Button>
              </Link>
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

                  <tr>
                    <td>11152622</td>
                    <td>saumik</td>
                    <td>30</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td>11152622</td>
                    <td>saumik</td>
                    <td>30</td>
                    <td>Excellent</td>
                  </tr>
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
