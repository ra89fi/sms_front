import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <Row>
      <Col xs="4">
        <Card>
          <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Attendance Report</strong> <i className="icon-note icons" />
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
                  placeholder="From"
                  name="dateFrom"
                  onChange={props.onChange}
                  value={props.dateFrom}
                />
                <FormField
                  type="date"
                  placeholder="To"
                  name="dateTo"
                  onChange={props.onChange}
                  value={props.dateTo}
                />
                <Button block color="primary" onClick={props.onClick}>
                  Show Report
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
