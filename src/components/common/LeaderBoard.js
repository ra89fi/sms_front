import React from "react";
import { Badge, Card, CardHeader, CardBody, Table } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader>{props.name}</CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Student</th>
              <th>Session</th>
              <th>Role</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samppa Nori</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
                <Badge color="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>Estavan Lykos</td>
              <td>2012/02/01</td>
              <td>Staff</td>
              <td>
                <Badge color="danger">Banned</Badge>
              </td>
            </tr>
            <tr>
              <td>Chetan Mohamed</td>
              <td>2012/02/01</td>
              <td>Admin</td>
              <td>
                <Badge color="secondary">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>Derick Maximinus</td>
              <td>2012/03/01</td>
              <td>Member</td>
              <td>
                <Badge color="warning">Pending</Badge>
              </td>
            </tr>
            <tr>
              <td>Friderik Dávid</td>
              <td>2012/01/21</td>
              <td>Staff</td>
              <td>
                <Badge color="success">Active</Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
