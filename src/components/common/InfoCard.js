import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader>{props.name}</CardHeader>
      <CardBody>{props.data}</CardBody>
    </Card>
  );
};
