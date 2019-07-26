import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import PreviousExamSingleForm from "./PreviousExamSingleForm";

export default props => {
  const {
    nameOfExam,
    group_subject,
    institution,
    board,
    passingYear,
    rollNo,
    regNo,
    gpa,
    outOf
  } = props;

  const data = {
    nameOfExam,
    group_subject,
    institution,
    board,
    passingYear,
    rollNo,
    regNo,
    gpa,
    outOf
  };

  const [edit, setEdit] = React.useState(false);
  const editClick = () => setEdit(true);

  if (!edit)
    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <Row>
                    <Col>Name Of Exam</Col>
                    <Col>
                      : <strong>{nameOfExam}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Group/Subject</Col>
                    <Col>
                      : <strong>{group_subject}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Institution</Col>
                    <Col>
                      : <strong>{institution}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Board</Col>
                    <Col>
                      : <strong>{board}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Passing Year</Col>
                    <Col>
                      : <strong>{passingYear}</strong>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>Roll No</Col>
                    <Col>
                      : <strong>{rollNo}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Registration No</Col>
                    <Col>
                      : <strong>{regNo}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>GPA/CGPA</Col>
                    <Col>
                      : <strong>{gpa}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Out Of</Col>
                    <Col>
                      : <strong>{outOf}</strong>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginTop: "15px" }}>
                  <Button color="primary" onClick={editClick}>
                    Edit Exam
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  else
    return (
      <div style={{ marginBottom: "20px" }}>
        <PreviousExamSingleForm {...data} edit={true} editClose={() => setEdit(false)} />
      </div>
    );
};
