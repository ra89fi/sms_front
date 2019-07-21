import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import InputAddRemove from "../common/InputAddRemove";

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
