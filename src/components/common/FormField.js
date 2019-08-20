import React from "react";
import {
  FormGroup,
  Label,
  Col,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const formatDate = dateStr => {
  if (!dateStr) return "";
  const arr = new Date(dateStr).toLocaleDateString().split("/");
  if (arr[0].length == 1) arr[0] = "0" + arr[0];
  if (arr[1].length == 1) arr[1] = "0" + arr[1];
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

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
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{props.placeholder}</InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                style={style}
                name={props.name}
                onChange={changeHandler}
                value={props.value}
                disabled={props.disabled}
              />
            </InputGroup>
            {props.error ? (
              <FormText color="danger">
                {props.error
                  .replace(props.name, props.placeholder)
                  .replace(" *", "")
                  .replace(" *", "")}
              </FormText>
            ) : (
              ""
            )}
          </Col>
        </FormGroup>
      );
      break;

    case "date":
      inputElement = (
        <FormGroup row>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{props.placeholder}</InputGroupText>
              </InputGroupAddon>
              <Input
                type="date"
                style={style}
                name={props.name}
                onChange={changeHandler}
                value={formatDate(props.value)}
                disabled={props.disabled}
              />
            </InputGroup>
            {props.error ? (
              <FormText color="danger">
                {props.error.replace(props.name, props.placeholder).replace(" *", "")}
              </FormText>
            ) : (
              ""
            )}
          </Col>
        </FormGroup>
      );
      break;

    case "select":
      inputElement = (
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{props.placeholder}</InputGroupText>
            </InputGroupAddon>
            <Input
              type="select"
              style={style}
              name={props.name}
              onChange={changeHandler}
              value={props.value}
              disabled={props.disabled}
            >
              {props.values.map((val, i) => (
                <option value={val} key={i}>
                  {val}
                </option>
              ))}
            </Input>
          </InputGroup>
          {props.error ? (
            <FormText color="danger">
              {props.error.replace(props.name, props.placeholder).replace(" *", "")}
            </FormText>
          ) : (
            ""
          )}
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
                  checked={props.value === val ? true : false}
                  disabled={props.disabled}
                />
                <Label className="form-check-label" check htmlFor={val}>
                  {val}
                </Label>
              </FormGroup>
            ))}
            {props.error ? (
              <FormText color="danger">
                {props.error.replace(props.name, props.placeholder).replace(" *", "")}
              </FormText>
            ) : (
              ""
            )}
          </Col>
        </FormGroup>
      );
      break;
    default:
  }

  return <div>{inputElement}</div>;
};
