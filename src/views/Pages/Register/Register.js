import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import Joi from "@hapi/joi";

// use this in server too
const userSchema = {
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .required(),
  password2: Joi.string()
    .min(6)
    .max(30)
    .required()
};

class Register extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      password2: ""
    },
    errors: {}
  };

  changeHandler = ({ target: { name, value } }) => {
    const user = {
      ...this.state.user,
      [name]: value
    };
    this.setState({ user });
    const error = Joi.validate(user, userSchema).error;
    if (error) {
      const err = error.details[0];
      const name = err.path[0];
      this.setState({
        errors: {
          [name]: err.message
        }
      });
      return;
    }
    this.setState({
      errors: {}
    });
  };

  submitHandler = () => {
    const error = Joi.validate(this.state.user, userSchema).error;
    if (error) {
      const err = error.details[0];
      const name = err.path[0];
      this.setState({
        errors: {
          [name]: err.message
        }
      });
      return;
    }
    const { password, password2 } = this.state.user;
    if (password !== password2) {
      this.setState({
        errors: {
          password2: "passwords must match"
        }
      });
      return;
    }
    let errors = Object.keys(this.state.errors).map(key => !!this.state.errors[key]);
    if (errors.length === 0 && password === password2) {
      console.log("user OK");
      fetch("http://localhost:3001/user/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state.user)
      })
        .then(async response => {
          const text = await response.text();
          if (response.status === 200) {
            if (text === "OK") {
              console.log("register OK");
              return;
              // redirect to /login using history
            }
          }
          // error
          console.log(text);
          this.setState({
            errors: JSON.parse(text)
          });
        })
        .catch(err => console.log(err.message));
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.changeHandler}
                        style={
                          this.state.errors.username
                            ? { border: "1px solid red" }
                            : { border: "none" }
                        }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.changeHandler}
                        style={
                          this.state.errors.email ? { border: "1px solid red" } : { border: "none" }
                        }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.changeHandler}
                        style={
                          this.state.errors.password
                            ? { border: "1px solid red" }
                            : { border: "none" }
                        }
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        name="password2"
                        value={this.state.user.password2}
                        onChange={this.changeHandler}
                        style={
                          this.state.errors.password2
                            ? { border: "1px solid red" }
                            : { border: "none" }
                        }
                      />
                    </InputGroup>
                    <Button color="success" block onClick={this.submitHandler}>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
