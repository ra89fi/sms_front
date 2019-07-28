import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";

const examData = [
  {
    id: "29067429867473",
    degree: "Honors",
    subject: "Geography",
    session: "2013-14",
    name: "Exam Name",
    description: "Description",
    date: "12/7/2019"
  }
];
const buttons = [
  {
    name: "View",
    color: "success",
    link: "/exams/details"
  },
  {
    name: "Edit",
    color: "warning",
    link: "/exams/entry"
  },
  {
    name: "Delete",
    color: "danger"
  },
  {
    name: "Marks",
    color: "primary",
    link: "/exams/marks"
  }
];

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam List</strong> <i className="icon-list icons" />
            </CardHeader>
            <CardBody>
              <List data={examData} buttons={buttons} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
