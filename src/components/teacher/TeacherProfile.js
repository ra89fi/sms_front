import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import URI from "../../objects/uri";

class TeacherProfile extends React.Component {
  state = { teacher: {} };

  componentDidMount() {
    fetch(`${URI}/api/teachers/${this.props.match.params.id}`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status == 200) return response.json();
        else return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg == "object" && msg.length) this.setState({ teacher: msg[0] });
      })
      .catch(err => console.log(err.message));
  }

  deleteTeacher = () => {
    fetch(`${URI}/api/teachers/delete/${this.state.teacher.id}`, {
      method: "POST",
      mode: "cors"
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg);
        if (msg == "ERROR") return;
        this.props.history.push("/teachers/all");
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="4">
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{this.state.teacher.name}</strong> <i className="icon-user icons" />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>ID</Col>
                  <Col>
                    : <strong>{this.state.teacher.id}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Email</Col>
                  <Col>
                    : <strong>{this.state.teacher.email}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Mobile No</Col>
                  <Col>
                    : <strong>{this.state.teacher.mobileNo}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Subject</Col>
                  <Col>
                    : <strong>{this.state.teacher.subject}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Gender</Col>
                  <Col>
                    : <strong>{this.state.teacher.gender}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Village/Road</Col>
                  <Col>
                    : <strong>{this.state.teacher.addVillage}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Post Office</Col>
                  <Col>
                    : <strong>{this.state.teacher.addPO}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Upazilla</Col>
                  <Col>
                    : <strong>{this.state.teacher.addUpazilla}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>District</Col>
                  <Col>
                    : <strong>{this.state.teacher.addDistrict}</strong>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Link to={`/teachers/edit/${this.state.teacher.id}`}>
              <Button color="warning">Edit Profile</Button>
            </Link>
            &nbsp;
            <Button color="danger" onClick={this.deleteTeacher}>
              Delete Teacher
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TeacherProfile;
