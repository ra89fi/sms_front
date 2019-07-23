import React from "react";
import { Button, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Col>
      {props.data.map((item, i) => (
        <div style={{ marginBottom: "20px" }} className="quickLink">
          <Link to={item.to} key={i}>
            <Button block color="primary">
              {item.name}
            </Button>
          </Link>
        </div>
      ))}
    </Col>
  );
};
