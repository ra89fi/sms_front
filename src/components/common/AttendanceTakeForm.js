import React from "react";
import { Button, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import FormField from "./FormField";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Take Attendance</strong>
        <i className="icon-note icons" />
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
            <FormField type="select" placeholder="Session" values={["", "2011-12", "2011-14"]} />
          </Col>
          <Col>
            <FormField type="date" placeholder="Date" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block color="primary" onClick={props.onClick}>
              Take Attendance
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
