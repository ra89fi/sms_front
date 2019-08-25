import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import URI from "../../objects/uri";

class UserProfile extends React.Component {
  state = { user: {} };

  componentDidMount() {
    fetch(`${URI}/api/users/${this.props.match.params.id}`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status == 200) return response.json();
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg == "object" && msg.length) this.setState({ user: msg[0] });
      })
      .catch(err => console.log(err.message));
  }

  deleteUser = () => {
    fetch(`${URI}/api/users/delete/${this.state.user.id}`, {
      method: "POST",
      mode: "cors"
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg);
        if (msg == "OK") this.props.history.push("/users/all");
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="4">
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{this.state.user.username}</strong> <i className="icon-user icons" />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>ID</Col>
                  <Col>
                    : <strong>{this.state.user.id}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>Email</Col>
                  <Col>
                    : <strong>{this.state.user.email}</strong>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <div className="quickLink">
              <Button block color="danger" onClick={this.deleteUser}>
                Delete Profile
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfile;
