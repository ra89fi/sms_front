import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import FormField from "../common/FormField";
import URI from "../../objects/uri";

const teacherSchema = {
  name: Joi.string().required(),
  mobileNo: Joi.string()
    .regex(/^[0-9]+$/, "numbers")
    .min(11)
    .max(11)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  subject: Joi.string().required(),
  gender: Joi.string().required(),
  addVillage: Joi.string().required(),
  addPO: Joi.string().required(),
  addUpazilla: Joi.string().required(),
  addDistrict: Joi.string().required()
};

class TeacherProfileEdit extends Component {
  state = {
    teacher: {
      name: "",
      mobileNo: "",
      email: "",
      subject: "",
      gender: "",
      addVillage: "",
      addPO: "",
      addUpazilla: "",
      addDistrict: ""
    },
    errors: {}
  };

  componentDidMount() {
    console.log(this.props.match);
    fetch(`${URI}/api/teachers/${this.props.match.params.id}`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status == 200) return response.json();
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg == "object" && msg.length) {
          delete msg[0].id;
          this.setState({ teacher: msg[0] });
        }
      })
      .catch(err => console.log(err.message));
  }

  changeHandler = e => {
    const { name, value } = e.target;
    const teacher = {
      ...this.state.teacher,
      [name]: value
    };
    const errors = {};
    let error = Joi.validate(teacher, teacherSchema).error;
    if (error) {
      const err = error.details[0];
      errors[err.path[0]] = err.message;
    }
    this.setState({
      teacher,
      errors
    });
  };

  onClickHandler = () => {
    console.log(this.state);
    // validate and send to server
    let error = Joi.validate(this.state.teacher, teacherSchema).error;
    if (error) return;
    console.log("teacher ok");
    fetch(`${URI}/api/teachers/${this.props.match.params.id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state.teacher)
    })
      .then(response => {
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (msg == "OK") {
          // redirct to teachers list
          this.props.history.push(`/teachers/profile/${this.props.match.params.id}`);
        }
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
                          placeholder="Name *"
                          error={this.state.errors.name}
                          name="name"
                          value={this.state.teacher.name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col>
                        <FormField
                          type="text"
                          placeholder="Mobile No *"
                          error={this.state.errors.mobileNo}
                          name="mobileNo"
                          value={this.state.teacher.mobileNo}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col>
                        <FormField
                          type="text"
                          placeholder="Email *"
                          error={this.state.errors.email}
                          name="email"
                          value={this.state.teacher.email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormField
                          type="text"
                          placeholder="Subject *"
                          error={this.state.errors.subject}
                          name="subject"
                          value={this.state.teacher.subject}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col style={{ marginTop: "7px" }}>
                        <FormField
                          type="radio"
                          onChange={this.changeHandler}
                          placeholder="Gender *"
                          error={this.state.errors.gender}
                          values={["Male", "Female", "Other"]}
                          name="gender"
                          value={this.state.teacher.gender}
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
                      placeholder="Village/Road *"
                      error={this.state.errors.addVillage}
                      name="addVillage"
                      value={this.state.teacher.addVillage}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Post Office *"
                      error={this.state.errors.addPO}
                      name="addPO"
                      value={this.state.teacher.addPO}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="Upazilla *"
                      error={this.state.errors.addUpazilla}
                      name="addUpazilla"
                      value={this.state.teacher.addUpazilla}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col>
                    <FormField
                      type="text"
                      placeholder="District *"
                      error={this.state.errors.addDistrict}
                      name="addDistrict"
                      value={this.state.teacher.addDistrict}
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

export default TeacherProfileEdit;
