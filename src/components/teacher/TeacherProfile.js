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
              Saumik Nondi <i className="icon-user-male icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>ID</Col>
                <Col>: 1346345</Col>
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
                <Col>Mobile No</Col>
                <Col>: 9034704096</Col>
              </Row>
            </CardBody>
          </Card>
          <Link to="/teachers/entry/123">
            <Button block color="primary">
              Edit Profile
            </Button>
          </Link>
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
