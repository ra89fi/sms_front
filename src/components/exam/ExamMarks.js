import React from "react";
import { Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import FormField from "../common/FormField";

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Entry Marks</strong> <i className="icon-note icons" />
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="4">
                  <Row>
                    <Col>Degree</Col>
                    <Col>: Honors</Col>
                  </Row>
                  <Row>
                    <Col>Subject</Col>
                    <Col>: Geogrpahy</Col>
                  </Row>
                  <Row>
                    <Col>Session</Col>
                    <Col>: 2019-20</Col>
                  </Row>
                  <Row>
                    <Col>Exam Name</Col>
                    <Col>: Tutorial 1</Col>
                  </Row>
                  <Row>
                    <Col>Exam Description</Col>
                    <Col>: Exam Description</Col>
                  </Row>
                  <Row>
                    <Col>Date</Col>
                    <Col>: 7/12/2019</Col>
                  </Row>
                </Col>
                <Col />
              </Row>
              <Row>
                <Col style={{ minHeight: "30px" }} />
              </Row>
              <Row>
                <Col>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Roll No</th>
                        <th>Student Name</th>
                        <th>Marks</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>11152622</td>
                        <td>saumik</td>
                        <td className="removeMarginBottom">
                          <FormField type="text" placeholder="Marks" />
                        </td>
                        <td className="removeMarginBottom">
                          <FormField placeholder="Notes" type="text" />
                        </td>
                      </tr>

                      <tr>
                        <td>11152622</td>
                        <td>saumik</td>
                        <td className="removeMarginBottom">
                          <FormField type="text" placeholder="Marks" />
                        </td>
                        <td className="removeMarginBottom">
                          <FormField placeholder="Notes" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td>11152622</td>
                        <td>saumik</td>
                        <td className="removeMarginBottom">
                          <FormField type="text" placeholder="Marks" />
                        </td>
                        <td className="removeMarginBottom">
                          <FormField placeholder="Notes" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td>11152622</td>
                        <td>saumik</td>
                        <td className="removeMarginBottom">
                          <FormField type="text" placeholder="Marks" />
                        </td>
                        <td className="removeMarginBottom">
                          <FormField placeholder="Notes" type="text" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col style={{ minHeight: "20px" }} />
              </Row>
              <Row>
                <Col>
                  <Button block color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
