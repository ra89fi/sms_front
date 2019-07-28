import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";

const userData = [
  {
    id: "29067",
    name: "Raihan",
    email: "test@email.com",
    mobileNo: "67592746873"
  }
];
const buttons = [
  {
    name: "View",
    color: "success",
    link: "/users/profile"
  },
  {
    name: "Delete",
    color: "danger"
  }
];

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>User List</strong> <i className="icon-list icons" />
            </CardHeader>
            <CardBody>
              <List data={userData} buttons={buttons} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
