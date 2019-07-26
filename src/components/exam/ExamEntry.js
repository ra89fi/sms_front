import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam Entry</strong> <i className="icon-note icons" />
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
        </Col>
      </Row>
    </div>
  );
};
