import React, { Component } from "react";
import { Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import List from "../common/List";

const teacherData = [
  {
    id: "29067",
    name: "Raihan",
    email: "test@email.com",
    mobileNo: "67592746873",
    subject: "Geography",
    gender: "Male"
  }
];
const buttons = [
  {
    name: "View",
    color: "success",
    link: "/teachers/profile"
  },
  {
    name: "Edit",
    color: "warning",
    link: "/teachers/entry"
  },
  {
    name: "Delete",
    color: "danger"
  }
];

class TeacherList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Teachers List</strong> <i className="icon-list icons" />
              </CardHeader>
              <CardBody>
                <List data={teacherData} buttons={buttons} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TeacherList;
