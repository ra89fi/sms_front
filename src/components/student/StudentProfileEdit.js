import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import StudentDetails from "./StudentDetails";
import { updateStudentDetails, resetStudent } from "../../actions/student";
import { studentDetailsSchema } from "../../validations/student";
import URI from "../../objects/uri";
import { fetchStudentsDetails } from "../../actions/studentsDetails";

const formatDate = dateStr => {
  if (!dateStr) return "";
  const arr = new Date(dateStr).toLocaleDateString().split("/");
  if (arr[0].length == 1) arr[0] = "0" + arr[0];
  if (arr[1].length == 1) arr[1] = "0" + arr[1];
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

class EditStudentProfile extends React.Component {
  state = {
    student: this.props.studentDetails
  };

  componentDidMount() {
    const details = {};
    Object.keys(this.state.student).forEach(key => (details[key] = this.props.student[key]));
    this.props.updateStudentDetails(details, "studentDetails");
  }

  componentWillUnmount() {
    this.props.resetStudent();
  }

  static getDerivedStateFromProps(nextProps) {
    return { student: nextProps.studentDetails };
  }

  handleSubmit = () => {
    // validate studentDetails
    const { error } = Joi.validate(this.state.student, studentDetailsSchema);
    if (error) {
      console.log(error);
      return;
    }
    // send to server for update
    console.log(this.state.student);
    const student = this.state.student;
    if (student.birthDate) {
      student.birthDate = formatDate(student.birthDate);
    }
    fetch(`${URI}/api/student_details/${this.props.student.id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state.student)
    })
      .then(response => {
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (msg == "OK") {
          this.props.fetchStudentsDetails();
          // redirct to student list
          this.props.history.push(`/student/profile/${this.props.student.id}`);
        }
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <StudentDetails {...this.state.student} />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <Button block color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Col>
          <Col />
        </Row>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    studentDetails: state.student.studentDetails,
    student: state.studentsDetails.filter(item => item.id == props.match.params.id)[0] || {}
  }),
  { updateStudentDetails, resetStudent, fetchStudentsDetails }
)(EditStudentProfile);
