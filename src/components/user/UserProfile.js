import React from "react";
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
                <Col>Name</Col>
                <Col>
                  : <strong>Raihan</strong>
                </Col>
              </Row>
              <Row>
                <Col>Email</Col>
                <Col>
                  : <strong>test@email.com</strong>
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
