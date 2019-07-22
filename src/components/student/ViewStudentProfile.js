import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="3">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              Sumaya Akter Brishti <i className="icon-user-female icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>Roll No</Col>
                <Col>: 1346345</Col>
              </Row>
              <Row>
                <Col>Registration No</Col>
                <Col>: 16435634</Col>
              </Row>
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
                <Col>Reg. Date</Col>
                <Col>: 7/12/2019</Col>
              </Row>
            </CardBody>
          </Card>
          <Link to="/student/edit/123">
            <Button color="warning">Edit Profile</Button>
          </Link>
          &nbsp;
          <Button color="danger">Delete Student</Button>
        </Col>
        <Col xs="9">
          <Card>
            <CardBody>Info here</CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
