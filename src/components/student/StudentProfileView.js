import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";

export default props => {
  // get student id from props.match.params.id and load accordingly
  console.log(props);
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="3">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Sumaya Akter Brishti</strong> <i className="icon-user-female icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col style={{ marginBottom: "20px" }}>
                  <img src={"../../assets/img/avatars/5.jpg"} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>Roll No</Col>
                <Col>: 1346345</Col>
              </Row>
              <Row>
                <Col>Registration No</Col>
                <Col>: 16435634</Col>
              </Row>
              <Row>
                <Col>Degree</Col>
                <Col>: Honors</Col>
              </Row>
              <Row>
                <Col>Subject</Col>
                <Col>: Geography</Col>
              </Row>
              <Row>
                <Col>Session</Col>
                <Col>: 2019-20</Col>
              </Row>
              <Row>
                <Col>Reg. Date</Col>
                <Col>: 7/12/2019</Col>
              </Row>
            </CardBody>
          </Card>
          <Link to={`/student/edit/${props.match.params.id}`}>
            <Button color="warning">Edit Profile</Button>
          </Link>
          &nbsp;
          <Button color="danger">Delete Student</Button>
        </Col>
        <Col xs="9">
          <Card>
            <CardBody>Info here</CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
