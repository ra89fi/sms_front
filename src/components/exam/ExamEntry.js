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
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam Entry</strong> <i className="icon-note icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <FormField
                    type="select"
                    placeholder="Degree"
                    name="degree"
                    value={state.degree}
                    onChange={changeHandler}
                    values={["", "Honors", "Masters"]}
                  />
                </Col>
                <Col>
                  <FormField
                    type="select"
                    placeholder="Subject"
                    name="subject"
                    value={state.subject}
                    onChange={changeHandler}
                    values={["", "Geography"]}
                  />
                </Col>
                <Col>
                  <FormField
                    type="select"
                    placeholder="Session"
                    name="session"
                    value={state.session}
                    onChange={changeHandler}
                    values={["", "2019-20", "2020-21"]}
                  />
                </Col>
                <Col>
                  <FormField
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={state.date}
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormField
                    type="text"
                    placeholder="Exam Name"
                    name="name"
                    value={state.name}
                    onChange={changeHandler}
                  />
                </Col>
                <Col>
                  <FormField
                    type="text"
                    placeholder="Exam Description"
                    name="description"
                    value={state.description}
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col />
                <Col>
                  <Button block color="primary" onClick={clickHandler}>
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
};
