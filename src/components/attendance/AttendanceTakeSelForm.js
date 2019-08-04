import React from "react";
import { Button, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <Row>
      <Col xs="4">
        <Card>
          <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Take Attendance</strong>
            <i className="icon-note icons" />
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <FormField
                  type="text"
                  placeholder="Class *"
                  name="class"
                  onChange={props.onChange}
                  value={props.class}
                />
                <FormField
                  type="text"
                  placeholder="Group"
                  name="group"
                  onChange={props.onChange}
                  value={props.group}
                  disabled={props.class != "9" && props.class != "10"}
                />
                <FormField
                  type="date"
                  placeholder="Date *"
                  name="date"
                  onChange={props.onChange}
                  value={props.date}
                />
                <Button block color="primary" onClick={props.onClick}>
                  Take Attendance
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
