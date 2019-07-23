import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{props.name}</strong>
        <i className={["icons", props.icon].join(" ")} />
      </CardHeader>
      <CardBody>
        <h5>{props.data}</h5>
      </CardBody>
    </Card>
  );
};
