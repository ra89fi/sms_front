import React, { Component } from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";
import URI from "../../objects/uri";

const listHeaders = {
  id: "ID",
  name: "Full Name",
  mobileNo: "Mobile No",
  email: "Email",
  subject: "Subject",
  gender: "Gender"
};

const headersAllow = ["id", "name", "mobileNo", "email", "subject", "gender"];

const buttons = [
  {
    name: "View",
    color: "success",
    link: "/teachers/profile"
  },
  {
    name: "Edit",
    color: "warning",
    link: "/teachers/edit"
  },
  {
    name: "Delete",
    color: "danger",
    onClick: "delete"
  }
];

class TeacherList extends Component {
  state = { teachers: [] };

  componentDidMount() {
    fetch(`${URI}/api/teachers`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status == 200) return response.json();
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg == "object") this.setState({ teachers: msg });
      })
      .catch(err => console.log(err.message));
  }

  deleteStudent = id => {
    fetch(`${URI}/api/teachers/delete/${id}`, {
      method: "POST",
      mode: "cors"
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg);
        if (msg == "ERROR") return;
        this.setState({ teachers: this.state.teachers.filter(t => t.id != id) });
      })
      .catch(err => console.log(err.message));
  };

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
                <List
                  data={this.state.teachers}
                  headerNames={listHeaders}
                  headersAllow={headersAllow}
                  buttons={buttons}
                  delete={this.deleteStudent}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TeacherList;
