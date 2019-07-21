import React from "react";
import { Col, Row } from "reactstrap";
import InfoCard from "../common/InfoCard";
import LeaderBoard from "../common/LeaderBoard";

export default props => {
  return (
    <div>
      <Row>
        <Col>
          <InfoCard name="Sessions" data={4} />
        </Col>
        <Col>
          <InfoCard name="Students" data={230} />
        </Col>
        <Col>
          <InfoCard name="Teachers" data={10} />
        </Col>
      </Row>
      <Row>
        <Col />
        <Col>
          <LeaderBoard name="Student Leaderboard" />
        </Col>
      </Row>
    </div>
  );
};
