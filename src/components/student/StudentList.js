import React, { Component } from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";

const studentData = [
  {
    id: "29067429867473",
    degree: "Honors",
    subject: "Geography",
    session: "2013-14",
    rollNo: "11152622",
    regNo: "4685867",
    name: "Raihan",
    mobileNo: "9034704096",
    email: "test@email.com"
  }
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
                <List data={studentData} buttons={buttons} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentList;
