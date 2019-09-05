import React from "react";
import { connect } from "react-redux";
import { Button, Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import Joi from "@hapi/joi";
import FormField from "../common/FormField";
import { fetchLatestAdmissions } from "../../actions/admissions";
import URI from "../../objects/uri";

class ExamMarksForm extends React.Component {
  // read props.values and students accordingly
  // for each student create a row in table
  // take their attendance
  state = {
    data: {},
    total: "",
    highest: "",
    errors: {}
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
          marks: "",
          rollNo: ad[studentId]["rollNo"],
          studentId,
          yxid: this.props.yxid
        };
    });
    console.log("data", data);
    this.setState({ data });
  }

  marksChange = (e, rollNo) => {
    if (!this.state.total) {
      this.setState({
        ...this.state,
        errors: {
          total: '"Total" must be a valid number'
        }
      });
      return;
    }
    const marks = e.target.value;
    let error = Joi.validate(marks, Joi.number().integer()).error;
    if (error || parseInt(marks) > parseInt(this.state.total)) {
      e.target.style.border = "1px solid red";
    } else e.target.style.border = "1px solid rgba(115, 129, 143, 0.4)";
    const row = this.state.data[rollNo];
    this.setState({
      data: {
        ...this.state.data,
        [rollNo]: {
          ...row,
          marks
        }
      }
    });
  };

  submitHandler = () => {
    // validate total and highest
    let error;
    error = Joi.validate(
      this.state.total,
      Joi.number()
        .integer()
        .required()
    ).error;
    if (error) {
      this.setState({
        ...this.state,
        errors: {
          total: '"Total" must be a valid number'
        }
      });
      return;
    }
    error = Joi.validate(
      this.state.highest,
      Joi.number()
        .integer()
        .required()
    ).error;
    if (error) {
      this.setState({
        ...this.state,
        errors: {
          highest: '"Highest Marks" must be a valid number'
        }
      });
      return;
    }
    this.setState({ errors: {} });
    const errors = [];
    Object.values(this.state.data).forEach(d => {
      if (!d.marks) errors.push(1);
    });
    if (errors.length) return;
    console.log(this.state, this.props.yxid);
    // send data to server
    fetch(`${URI}/api/exams/sxid`, {
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
        date: this.props.date,
        marks: this.state.total,
        highest: this.state.highest,
        yxid: this.props.yxid
      })
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg);
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
              <strong>Marks Entry</strong>
              <Button color="primary" outline onClick={this.props.backClick}>
                Go Back
              </Button>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="4">
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
                <Col>
                  <Row>
                    <Col>
                      <FormField
                        type="text"
                        placeholder="Total Marks *"
                        name="total"
                        value={this.state.total}
                        onChange={e => this.setState({ total: e.target.value })}
                        error={this.state.errors.total}
                      />
                    </Col>
                    <Col>
                      <FormField
                        type="text"
                        placeholder="Highest *"
                        name="highest"
                        value={this.state.highest}
                        onChange={e => this.setState({ highest: e.target.value })}
                        error={this.state.errors.highest}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p></p>
              <Row>
                <Col xs="4">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Roll No</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map(stu => (
                        <tr key={stu.rollNo}>
                          <td>{stu.rollNo}</td>
                          <td className="removeMarginBottom">
                            <input
                              type="text"
                              name="marks"
                              value={this.state.data[stu.rollNo].marks}
                              onChange={e => this.marksChange(e, stu.rollNo)}
                              style={{ width: "100%" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {students.length == 0 ? <p>No students in this class.</p> : ""}
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
)(ExamMarksForm);
