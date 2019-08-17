import React, { Component } from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";
import URI from "../../objects/uri";
import studentListHeaders from "../../objects/studentListHeaders";

const headersAllow = [
  "id",
  "class",
  "group",
  "rollNo",
  "school",
  "firstName",
  "lastName",
  "mobileNo",
  "email"
];

const buttons = [
  {
    name: "View",
    color: "success",
    link: "/student/profile"
  },
  {
    name: "Edit",
    color: "warning",
    link: "/student/edit"
  },
  {
    name: "Delete",
    color: "danger"
  }
];

class StudentList extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    fetch(`${URI}/api/student_details`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status === 200) return response.json();
        else return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg === "object") this.setState({ students: msg });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Student List</strong> <i className="icon-list icons" />
              </CardHeader>
              <CardBody>
                <List
                  data={this.state.students}
                  headerNames={studentListHeaders}
                  headersAllow={headersAllow}
                  buttons={buttons}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentList;
