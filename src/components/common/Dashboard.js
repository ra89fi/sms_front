import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import InfoCard from "./InfoCard";
import LeaderBoard from "./LeaderBoard";
import QuickLinks from "./QuickLinks";

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <InfoCard name="Users" data={4} icon="icon-people" />
        </Col>
        <Col>
          <InfoCard name="Students" data={230} icon="icon-people" />
        </Col>
        <Col>
          <InfoCard name="Teachers" data={10} icon="icon-people" />
        </Col>
        <Col>
          <InfoCard name="Sessions" data={4} icon="icon-layers" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Quick Links</strong>
              <i className="icon-link icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <QuickLinks
                  data={[
                    { name: "Register Student", to: "/student/registration" },
                    { name: "See All Students", to: "/student/all" },
                    { name: "Take Attendance", to: "/attendance/take" },
                    { name: "See Attendance Report", to: "/attendance/report" }
                  ]}
                />
                <QuickLinks
                  data={[
                    { name: "Entry Exam", to: "/exams/entry" },
                    { name: "See All Exams", to: "/exams/all" },
                    { name: "Entry Teacher", to: "/teachers/entry" },
                    { name: "See All Teachers", to: "/teachers/all" }
                  ]}
                />
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
