import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import configureStore from "../../store/configureStore";
import FormField from "../common/FormField";
import { updateStudentDetails } from "../../actions/student";

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

  const changeHandler = e => {
    const values = {
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
      permAddDistrict,
      [e.target.name]: e.target.value
    };
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
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  value={lastName}
                  onChange={changeHandler}
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
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Mobile No *"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={changeHandler}
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
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Post Office *"
              name="presAddPO"
              value={presAddPO}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Upazilla *"
              name="presAddUpazilla"
              value={presAddUpazilla}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="District *"
              name="presAddDistrict"
              value={presAddDistrict}
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>Permanent Address</strong>
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
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Post Office *"
              name="permAddPO"
              value={permAddPO}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Upazilla *"
              name="permAddUpazilla"
              value={permAddUpazilla}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="District *"
              name="permAddDistrict"
              value={permAddDistrict}
              onChange={changeHandler}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
