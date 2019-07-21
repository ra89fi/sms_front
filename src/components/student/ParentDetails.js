import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <Card>
      <CardHeader>
        <strong>Parent Details</strong>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <strong>Father</strong>
            <p />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField type="text" placeholder="First Name" />
          </Col>

          <Col>
            <FormField type="text" placeholder="Last Name" />
          </Col>

          <Col>
            <FormField type="text" placeholder="Profession" />
          </Col>

          <Col>
            <FormField type="text" placeholder="Mobile No" />
          </Col>
        </Row>

        <Row>
          <Col>
            <strong>Mother</strong>
            <p />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField type="text" placeholder="First Name" />
          </Col>

          <Col>
            <FormField type="text" placeholder="Last Name" />
          </Col>

          <Col>
            <FormField type="text" placeholder="Profession" />
          </Col>

          <Col>
            <FormField type="text" placeholder="Mobile No" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
