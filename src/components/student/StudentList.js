import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import List from "../common/List";

class StudentList extends Component {
  render() {
    return (
      <Card>
        <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Student List</strong> <i className="icon-list icons" />
        </CardHeader>
        <CardBody>
          <List />
        </CardBody>
      </Card>
    );
  }
}

export default StudentList;
