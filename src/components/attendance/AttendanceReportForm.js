import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Attendance Report</strong> <i className="icon-note icons" />
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
              placeholder="From"
              name="dateFrom"
              onChange={props.onChange}
              value={props.dateFrom}
            />
          </Col>
          <Col>
            <FormField
              type="date"
              placeholder="To"
              name="dateTo"
              onChange={props.onChange}
              value={props.dateTo}
            />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <Button block color="primary" onClick={props.onClick}>
              Show Report
            </Button>
          </Col>
          <Col />
        </Row>
      </CardBody>
    </Card>
  );
};
