import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";

export default props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Exam List</strong> <i className="icon-list icons" />
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Degree</th>
                    <th>Subject</th>
                    <th>Session</th>
                    <th>Exam Name</th>
                    <th>Exam Description</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Honors</td>
                    <td>Geography</td>
                    <td>2013-14</td>
                    <td>11152622</td>
                    <td>62389</td>
                    <td>saumik</td>
                    <td>
                      <Link to="/exams/details/123">
                        <Button color="success" size="sm" className="btn-pill">
                          View
                        </Button>
                      </Link>
                      &nbsp;
                      <Link to="/exams/entry/123">
                        <Button color="warning" size="sm" className="btn-pill">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button color="danger" size="sm" className="btn-pill">
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/exams/marks/123">
                        <Button color="primary" size="sm" className="btn-pill">
                          Entry Marks
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Honors</td>
                    <td>Geography</td>
                    <td>2013-14</td>
                    <td>11152622</td>
                    <td>62389</td>
                    <td>saumik</td>
                    <td>
                      <Link to="/exams/details/123">
                        <Button color="success" size="sm" className="btn-pill">
                          View
                        </Button>
                      </Link>
                      &nbsp;
                      <Link to="/exams/entry/123">
                        <Button color="warning" size="sm" className="btn-pill">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button color="danger" size="sm" className="btn-pill">
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/exams/marks/123">
                        <Button color="primary" size="sm" className="btn-pill">
                          Entry Marks
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Honors</td>
                    <td>Geography</td>
                    <td>2013-14</td>
                    <td>11152622</td>
                    <td>62389</td>
                    <td>saumik</td>
                    <td>
                      <Link to="/exams/details/123">
                        <Button color="success" size="sm" className="btn-pill">
                          View
                        </Button>
                      </Link>
                      &nbsp;
                      <Link to="/exams/entry/123">
                        <Button color="warning" size="sm" className="btn-pill">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button color="danger" size="sm" className="btn-pill">
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/exams/marks/123">
                        <Button color="primary" size="sm" className="btn-pill">
                          Entry Marks
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Honors</td>
                    <td>Geography</td>
                    <td>2013-14</td>
                    <td>11152622</td>
                    <td>62389</td>
                    <td>saumik</td>
                    <td>
                      <Link to="/exams/details/123">
                        <Button color="success" size="sm" className="btn-pill">
                          View
                        </Button>
                      </Link>
                      &nbsp;
                      <Link to="/exams/entry/123">
                        <Button color="warning" size="sm" className="btn-pill">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button color="danger" size="sm" className="btn-pill">
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/exams/marks/123">
                        <Button color="primary" size="sm" className="btn-pill">
                          Entry Marks
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Honors</td>
                    <td>Geography</td>
                    <td>2013-14</td>
                    <td>11152622</td>
                    <td>62389</td>
                    <td>saumik</td>
                    <td>
                      <Link to="/exams/details/123">
                        <Button color="success" size="sm" className="btn-pill">
                          View
                        </Button>
                      </Link>
                      &nbsp;
                      <Link to="/exams/entry/123">
                        <Button color="warning" size="sm" className="btn-pill">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button color="danger" size="sm" className="btn-pill">
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/exams/marks/123">
                        <Button color="primary" size="sm" className="btn-pill">
                          Entry Marks
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Honors</td>
                    <td>Geography</td>
                    <td>2013-14</td>
                    <td>11152622</td>
                    <td>62389</td>
                    <td>saumik</td>
                    <td>
                      <Link to="/exams/details/123">
                        <Button color="success" size="sm" className="btn-pill">
                          View
                        </Button>
                      </Link>
                      &nbsp;
                      <Link to="/exams/entry/123">
                        <Button color="warning" size="sm" className="btn-pill">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button color="danger" size="sm" className="btn-pill">
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/exams/marks/123">
                        <Button color="primary" size="sm" className="btn-pill">
                          Entry Marks
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
