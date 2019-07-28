import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="4">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Saumik Nondi</strong> <i className="icon-user icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>ID</Col>
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
                <Col>Mobile No</Col>
                <Col>
                  : <strong>9034704096</strong>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Link to="/teachers/entry/123">
            <Button color="warning">Edit Profile</Button>
          </Link>
          &nbsp;
          <Button color="danger">Delete Teacher</Button>
        </Col>
      </Row>
    </div>
  );
};
