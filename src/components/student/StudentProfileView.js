import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";

export default props => {
  // get student id from props.match.params.id and load accordingly
  console.log(props);
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="4">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Sumaya Akter Brishti</strong> <i className="icon-user-female icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col style={{ marginBottom: "20px", textAlign: "center" }}>
                  <img src={"../../assets/img/avatars/5.jpg"} alt="" />
                </Col>
              </Row>
              <Row>
                <Col xs="5">ID</Col>
                <Col>: 234357478458</Col>
              </Row>
              <Row>
                <Col xs="5">Class</Col>
                <Col>: Five</Col>
              </Row>
              <Row>
                <Col xs="5">Group</Col>
                <Col>: </Col>
              </Row>
              <Row>
                <Col xs="5">Roll No</Col>
                <Col>: 3476574</Col>
              </Row>
              <Row>
                <Col xs="5">School</Col>
                <Col>: World's Greatest School</Col>
              </Row>
              <Row>
                <Col xs="5">Name</Col>
                <Col>: Sumaya Akter Brishti</Col>
              </Row>
              <Row>
                <Col xs="5">Mobile No</Col>
                <Col>: 02857609218</Col>
              </Row>
              <Row>
                <Col xs="5">Email</Col>
                <Col>: test@email.com</Col>
              </Row>
            </CardBody>
          </Card>
          <Row>
            <Col className="quickLink">
              <Link to={`/student/edit/${props.match.params.id}`}>
                <Button block color="warning">
                  Edit Profile
                </Button>
              </Link>
            </Col>
            <Col>
              <Button block color="danger">
                Delete Student
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs="8">
          <Card>
            <CardBody>Info here</CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
