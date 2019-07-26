import React from "react";
import { Button, Col, Row } from "reactstrap";
import Joi from "@hapi/joi";
import configureStore from "../../store/configureStore";
import FormField from "../common/FormField";
import { updateSingleExam } from "../../actions/student";
import { previousExamSchema } from "../../validations/student";

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

  const [errors, setErrors] = React.useState({});

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const addHandler = () => {
    let error = Joi.validate(state, previousExamSchema).error;
    if (error) {
      const err = error.details[0];
      const name = err.path[0];
      setErrors({
        [name]: err.message
      });
      return;
    }
    setErrors({});
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
            error={errors.nameOfExam}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Group/Subject"
            name="group_subject"
            value={state.group_subject}
            onChange={changeHandler}
            error={errors.group_subject}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Institution"
            name="institution"
            value={state.institution}
            onChange={changeHandler}
            error={errors.institution}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Board"
            name="board"
            value={state.board}
            onChange={changeHandler}
            error={errors.board}
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
            error={errors.rollNo}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Registration No"
            name="regNo"
            value={state.regNo}
            onChange={changeHandler}
            error={errors.regNo}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="GPA/CGPA"
            name="gpa"
            value={state.gpa}
            onChange={changeHandler}
            error={errors.gpa}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Out Of"
            name="outOf"
            value={state.outOf}
            onChange={changeHandler}
            error={errors.outOf}
          />
        </Col>
        <Col>
          <FormField
            type="text"
            placeholder="Passing Year"
            name="passingYear"
            value={state.passingYear}
            onChange={changeHandler}
            error={errors.passingYear}
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
