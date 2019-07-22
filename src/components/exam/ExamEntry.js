import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        Exam Entry <i className="icon-people icons" />
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <FormField type="select" placeholder="Degree" values={["JSC", "SSC", "HSC"]} />
          </Col>
          <Col>
            <FormField type="select" placeholder="Subject" values={["Option1", "Option2"]} />
          </Col>
          <Col>
            <FormField type="select" placeholder="Session" values={["Option1", "Option2"]} />
          </Col>
          <Col>
            <FormField type="date" placeholder="Date" />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField type="text" placeholder="Exam Name" />
          </Col>
          <Col>
            <FormField type="text" placeholder="Exam Description" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
