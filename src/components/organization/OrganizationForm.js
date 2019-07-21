import React from "react";
import { Button, Row, Col } from "reactstrap";
import FormField from "../common/FormField";
import OrganizationDetails from "../organization/OrganizationDetails";

export default () => {
  return (
    <div>
      <Row>
        <Col xs="3">
          <FormField
            type="select"
            placeholder="Organization Type"
            values={[
              "",
              "School",
              "College",
              "University",
              "Training Institute",
              "Coaching Center"
            ]}
            name="Organization Type"
            value=""
            onChange={() => {}}
          />
        </Col>
        <Col xs="1" />
        <Col xs="4" style={{ textAlign: "center" }}>
          <h4>Student Information Management</h4>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </Col>
        <Col xs="1" />
        <Col xs="3" />
      </Row>
      <Row style={{ minHeight: "100px" }} />
      <Row>
        <Col>
          <OrganizationDetails />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col />
        <Col>
          <Button block color="primary">
            Submit
          </Button>
          <p />
        </Col>
        <Col />
      </Row>
    </div>
  );
};
