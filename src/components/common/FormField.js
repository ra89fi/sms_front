import React from "react";
import { FormGroup, Label, Col, FormText, Input } from "reactstrap";

const style = {
  border: "1px solid rgb(115,129,143, 0.4)"
};

export default props => {
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
            {false && <FormText color="muted">This is a help text</FormText>}
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
            {false && <FormText color="muted">This is a help text</FormText>}
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
            {props.values.map(val => (
              <FormGroup check inline>
                <Input
                  className="form-check-input"
                  type="radio"
                  id={props.placeholder}
                  name={props.placeholder}
                  onChange={changeHandler}
                  value={val}
                />
                <Label className="form-check-label" check htmlFor={props.placeholder}>
                  {val}
                </Label>
              </FormGroup>
            ))}
          </Col>
        </FormGroup>
      );
      break;
    default:
  }

  return <div>{inputElement}</div>;
};
