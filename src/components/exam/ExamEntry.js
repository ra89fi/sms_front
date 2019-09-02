import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import FormField from "../common/FormField";
import URI from "../../objects/uri";

export default props => {
  const [state, setState] = React.useState({
    error: ""
  });

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const clickHandler = () => {
    console.log(state);
    // validate and send to server
    let error = Joi.validate(state.name, Joi.string().required()).error;
    if (error) {
      setState({
        ...state,
        error: '"Exam Name" is required'
      });
      return;
    }
    fetch(`${URI}/api/exams`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name: state.name })
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg);
        if (msg == "OK") {
          props.history.push("/exams/all");
        }
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="4">
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam Entry</strong> <i className="icon-note icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <FormField
                    type="text"
                    placeholder="Exam Name *"
                    name="name"
                    value={state.name}
                    onChange={changeHandler}
                    error={state.error}
                  />
                  <Button block color="primary" onClick={clickHandler}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
