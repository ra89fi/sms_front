import React from "react";
import { FormGroup, Label, Col, FormText, Input } from "reactstrap";

export default props => {
  const style = {
    border: props.error ? "1px solid rgb(200,0,0, 0.4)" : "1px solid rgb(115,129,143, 0.4)"
  };

  const changeHandler = e => props.onChange(e);
  let inputElement = null;

  switch (props.type) {
    case "text":
      inputElement = (
        <FormGroup row>
          <Col>
            <Input
              type="text"
              placeholder={props.placeholder}
              style={style}
              name={props.name}
              onChange={changeHandler}
              value={props.value}
            />
            {props.error ? <FormText color="danger">* {props.error}</FormText> : ""}
          </Col>
        </FormGroup>
      );
      break;

    case "date":
      inputElement = (
        <FormGroup row>
          <Col>
            <Label htmlFor={props.placeholder}>{props.placeholder}</Label>
            <Input
              type="date"
              id={props.placeholder}
              style={style}
              name={props.name}
              onChange={changeHandler}
              value={props.value}
            />
            {props.error ? <FormText color="danger">* {props.error}</FormText> : ""}
          </Col>
        </FormGroup>
      );
      break;

    case "select":
      inputElement = (
        <FormGroup>
          <Label htmlFor={props.placeholder}>{props.placeholder}</Label>
          <Input
            type="select"
            id={props.placeholder}
            style={style}
            name={props.name}
            onChange={changeHandler}
            value={props.value}
          >
            {props.values.map((val, i) => (
              <option value={val} key={i}>
                {val}
              </option>
            ))}
          </Input>
          {props.error ? <FormText color="danger">* {props.error}</FormText> : ""}
        </FormGroup>
      );
      break;

    case "radio":
      inputElement = (
        <FormGroup row>
          {props.placeholder && (
            <Col md="3">
              <Label>{props.placeholder}</Label>
            </Col>
          )}
          <Col md="9">
            {props.values.map((val, i) => (
              <FormGroup check inline key={i}>
                <Input
                  className="form-check-input"
                  type="radio"
                  id={val}
                  name={props.name}
                  onChange={changeHandler}
                  value={val}
                />
                <Label className="form-check-label" check htmlFor={val}>
                  {val}
                </Label>
              </FormGroup>
            ))}
            {props.error ? <FormText color="danger">* {props.error}</FormText> : ""}
          </Col>
        </FormGroup>
      );
      break;
    default:
  }

  return <div>{inputElement}</div>;
};
