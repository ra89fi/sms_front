import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  const [state, setState] = React.useState({});

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const clickHandler = () => {
    console.log(state);
    // validate and send to server
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
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={state.date}
                    onChange={changeHandler}
                  />
                  <FormField
                    type="text"
                    placeholder="Class *"
                    name="class"
                    value={state.class}
                    onChange={changeHandler}
                  />
                  <FormField
                    type="text"
                    placeholder="Group"
                    name="group"
                    value={state.group}
                    onChange={changeHandler}
                    disabled={state.class != "9" && state.class != "10"}
                  />
                  <FormField
                    type="text"
                    placeholder="Subject *"
                    name="subject"
                    value={state.subject}
                    onChange={changeHandler}
                  />
                  <FormField
                    type="text"
                    placeholder="Exam Name"
                    name="name"
                    value={state.name}
                    onChange={changeHandler}
                  />
                  <FormField
                    type="text"
                    placeholder="Exam Description"
                    name="description"
                    value={state.description}
                    onChange={changeHandler}
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
