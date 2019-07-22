import React from "react";
import { Button, Col, Row } from "reactstrap";
import StudentDetails from "./StudentDetails";

class EditStudentProfile extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <StudentDetails />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditStudentProfile;
