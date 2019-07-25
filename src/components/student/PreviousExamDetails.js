import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import PreviousExamSingle from "./PreviousExamSingle";
import PreviousExamSingleView from "./PreviousExamSingleView";

export default props => {
  const { jsc, psc, ssc, hsc, honors, masters } = props;
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Previous Exam Details</strong>
        <i className="icon-note icons" />
      </CardHeader>
      <CardBody>
        {Object.keys(jsc).length ? <PreviousExamSingleView {...jsc} /> : ""}
        {Object.keys(psc).length ? <PreviousExamSingleView {...psc} /> : ""}
        {Object.keys(ssc).length ? <PreviousExamSingleView {...ssc} /> : ""}
        {Object.keys(hsc).length ? <PreviousExamSingleView {...hsc} /> : ""}
        {Object.keys(honors).length ? <PreviousExamSingleView {...honors} /> : ""}
        {Object.keys(masters).length ? <PreviousExamSingleView {...masters} /> : ""}
        <PreviousExamSingle />
      </CardBody>
    </Card>
  );
};
