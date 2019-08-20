import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";
import studentListHeaders from "../../objects/studentListHeaders";
import { fetchStudentsDetails } from "../../actions/studentsDetails";
import { fetchLatestAdmissions } from "../../actions/admissions";

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
    students: this.props.studentsDetails
  };

  static getDerivedStateFromProps(nextProps) {
    return { students: nextProps.studentsDetails };
  }

  componentDidMount() {
    if (this.state.students.length === 0) {
      this.props.fetchStudentsDetails();
      this.props.fetchLatestAdmissions();
    }
  }

  render() {
    let students = this.state.students;
    students = students.map(student =>
      Object.assign({}, this.props.admissions[student.id] || {}, student)
    );
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Student List</strong> <i className="icon-list icons" />
              </CardHeader>
              <CardBody>
                {students.length === 0 ? <p>Loading...</p> : ""}
                <List
                  data={students}
                  headerNames={studentListHeaders}
                  headersAllow={headersAllow}
                  buttons={buttons}
                  reducerName={"studentsDetails"}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    studentsDetails: state.studentsDetails,
    admissions: state.latestAdmissions
  }),
  { fetchStudentsDetails, fetchLatestAdmissions }
)(StudentList);
