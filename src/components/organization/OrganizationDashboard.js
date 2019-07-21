import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import InfoCard from "../common/InfoCard";
import LeaderBoard from "../common/LeaderBoard";
import QuickLinks from "../common/QuickLinks";

export default props => {
  return (
    <div>
      <Row>
        <Col>
          <InfoCard name="Sessions" data={4} icon="icon-layers" />
        </Col>
        <Col>
          <InfoCard name="Students" data={230} icon="icon-people" />
        </Col>
        <Col>
          <InfoCard name="Teachers" data={10} icon="icon-people" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              Quick Links
              <i className="icon-link icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <QuickLinks data={[{ name: "Take Attendance", to: "/attendance/take" }]} />
                <QuickLinks data={[{ name: "Take Attendance", to: "/attendance/take" }]} />
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <LeaderBoard name="Student Leaderboard" />
        </Col>
      </Row>
    </div>
  );
};
