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
              <strong>Saumik Nondi</strong> <i className="icon-user icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col style={{ marginBottom: "20px" }}>
                  <img src={"../../assets/img/avatars/8.jpg"} alt="" />
                </Col>
              </Row>
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
          <div className="quickLink">
            <Button block color="danger">
              Delete Profile
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
