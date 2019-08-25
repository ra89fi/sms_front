import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";
import URI from "../../objects/uri";

const listHeaders = {
  id: "ID",
  username: "Username",
  email: "Email"
};
const headersAllow = ["id", "username", "email"];

const buttons = [
  {
    name: "View",
    color: "success",
    link: "/users/profile"
  },
  {
    name: "Delete",
    color: "danger",
    onClick: "delete"
  }
];

class UserList extends React.Component {
  state = { users: [] };

  componentDidMount() {
    fetch(`${URI}/api/users`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status == 200) return response.json();
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg == "object" && msg.length) this.setState({ users: msg });
      })
      .catch(err => console.log(err.message));
  }

  deleteUser = id => {
    fetch(`${URI}/api/users/delete/${id}`, {
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
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Users List</strong> <i className="icon-list icons" />
              </CardHeader>
              <CardBody>
                <List
                  data={this.state.users}
                  headerNames={listHeaders}
                  headersAllow={headersAllow}
                  buttons={buttons}
                  delete={this.deleteUser}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserList;
