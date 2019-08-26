import React from "react";
import { Badge, Button, Card, CardHeader, CardBody, Col, Row, Table } from "reactstrap";
import URI from "../../objects/uri";

const formatDate = dateStr => {
  if (!dateStr) return "";
  const arr = new Date(dateStr).toLocaleDateString().split("/");
  if (arr[0].length == 1) arr[0] = "0" + arr[0];
  if (arr[1].length == 1) arr[1] = "0" + arr[1];
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

const formatStatus = status => {
  if (status == "Present") return <Badge color="success">{status[0]}</Badge>;
  else if (status == "Absent") return <Badge color="danger">{status[0]}</Badge>;
  else if (status == "Late") return <Badge color="warning">{status[0]}</Badge>;
};

const getPercentages = obj => {
  const total = Object.keys(obj).length;
  let [p, a, l] = [0, 0, 0];
  Object.keys(obj).forEach(date => {
    if (obj[date] == "Present") p++;
    else if (obj[date] == "Absent") a++;
    else if (obj[date] == "Late") l++;
  });
  return (
    <td>
      <Badge color="success">{((p / total) * 100).toFixed(2)}%</Badge>&nbsp;
      <Badge color="danger">{((a / total) * 100).toFixed(2)}%</Badge>&nbsp;
      <Badge color="warning">{((l / total) * 100).toFixed(2)}%</Badge>
    </td>
  );
};

class AttendanceReportView extends React.Component {
  state = { data: {} };

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
    // console.log(this.state.data);
    // prepare data for viewing
    const dates = [];
    const students = {};
    const attId_date_map = {};
    if (this.state.data.atts) {
      this.state.data.atts.forEach(row => {
        attId_date_map[row.id] = formatDate(row.date);
        dates.push(formatDate(row.date));
      });
      this.state.data.stus.forEach(row => {
        students[row.studentId] = students[row.studentId] || {};
        students[row.studentId].rollNo = row.rollNo;
        students[row.studentId].studentId = row.studentId;
        students[row.studentId].dates = students[row.studentId].dates || {};
        students[row.studentId].dates[attId_date_map[row.attId]] = row.status;
      });
      console.log(students);
    }
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
                        {dates.map(date => (
                          <Col key={date}>{date}</Col>
                        ))}
                      </Row>
                    </td>
                  </tr>
                  {Object.keys(students).map(studentId => (
                    <tr key={studentId}>
                      <td>{students[studentId].rollNo}</td>
                      {getPercentages(students[studentId].dates)}
                      <td>
                        <Row>
                          {dates.map(date => (
                            <Col key={date}>
                              {formatStatus(students[studentId].dates[date] || "Absent")}
                            </Col>
                          ))}
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
