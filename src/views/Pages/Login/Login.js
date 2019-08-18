import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
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
import configureStore from "../../../store/configureStore";
import { login } from "../../../actions/auth";
import URI from "../../../objects/uri";

const store = configureStore();

// use this in server too
const userSchema = {
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .required()
};

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    errors: {}
  };

  componentDidMount() {
    this.enterHandler = e => {
      if (e.keyCode == "13" || e.charCode == "13") {
        e.preventDefault();
        this.submitHandler();
      }
    };
    document.addEventListener("keypress", this.enterHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.enterHandler);
  }

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
    let errors = Object.keys(this.state.errors).map(key => !!this.state.errors[key]);
    if (errors.length === 0) {
      console.log("user OK");
      fetch(`${URI}/user/login`, {
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
              console.log("login OK");
              this.setState({ user: { username: "", password: "" } });
              const token = response.headers.get("Auth-Token");
              store.dispatch(login(token));
              // redirect to /dashboard using history
              this.props.history.push("/");
              return;
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
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
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
                      <InputGroup className="mb-4">
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
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.submitHandler}>
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p />
                      <p>Do not have account ? Register now !</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>
                          Register
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
