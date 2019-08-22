import React from "react";
import { Badge, Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import URI from "../../objects/uri";

class AttendanceReportView extends React.Component {
  state = { data: [] };

  componentDidMount() {
    console.log({
      class: this.props.class,
      group: this.props.group || "",
      subject: this.props.subject,
      dateFrom: this.props.dateFrom,
      dateTo: this.props.dateTo
    });
    // send data to server
    fetch(`${URI}/api/attendances/report`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        class: this.props.class,
        group: this.props.group || "",
        subject: this.props.subject,
        dateFrom: this.props.dateFrom,
        dateTo: this.props.dateTo
      })
    })
      .then(response => {
        if (response.status == "200") return response.json();
        return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (msg == "ERROR") return;
        this.setState({ data: msg });
        // this.props.backClick();
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <Card>
        <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Attendance Report</strong>
          <Button color="primary" outline onClick={this.props.backClick}>
            Go Back
          </Button>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="3">
              <Row>
                <Col>Class</Col>
                <Col>
                  : <strong>{this.props.class}</strong>
                </Col>
              </Row>
              <Row>
                <Col>Group</Col>
                <Col>
                  : <strong>{this.props.group}</strong>
                </Col>
              </Row>
              <Row>
                <Col>Subject</Col>
                <Col>
                  : <strong>{this.props.subject}</strong>
                </Col>
              </Row>
              <Row>
                <Col>From</Col>
                <Col>
                  : <strong>{this.props.dateFrom}</strong>
                </Col>
              </Row>
              <Row>
                <Col>To</Col>
                <Col>
                  : <strong>{this.props.dateTo}</strong>
                </Col>
              </Row>
            </Col>
            <Col />
            <Col>
              <p>
                <Badge color="success">P</Badge> : Present, <Badge color="danger">P</Badge> :
                Absent, <Badge color="warning">P</Badge> : Late
              </p>
            </Col>
            <Col />
          </Row>
          <p></p>
          <Row>
            <Col>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Roll No</th>
                    <th>Percentage</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>
                      <Badge color="success">%P</Badge> <Badge color="danger">%A</Badge>{" "}
                      <Badge color="warning">%L</Badge>
                    </td>
                    <td>
                      <Row>
                        <Col>{this.props.dateFrom}</Col>
                      </Row>
                    </td>
                  </tr>
                  {this.state.data.map(stu => (
                    <tr key={stu.rollNo}>
                      <td>{stu.rollNo}</td>
                      <td>
                        <Badge color="success">0%</Badge> <Badge color="danger">0%</Badge>{" "}
                        <Badge color="warning">0%</Badge>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Badge color="success">{stu.status[0]}</Badge>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default AttendanceReportView;
