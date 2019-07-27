import React from "react";
import { Button, Col, Row } from "reactstrap";
import StudentDetails from "./StudentDetails";

class EditStudentProfile extends React.Component {
  // read id off props.match.params.id and load data and pass to StudentDetails
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
