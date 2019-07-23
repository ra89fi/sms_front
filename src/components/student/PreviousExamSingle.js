import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <div>
      <Row>
        <Col>
          <FormField type="text" placeholder="Name Of Exam" />
        </Col>

        <Col>
          <FormField type="text" placeholder="Group/Subject" />
        </Col>

        <Col>
          <FormField type="text" placeholder="School" />
        </Col>

        <Col>
          <FormField type="text" placeholder="Board" />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormField type="text" placeholder="Roll No" />
        </Col>

        <Col>
          <FormField type="text" placeholder="Registration No" />
        </Col>

        <Col>
          <FormField type="text" placeholder="GPA/CGPA" />
        </Col>

        <Col>
          <FormField type="text" placeholder="Out Of" />
        </Col>

        <Col>
          <FormField type="text" placeholder="Passing Year" />
        </Col>
      </Row>
    </div>
  );
};
