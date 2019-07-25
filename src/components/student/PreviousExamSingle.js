import React from "react";
import { Button, Col, Row } from "reactstrap";
import FormField from "../common/FormField";
import configureStore from "../../store/configureStore";
import { updateSingleExam } from "../../actions/student";

const store = configureStore();

export default props => {
  const {
    nameOfExam = "",
    group_subject = "",
    institution = "",
    board = "",
    passingYear = "",
    rollNo = "",
    regNo = "",
    gpa = "",
    outOf = ""
  } = props;

  const [state, setState] = React.useState({
    nameOfExam,
    group_subject,
    institution,
    board,
    passingYear,
    rollNo,
    regNo,
    gpa,
    outOf
  });

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const addHandler = () => {
    console.log(state);
    store.dispatch(updateSingleExam(state));
    if (props.editClose) props.editClose();
    setState({
      nameOfExam: "",
      group_subject: "",
      institution: "",
      board: "",
      passingYear: "",
      rollNo: "",
      regNo: "",
      gpa: "",
      outOf: ""
    });
  };

  return (
    <div>
      <Row>
        <Col>
          <FormField
            type="text"
            placeholder="Name Of Exam"
            name="nameOfExam"
            value={state.nameOfExam}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Group/Subject"
            name="group_subject"
            value={state.group_subject}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Institution"
            name="institution"
            value={state.institution}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Board"
            name="board"
            value={state.board}
            onChange={changeHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormField
            type="text"
            placeholder="Roll No"
            name="rollNo"
            value={state.rollNo}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Registration No"
            name="regNo"
            value={state.regNo}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="GPA/CGPA"
            name="gpa"
            value={state.gpa}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Out Of"
            name="outOf"
            value={state.outOf}
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Passing Year"
            name="passingYear"
            value={state.passingYear}
            onChange={changeHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={addHandler}>
            {props.edit ? "Save" : "Add Exam"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
