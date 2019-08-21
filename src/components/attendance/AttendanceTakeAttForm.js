import React from "react";
import { connect } from "react-redux";
import { Button, Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import FormField from "../common/FormField";
import { fetchLatestAdmissions } from "../../actions/admissions";
import URI from "../../objects/uri";

class AttendanceTakeAttForm extends React.Component {
  // read props.values and students accordingly
  // for each student create a row in table
  // take their attendance
  state = {
    data: {}
    // data: {
    //   11152622: {
    //     status: "",
    //     notes: ""
    //   },
    //   11152623: {
    //     status: "",
    //     notes: ""
    //   }
    // }
  };

  componentDidMount() {
    // get latest admissions
    this.props.fetchLatestAdmissions();
  }

  componentWillReceiveProps(nextProps) {
    // filter by selected class and group
    const data = {};
    const className = this.props.class;
    const group = this.props.group || "";
    const ad = nextProps.latestAdmissions;
    Object.keys(ad).forEach(studentId => {
      if (ad[studentId]["class"] == className && ad[studentId]["group"] == group)
        data[ad[studentId]["rollNo"]] = {
          status: "",
          notes: "",
          rollNo: ad[studentId]["rollNo"],
          studentId
        };
    });
    console.log("data", data);
    this.setState({ data });
  }

  setAttendanceAll = value => {
    const newData = Object.assign({}, this.state.data);
    for (let key in newData) newData[key].status = value;
    this.setState({
      data: newData
    });
  };

  radioHandler = e => {
    const row = this.state.data[e.target.name];
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: {
          ...row,
          status: e.target.value
        }
      }
    });
  };

  notesChange = (e, id) => {
    const str = e.target.value;
    const row = this.state.data[id];
    this.setState({
      data: {
        ...this.state.data,
        [id]: {
          ...row,
          notes: str
        }
      }
    });
  };

  submitHandler = () => {
    console.log({
      data: this.state.data,
      class: this.props.class,
      group: this.props.group || "",
      subject: this.props.subject,
      date: this.props.date
    });
    // send data to server
    fetch(`${URI}/api/attendances`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        data: this.state.data,
        class: this.props.class,
        group: this.props.group || "",
        subject: this.props.subject,
        date: this.props.date
      })
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg, this.props);
        this.props.backClick();
      })
      .catch(err => console.log(err.message));
  };

  render() {
    // console.log(this.props);
    const students = Object.values(this.state.data);
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Take Attendance</strong>
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
                    <Col>Date</Col>
                    <Col>
                      : <strong>{this.props.date}</strong>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p></p>
              <Row>
                <Col>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Roll No</th>
                        <th>Attendance</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td />
                        <td>
                          <span style={{ opacity: 0.6 }}>Select All</span> &nbsp;
                          <Button
                            color="success"
                            size="sm"
                            className="btn-pill"
                            onClick={() => this.setAttendanceAll("Present")}
                          >
                            Present
                          </Button>
                          &nbsp;
                          <Button
                            color="danger"
                            size="sm"
                            className="btn-pill"
                            onClick={() => this.setAttendanceAll("Absent")}
                          >
                            Absent
                          </Button>
                          &nbsp;
                          <Button
                            color="warning"
                            size="sm"
                            className="btn-pill"
                            onClick={() => this.setAttendanceAll("Late")}
                          >
                            Late
                          </Button>
                        </td>
                        <td />
                      </tr>
                      {students.map(stu => (
                        <tr key={stu.rollNo}>
                          <td>{stu.rollNo}</td>
                          <td>
                            <FormField
                              type="radio"
                              values={["Present", "Absent", "Late"]}
                              name={stu.rollNo}
                              value={this.state.data[stu.rollNo].status}
                              onChange={this.radioHandler}
                            />
                          </td>
                          <td className="removeMarginBottom">
                            <FormField
                              placeholder="Notes"
                              type="text"
                              name="notes"
                              value={this.state.data[stu.rollNo].notes}
                              onChange={e => this.notesChange(e, stu.rollNo)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col style={{ minHeight: "30px" }} />
              </Row>
              <Row>
                <Col />
                <Col>
                  <Button block color="primary" onClick={this.submitHandler}>
                    Save
                  </Button>
                </Col>
                <Col />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => ({
    latestAdmissions: state.latestAdmissions
  }),
  { fetchLatestAdmissions }
)(AttendanceTakeAttForm);
