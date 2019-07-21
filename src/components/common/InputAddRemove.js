import React, { Component } from "react";
import { Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import FormField from "./FormField";

class InputAddRemove extends Component {
  // TODO: remove hard coded state and use passed props for dynamics
  state = {
    name: "",
    duration: "",
    items: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDelete = idx => {
    let currentItems = [...this.state.items];
    const updatedState = currentItems.filter(item => {
      // TODO: use non-repeating IDs
      return item.name !== this.state.items[idx].name;
    });
    this.setState({ items: updatedState });
  };

  handleAdd = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          name: this.state.name,
          duration: this.state.duration
        }
      ],
      name: "",
      duration: ""
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col xs="4">
            <FormField
              type="text"
              placeholder={this.props.placeholder}
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <FormField
              type="select"
              placeholder="Duration"
              values={["", "option1", "option2"]}
              name="duration"
              onChange={this.handleChange}
              value={this.state.duration}
            />
            <Row>
              <Col />
              <Col>
                <Button block color="primary" onClick={this.handleAdd}>
                  Add
                </Button>
              </Col>
              <Col />
            </Row>
          </Col>
          <Col>
            <ListGroup>
              {this.state.items.map((item, idx) => (
                <ListGroupItem action color="success" key={idx}>
                  <Row>
                    <Col xs="7">{item.name}</Col>
                    <Col xs="3">{item.duration}</Col>
                    <Col />
                    <Col xs="1">
                      <i className="icon-close icons" onClick={() => this.handleDelete(idx)} />
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default InputAddRemove;
