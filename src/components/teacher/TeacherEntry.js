import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

class TeachersEntry extends Component {
  state = {
    name: "",
    email: "",
    mobileNo: "",
    subject: "",
    gender: "",
    addVillage: "",
    addPO: "",
    addUpazilla: "",
    addDistrict: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickHandler = () => {
    console.log(this.state);
    // validate and send to server
    // redirect to /teachers/all
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
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
                        <FormField
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col>
                        <FormField
                          type="text"
                          placeholder="Mobile No"
                          name="mobileNo"
                          value={this.state.mobileNo}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col>
                        <FormField
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormField
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={this.state.subject}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col style={{ marginTop: "7px" }}>
                        <FormField
                          type="radio"
                          onChange={this.changeHandler}
                          placeholder="Gender"
                          values={["Male", "Female", "Other"]}
                          name="gender"
                          value={this.state.gender}
                        />
                      </Col>
                      <Col />
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>Address</strong>
                    <p />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Village/Road"
                      name="addVillage"
                      value={this.state.addVillage}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Post Office"
                      name="addPO"
                      value={this.state.addPO}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Upazilla"
                      name="addUpazilla"
                      value={this.state.addUpazilla}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="District"
                      name="addDistrict"
                      value={this.state.addDistrict}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col>
                    <Button block color="primary" onClick={this.onClickHandler}>
                      Submit
                    </Button>
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TeachersEntry;
