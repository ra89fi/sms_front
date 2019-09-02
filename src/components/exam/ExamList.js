import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import List from "../common/List";
import URI from "../../objects/uri";

const headerNames = {
  id: "ID",
  name: "Name"
};
const headersAllow = ["id", "name"];
const buttons = [
  {
    name: "Delete",
    color: "danger",
    onClick: "delete"
  },
  {
    name: "Marks",
    color: "primary",
    link: "/exams/marks"
  }
];

class ExamList extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.fetchExams();
  }
  fetchExams = () => {
    fetch(`${URI}/api/exams`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.status == 200) return response.json();
        else return response.text();
      })
      .then(msg => {
        console.log(msg);
        if (typeof msg == "object") this.setState({ data: msg });
      })
      .catch(err => console.log(err.message));
  };

  deleteExam = id => {
    console.log(id);
    fetch(`${URI}/api/exams/delete/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then(response => response.text())
      .then(msg => {
        console.log(msg);
        this.fetchExams();
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Exam List</strong> <i className="icon-list icons" />
              </CardHeader>
              <CardBody>
                <List
                  data={this.state.data}
                  headerNames={headerNames}
                  headersAllow={headersAllow}
                  buttons={buttons}
                  delete={id => {
                    this.deleteExam(id);
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExamList;
