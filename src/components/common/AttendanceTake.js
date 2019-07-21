import React,{Component} from "react";
import AttendanceTakeForm from "./AttendanceTakeForm"
import AttendanceForm from "./AttendanceForm"
import {Col,Row} from "reactstrap"


class AttendanceTake extends Component  {

  state={
    attendanceToggle:false
  }

  ToggleHandler=()=>{
    this.setState({attendanceToggle:!this.state.attendanceToggle})
  }
  render(){
  return(
    <Row>
      <Col>
          {
            this.state.attendanceToggle? <AttendanceForm onClick={this.ToggleHandler} />:<AttendanceTakeForm onClick={this.ToggleHandler} />
          }

      </Col>
    </Row>
  )
  }
};

export default AttendanceTake;
