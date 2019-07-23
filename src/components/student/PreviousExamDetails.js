import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import PreviousExamSingle from "./PreviousExamSingle";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Previous Exam Details</strong>
        <i className="icon-note icons" />
      </CardHeader>
      <CardBody>
        <Row>
          <Col style={{ marginBottom: "20px" }}>
            <Button color="primary">Add Exam</Button>
          </Col>
        </Row>
        {false && <PreviousExamSingle />}
      </CardBody>
    </Card>
  );
};
