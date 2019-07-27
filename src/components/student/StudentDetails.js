import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Joi from "@hapi/joi";
import configureStore from "../../store/configureStore";
import FormField from "../common/FormField";
import { updateStudentDetails } from "../../actions/student";
import { studentDetailsSchema } from "../../validations/student";

const store = configureStore();

export default props => {
  const {
    firstName,
    lastName,
    nationality,
    email,
    mobileNo,
    birthDate,
    religion,
    bloodGroup,
    gender,
    maritalStatus,
    presAddVillage,
    presAddPO,
    presAddUpazilla,
    presAddDistrict,
    permAddVillage,
    permAddPO,
    permAddUpazilla,
    permAddDistrict
  } = props;

  const data = {
    firstName,
    lastName,
    nationality,
    email,
    mobileNo,
    birthDate,
    religion,
    bloodGroup,
    gender,
    maritalStatus,
    presAddVillage,
    presAddPO,
    presAddUpazilla,
    presAddDistrict,
    permAddVillage,
    permAddPO,
    permAddUpazilla,
    permAddDistrict
  };

  const { error } = Joi.validate(data, studentDetailsSchema);
  const errors = {};
  if (error) {
    const err = error.details[0];
    const name = err.path[0];
    errors[name] = err.message;
  }

  const changeHandler = e => {
    const values = {
      ...data,
      [e.target.name]: e.target.value
    };
    store.dispatch(updateStudentDetails(values, "studentDetails"));
  };

  const makePermAddrSameAsPresAdd = e => {
    let values = {};
    if (!e.target.checked) {
      values = {
        ...data,
        permAddVillage: "",
        permAddPO: "",
        permAddUpazilla: "",
        permAddDistrict: ""
      };
    } else {
      values = {
        ...data,
        permAddVillage: data.presAddVillage,
        permAddPO: data.presAddPO,
        permAddUpazilla: data.presAddUpazilla,
        permAddDistrict: data.presAddDistrict
      };
    }
    store.dispatch(updateStudentDetails(values, "studentDetails"));
  };

  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Student Details</strong>
        <i className="icon-note icons" />
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <Row>
              <Col>
                <FormField
                  type="text"
                  placeholder="First Name *"
                  name="firstName"
                  value={firstName}
                  onChange={changeHandler}
                  error={errors.firstName}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  value={lastName}
                  onChange={changeHandler}
                  error={errors.lastName}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField
                  type="text"
                  placeholder="Nationality *"
                  name="nationality"
                  value={nationality}
                  onChange={changeHandler}
                  error={errors.nationality}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  error={errors.email}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Mobile No *"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={changeHandler}
                  error={errors.mobileNo}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormField
                  type="date"
                  placeholder="Birth Date *"
                  name="birthDate"
                  value={birthDate}
                  onChange={changeHandler}
                  error={errors.birthDate}
                />
              </Col>
              <Col>
                <FormField
                  type="select"
                  placeholder="Religion *"
                  values={["", "Islam", "Hinduism", "Christianity", "Buddism", "Other"]}
                  name="religion"
                  value={religion}
                  onChange={changeHandler}
                  error={errors.religion}
                />
              </Col>
              <Col>
                <FormField
                  type="select"
                  placeholder="Blood Group"
                  values={["", "A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
                  name="bloodGroup"
                  value={bloodGroup}
                  onChange={changeHandler}
                  error={errors.bloodGroup}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="5">
                <FormField
                  type="radio"
                  placeholder="Gender *"
                  values={["Male", "Female", "Other"]}
                  name="gender"
                  value={gender}
                  onChange={changeHandler}
                  error={errors.gender}
                />
              </Col>
              <Col xs="7">
                <FormField
                  type="radio"
                  placeholder="Marital Status *"
                  values={["Single", "Married"]}
                  name="maritalStatus"
                  value={maritalStatus}
                  onChange={changeHandler}
                  error={errors.maritalStatus}
                />
              </Col>
            </Row>
          </Col>
          <Col xs="3">
            <img src={"../../assets/img/avatars/5.jpg"} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>Present Address</strong>
            <p />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField
              type="text"
              placeholder="Village/Road *"
              name="presAddVillage"
              value={presAddVillage}
              onChange={changeHandler}
              error={errors.presAddVillage}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Post Office *"
              name="presAddPO"
              value={presAddPO}
              onChange={changeHandler}
              error={errors.presAddPO}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Upazilla *"
              name="presAddUpazilla"
              value={presAddUpazilla}
              onChange={changeHandler}
              error={errors.presAddUpazilla}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="District *"
              name="presAddDistrict"
              value={presAddDistrict}
              onChange={changeHandler}
              error={errors.presAddDistrict}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>Permanent Address</strong>
            <span> </span>
            <FormGroup check inline>
              <Input
                className="form-check-input"
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="option1"
                onClick={makePermAddrSameAsPresAdd}
              />
              <Label check className="form-check-label" htmlFor="checkbox1">
                same as above
              </Label>
            </FormGroup>
            <p />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormField
              type="text"
              placeholder="Village/Road *"
              name="permAddVillage"
              value={permAddVillage}
              onChange={changeHandler}
              error={errors.permAddVillage}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Post Office *"
              name="permAddPO"
              value={permAddPO}
              onChange={changeHandler}
              error={errors.permAddPO}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Upazilla *"
              name="permAddUpazilla"
              value={permAddUpazilla}
              onChange={changeHandler}
              error={errors.permAddUpazilla}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="District *"
              name="permAddDistrict"
              value={permAddDistrict}
              onChange={changeHandler}
              error={errors.permAddDistrict}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
