import React from "react";
import { Button, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import FormField from "../common/FormField";

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
            <FormField
              type="select"
              placeholder="Class"
              name="class"
              onChange={props.onChange}
              value={props.class}
              values={["", "Honors", "Masters"]}
            />
          </Col>
          <Col>
            <FormField
              type="select"
              placeholder="Subject"
              name="subject"
              onChange={props.onChange}
              value={props.subject}
              values={["", "Geography"]}
            />
          </Col>
          <Col>
            <FormField
              type="select"
              placeholder="Session"
              name="session"
              onChange={props.onChange}
              value={props.session}
              values={["", "2019-20", "2020-21"]}
            />
          </Col>
          <Col>
            <FormField
              type="date"
              placeholder="Date"
              name="date"
              onChange={props.onChange}
              value={props.date}
            />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <Button block color="primary" onClick={props.onClick}>
              Take Attendance
            </Button>
          </Col>
          <Col />
        </Row>
      </CardBody>
    </Card>
  );
};
