import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import configureStore from "../../store/configureStore";
import FormField from "../common/FormField";
import { updateFatherDetails, updateMotherDetails } from "../../actions/student";

const store = configureStore();

export default props => {
  const { father = {}, mother = {} } = props;

  const changeHandlerFather = e => {
    const values = {
      ...father,
      [e.target.name]: e.target.value
    };
    store.dispatch(updateFatherDetails(values));
  };

  const changeHandlerMother = e => {
    const values = {
      ...mother,
      [e.target.name]: e.target.value
    };
    store.dispatch(updateMotherDetails(values));
  };

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
              onChange={changeHandlerFather}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={father.lastName}
              onChange={changeHandlerFather}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Profession"
              name="profession"
              value={father.profession}
              onChange={changeHandlerFather}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              value={father.mobileNo}
              onChange={changeHandlerFather}
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
              onChange={changeHandlerMother}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={mother.lastName}
              onChange={changeHandlerMother}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Profession"
              name="profession"
              value={mother.profession}
              onChange={changeHandlerMother}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              value={mother.mobileNo}
              onChange={changeHandlerMother}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
