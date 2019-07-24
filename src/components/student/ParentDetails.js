import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  const { father = {}, mother = {} } = props;

  const changeHandler = e => {};

  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Parent Details</strong>
        <i className="icon-note icons" />
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <strong>Father</strong>
            <p />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField
              type="text"
              placeholder="First Name *"
              name="firstName"
              value={father.firstName}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={father.lastName}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Profession"
              name="profession"
              value={father.profession}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              value={father.mobileNo}
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>Mother</strong>
            <p />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField
              type="text"
              placeholder="First Name *"
              name="firstName"
              value={mother.firstName}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={mother.lastName}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Profession"
              name="profession"
              value={mother.profession}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              value={mother.mobileNo}
              onChange={changeHandler}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
