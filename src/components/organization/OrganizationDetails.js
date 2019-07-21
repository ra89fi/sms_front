import React from "react";
import InputAddRemove from "../common/InputAddRemove";
import { Card, CardBody, CardHeader } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader>
        <strong>Organization Details</strong>
      </CardHeader>
      <CardBody>
        <InputAddRemove placeholder="Course Name" />
      </CardBody>
    </Card>
  );
};
