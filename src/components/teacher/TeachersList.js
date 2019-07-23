import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Button, Table } from "reactstrap";

class TeacherList extends Component {
  render() {
    return (
      <Card>
        <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Teachers List</strong> <i className="icon-list icons" />
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1111</td>
                <td>Saumik Nondi</td>
                <td>Geography</td>
                <td>9034704096</td>
                <td>n.saumik333@gmail.com</td>
                <td>
                  <Link to="/teachers/profile/123">
                    <Button color="success" size="sm" className="btn-pill">
                      View
                    </Button>
                  </Link>
                  &nbsp;
                  <Link to="/teachers/entry/123">
                    <Button color="warning" size="sm" className="btn-pill">
                      Edit
                    </Button>
                  </Link>
                  &nbsp;
                  <Button color="danger" size="sm" className="btn-pill">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default TeacherList;
