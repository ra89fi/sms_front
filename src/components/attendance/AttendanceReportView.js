import React from "react";
import { Badge, Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Attendance Report</strong>
        <Button color="primary" outline onClick={props.onClick}>
          Go Back
        </Button>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="3">
            <Row>
              <Col>Class</Col>
              <Col>
                : <strong>{props.class}</strong>
              </Col>
            </Row>
            <Row>
              <Col>Group</Col>
              <Col>
                : <strong>{props.subject}</strong>
              </Col>
            </Row>
            <Row>
              <Col>From</Col>
              <Col>
                : <strong>{props.dateFrom}</strong>
              </Col>
            </Row>
            <Row>
              <Col>To</Col>
              <Col>
                : <strong>{props.dateTo}</strong>
              </Col>
            </Row>
            <hr />
            <p>
              <Badge color="success">P</Badge> : Present, <Badge color="danger">P</Badge> : Absent,{" "}
              <Badge color="warning">P</Badge> : Late
            </p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Student Name</th>
                  <th>Percentage</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td />
                  <td>
                    <Badge color="success">%P</Badge> <Badge color="danger">%A</Badge>{" "}
                    <Badge color="warning">%L</Badge>
                  </td>
                  <td>
                    <Row>
                      <Col>1</Col>
                      <Col>2</Col>
                      <Col>3</Col>
                      <Col>4</Col>
                      <Col>5</Col>
                      <Col>6</Col>
                      <Col>7</Col>
                      <Col>8</Col>
                      <Col>9</Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>Sampa Noori</td>
                  <td>
                    <Badge color="success">0%</Badge> <Badge color="danger">0%</Badge>{" "}
                    <Badge color="warning">0%</Badge>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>Sampa Noori</td>
                  <td>
                    <Badge color="success">0%</Badge> <Badge color="danger">0%</Badge>{" "}
                    <Badge color="warning">0%</Badge>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>Sampa Noori</td>
                  <td>
                    <Badge color="success">0%</Badge> <Badge color="danger">0%</Badge>{" "}
                    <Badge color="warning">0%</Badge>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>Sampa Noori</td>
                  <td>
                    <Badge color="success">0%</Badge> <Badge color="danger">0%</Badge>{" "}
                    <Badge color="warning">0%</Badge>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>Sampa Noori</td>
                  <td>
                    <Badge color="success">0%</Badge> <Badge color="danger">0%</Badge>{" "}
                    <Badge color="warning">0%</Badge>
                  </td>
                  <td>
                    <Row>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                      <Col>
                        <Badge color="success">P</Badge>
                      </Col>
                      <Col>
                        <Badge color="danger">A</Badge>
                      </Col>
                      <Col>
                        <Badge color="warning">L</Badge>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
