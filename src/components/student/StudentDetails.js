import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FormField from "../common/FormField";
// import { updateStudent } from "../../actions/student";
// import configureStore from "../../store/configureStore";

// const store = configureStore();

export default props => {
  const changeHandler = e => {
    const values = {
      [e.target.name]: e.target.value
    };
    // store.dispatch(updateStudent(values, "studentDetails"));
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
                  value={props.firstName}
                  onChange={changeHandler}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  value={props.lastName}
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
                  value={props.nationality}
                  onChange={changeHandler}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={props.email}
                  onChange={changeHandler}
                />
              </Col>
              <Col>
                <FormField
                  type="text"
                  placeholder="Mobile No *"
                  name="mobileNo"
                  value={props.mobileNo}
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
                  value={props.birthDate}
                  onChange={changeHandler}
                />
              </Col>
              <Col>
                <FormField
                  type="select"
                  placeholder="Religion *"
                  values={["", "Islam", "Hinduism", "Christianity", "Buddism", "Other"]}
                  name="religion"
                  value={props.religion}
                  onChange={changeHandler}
                />
              </Col>
              <Col>
                <FormField
                  type="select"
                  placeholder="Blood Group"
                  values={["", "A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
                  name="bloodGroup"
                  value={props.bloodGroup}
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
                  value={props.gender}
                  onChange={changeHandler}
                />
              </Col>
              <Col xs="7">
                <FormField
                  type="radio"
                  placeholder="Marital Status *"
                  values={["Single", "Married"]}
                  name="maritalStatus"
                  value={props.maritalStatus}
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
              value={props.presAddVillage}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Post Office *"
              name="presAddPO"
              value={props.presAddPO}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Upazilla *"
              name="presAddUpazilla"
              value={props.presAddUpazilla}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="District *"
              name="presAddDistrict"
              value={props.presAddDistrict}
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
              value={props.permAddVillage}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Post Office *"
              name="permAddPO"
              value={props.permAddPO}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="Upazilla *"
              name="permAddUpazilla"
              value={props.permAddUpazilla}
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <FormField
              type="text"
              placeholder="District *"
              name="permAddDistrict"
              value={props.permAddDistrict}
              onChange={changeHandler}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
