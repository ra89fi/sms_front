import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import configureStore from "../../store/configureStore";
import FormField from "../common/FormField";
import { updateFatherDetails, updateMotherDetails } from "../../actions/student";
import { parentDetailsSchema } from "../../validations/student";

const store = configureStore();

export default props => {
  const { father = {}, mother = {} } = props;

  const fatherErrors = {};
  let error = Joi.validate(father, parentDetailsSchema).error;
  if (error) {
    const err = error.details[0];
    const name = err.path[0];
    fatherErrors[name] = err.message;
  }

  const motherErrors = {};
  error = Joi.validate(mother, parentDetailsSchema).error;
  if (error) {
    const err = error.details[0];
    const name = err.path[0];
    motherErrors[name] = err.message;
  }

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
              error={fatherErrors.firstName}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={father.lastName}
              onChange={changeHandlerFather}
              error={fatherErrors.lastName}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Profession"
              name="profession"
              value={father.profession}
              onChange={changeHandlerFather}
              error={fatherErrors.profession}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              value={father.mobileNo}
              onChange={changeHandlerFather}
              error={fatherErrors.mobileNo}
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
              error={motherErrors.firstName}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={mother.lastName}
              onChange={changeHandlerMother}
              error={motherErrors.lastName}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Profession"
              name="profession"
              value={mother.profession}
              onChange={changeHandlerMother}
              error={motherErrors.profession}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              value={mother.mobileNo}
              onChange={changeHandlerMother}
              error={motherErrors.mobileNo}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
