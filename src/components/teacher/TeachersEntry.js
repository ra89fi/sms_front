import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

class TeachersEntry extends Component {
  //Redirect isn't working. Have to do it manually

  onClickHandler = () => <Redirect from="/" to="/student/all" />;
  render() {
    return (
      <Card>
        <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Teacher's Details</strong>
          <i className="icon-note icons" />
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Row>
                <Col>
                  <FormField type="text" placeholder="First Name" />
                </Col>
                <Col>
                  <FormField type="text" placeholder="Last Name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormField type="text" placeholder="Nationality" />
                </Col>
                <Col>
                  <FormField type="text" placeholder="Email" />
                </Col>
                <Col>
                  <FormField type="text" placeholder="Mobile No" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormField type="date" placeholder="Birth Date" />
                </Col>
                <Col>
                  <FormField type="select" placeholder="Religion" values={["Option1", "Option2"]} />
                </Col>
                <Col>
                  <FormField
                    type="select"
                    placeholder="Blood Group"
                    values={["Option1", "Option2"]}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="5">
                  <FormField
                    type="radio"
                    onChange={e => console.log(e.target.name, e.target.value)}
                    placeholder="Gender"
                    values={["Male", "Female", "Other"]}
                  />
                </Col>
                <Col xs="7">
                  <FormField
                    type="radio"
                    onChange={e => console.log(e.target.name, e.target.value)}
                    placeholder="Marital Status"
                    values={["Single", "Married"]}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="3">
              <img src={"../../assets/img/avatars/8.jpg"} alt="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Present Address</strong>
              <p />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormField type="text" placeholder="Village/Road" />
            </Col>

            <Col>
              <FormField type="text" placeholder="Post Office" />
            </Col>

            <Col>
              <FormField type="text" placeholder="Upazila" />
            </Col>

            <Col>
              <FormField type="text" placeholder="District" />
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Permanent Address</strong>
              <p />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormField type="text" placeholder="Village/Road" />
            </Col>

            <Col>
              <FormField type="text" placeholder="Post Office" />
            </Col>

            <Col>
              <FormField type="text" placeholder="Upazila" />
            </Col>

            <Col>
              <FormField type="text" placeholder="District" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button block color="primary" onClick={this.onClickHandler}>
                Submit
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default TeachersEntry;
