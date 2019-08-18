import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { connect } from "react-redux";
import headerNames from "../../objects/studentListHeaders";

const allowHeaders = ["id", "class", "group", "rollNo", "school"];

const StudentProfileView = props => {
  const { student } = props;

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="4">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{student.firstName + " " + student.lastName}</strong>{" "}
              <i className="icon-user-female icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col style={{ marginBottom: "20px", textAlign: "center" }}>
                  <img src={"../../assets/img/avatars/5.jpg"} alt="" />
                </Col>
              </Row>
              {allowHeaders.map((key, i) => (
                <Row key={i}>
                  <Col xs="4">{headerNames[key]}</Col>
                  <Col>: {student[key]}</Col>
                </Row>
              ))}
            </CardBody>
          </Card>
          <Row>
            <Col className="quickLink">
              <Link to={`/student/edit/${props.match.params.id}`}>
                <Button block color="warning">
                  Edit Profile
                </Button>
              </Link>
            </Col>
            <Col>
              <Button block color="danger">
                Delete Student
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs="8">
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
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>First Name</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.firstName} disabled />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Last Name</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.lastName} disabled />
                      </InputGroup>
                    </Col>
                  </Row>
                  <p />
                  <Row>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Nationality</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.nationality} disabled />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Email</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.email} disabled />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Mobile No</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.mobileNo} disabled />
                      </InputGroup>
                    </Col>
                  </Row>
                  <p />
                  <Row>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Birth Date</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.birthDate.split("T")[0]} disabled />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Religion</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.religion} disabled />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Blood Group</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.bloodGroup} disabled />
                      </InputGroup>
                    </Col>
                  </Row>
                  <p />
                  <Row>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Gender</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.gender} disabled />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Marital Status</InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder={student.maritalStatus} disabled />
                      </InputGroup>
                    </Col>
                  </Row>
                  <p />
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Present Address</strong>
                </Col>
              </Row>
              <p />
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Village/Road</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.presVillage} disabled />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Upazilla</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.presUpazilla} disabled />
                  </InputGroup>
                </Col>
              </Row>
              <p />
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Post Office</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.presPO} disabled />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>District</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.presDistrict} disabled />
                  </InputGroup>
                </Col>
              </Row>
              <p />
              <Row>
                <Col>
                  <strong>Permanent Address</strong>
                </Col>
              </Row>
              <p />
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Village/Road</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.permVillage} disabled />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Upazilla</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.permUpazilla} disabled />
                  </InputGroup>
                </Col>
              </Row>
              <p />
              <Row>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Post Office</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.permPO} disabled />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>District</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder={student.permDistrict} disabled />
                  </InputGroup>
                </Col>
              </Row>
              <p />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect((state, props) => ({
  student: state.studentsDetails.filter(item => item.id == props.match.params.id)[0] || {}
}))(StudentProfileView);
