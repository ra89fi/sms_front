import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "./FormField";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Attendance Report</strong> <i className="icon-note icons" />
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <FormField type="select" placeholder="Class" values={["", "Hons"]} />
          </Col>
          <Col>
            <FormField type="select" placeholder="Subject" values={["", "Geography"]} />
          </Col>
          <Col>
            <FormField type="select" placeholder="Session" values={["", "2019-20"]} />
          </Col>
          <Col>
            <FormField type="date" placeholder="From" />
          </Col>
          <Col>
            <FormField type="date" placeholder="To" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block color="primary" onClick={props.onClick}>
              Show Report
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
