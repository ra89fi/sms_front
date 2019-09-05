import React from "react";
import { Button, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <Row>
      <Col xs="4">
        <Card>
          <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Marks Entry</strong>
            <i className="icon-note icons" />
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <FormField
                  type="select"
                  placeholder="Class *"
                  name="class"
                  values={["", "6", "7", "8", "9", "10"]}
                  value={props.class}
                  onChange={props.onChange}
                  error={props.errors.class}
                />
                <FormField
                  type="select"
                  placeholder="Group *"
                  name="group"
                  values={["", "B. Studies", "Humanities", "Science"]}
                  value={props.group}
                  onChange={props.onChange}
                  disabled={props.class != "9" && props.class != "10"}
                  error={props.errors.group}
                />
                <FormField
                  type="text"
                  placeholder="Subject *"
                  name="subject"
                  value={props.subject}
                  onChange={props.onChange}
                  error={props.errors.subject}
                />
                <FormField
                  type="date"
                  placeholder="Date *"
                  name="date"
                  onChange={props.onChange}
                  value={props.date}
                  error={props.errors.date}
                />
                <Button block color="primary" onClick={props.onSubmit}>
                  Entry Marks
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
