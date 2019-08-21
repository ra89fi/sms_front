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
import List from "../common/List";
import { fetchStudentsDetails, deleteStudentDetails } from "../../actions/studentsDetails";
import headerNames from "../../objects/studentListHeaders";
import URI from "../../objects/uri";

const allowHeaders = ["id", "class", "group", "rollNo", "school"];

const formatDate = dateStr => {
  if (!dateStr) return "";
  const arr = new Date(dateStr).toLocaleDateString().split("/");
  if (arr[0].length == 1) arr[0] = "0" + arr[0];
  if (arr[1].length == 1) arr[1] = "0" + arr[1];
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

class StudentProfileView extends React.Component {
  state = {
    admissions: []
  };

  componentDidMount() {
    fetch(`${URI}/api/admissions/${this.props.match.params.id}`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status === 200) return response.json();
        else return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg === "object") this.setState({ admissions: msg });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    const { student, admission } = this.props;
    allowHeaders.slice(1).forEach(item => (student[item] = admission[item]));
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
                <Link to={`/student/edit/${this.props.match.params.id}`}>
                  <Button block color="warning">
                    Edit Profile
                  </Button>
                </Link>
              </Col>
              <Col>
                <Button
                  block
                  color="danger"
                  onClick={() => {
                    this.props.deleteStudentDetails(this.props.match.params.id, () => {
                      this.props.fetchStudentsDetails();
                      this.props.history.push("/student/all");
                    });
                  }}
                >
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
                          <Input type="text" placeholder={formatDate(student.birthDate)} disabled />
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
            <p></p>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Student Admissions</strong>
                <i className="icon-note icons" />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    {this.state.admissions.length === 0 ? <p>Loading...</p> : ""}
                    <List
                      data={this.state.admissions}
                      headerNames={headerNames}
                      headersAllow={allowHeaders}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    student: state.studentsDetails.filter(item => item.id == props.match.params.id)[0] || {},
    admission: state.latestAdmissions[props.match.params.id]
  }),
  { fetchStudentsDetails, deleteStudentDetails }
)(StudentProfileView);
