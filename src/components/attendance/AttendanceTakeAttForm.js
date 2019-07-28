import React from "react";
import { Button, Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import FormField from "../common/FormField";

class AttendanceTakeAttForm extends React.Component {
  // read props.values and students accordingly
  // for each student create a row in table
  // take their attendance
  state = {
    data: {
      11152622: {
        status: "",
        notes: ""
      },
      11152623: {
        status: "",
        notes: ""
      }
    }
  };

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
    console.log(this.state.data);
    // validate that each student has valid attendance values
    // send data to server
  };

  render() {
    return (
      <Card>
        <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Take Attendance</strong>
          <Button color="primary" outline onClick={this.props.onClick}>
            Go Back
          </Button>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Attendance</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td style={{ opacity: 0.6 }}>Select All</td>
                <td>
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
              <tr>
                <td>11152622</td>
                <td>saumik</td>
                <td>
                  <FormField
                    type="radio"
                    values={["Present", "Absent", "Late"]}
                    name="11152622"
                    value={this.state.data["11152622"].status}
                    onChange={this.radioHandler}
                  />
                </td>
                <td className="removeMarginBottom">
                  <FormField
                    placeholder="Notes"
                    type="text"
                    name="notes"
                    value={this.state.data["11152622"].notes}
                    onChange={e => this.notesChange(e, "11152622")}
                  />
                </td>
              </tr>
              <tr>
                <td>11152623</td>
                <td>saumik</td>
                <td>
                  <FormField
                    type="radio"
                    values={["Present", "Absent", "Late"]}
                    name="11152623"
                    value={this.state.data["11152623"].status}
                    onChange={this.radioHandler}
                  />
                </td>
                <td className="removeMarginBottom">
                  <FormField
                    placeholder="Notes"
                    type="text"
                    name="notes"
                    value={this.state.data["11152623"].notes}
                    onChange={e => this.notesChange(e, "11152623")}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col style={{ minHeight: "30px" }} />
          </Row>
          <Row>
            <Col />
            <Col>
              <Button block color="primary" onClick={this.submitHandler}>
                Submit
              </Button>
            </Col>
            <Col />
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default AttendanceTakeAttForm;
