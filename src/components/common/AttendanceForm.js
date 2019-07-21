import React from "react";
import FormField from "./FormField";
import { Button, Card, CardHeader, CardBody, Row, Col, Table, Badge } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        Take Attendance
        <Button color="primary" outline onClick={props.onClick}>
          Go Back
        </Button>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Role</th>
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
                <Button color="success" size="sm" className="btn-pill">
                  Present
                </Button>{" "}
                &nbsp;
                <Button color="danger" size="sm" className="btn-pill">
                  Absent
                </Button>{" "}
                &nbsp;
                <Button color="warning" size="sm" className="btn-pill">
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
                  onChange={e => console.log(e.target.name, e.target.value)}
                  values={["Present", "Absent", "Late"]}
                />
              </td>
              <td className="removeMarginBottom">
                <FormField placeholder="Notes" type="text" />
              </td>
            </tr>

            <tr>
              <td>11152622</td>
              <td>saumik</td>
              <td>
                <FormField
                  type="radio"
                  onChange={e => console.log(e.target.name, e.target.value)}
                  values={["Present", "Absent", "Late"]}
                />
              </td>
              <td className="removeMarginBottom">
                <FormField placeholder="Notes" type="text" />
              </td>
            </tr>
            <tr>
              <td>11152622</td>
              <td>saumik</td>
              <td>
                <FormField
                  type="radio"
                  onChange={e => console.log(e.target.name, e.target.value)}
                  values={["Present", "Absent", "Late"]}
                />
              </td>
              <td className="removeMarginBottom">
                <FormField placeholder="Notes" type="text" />
              </td>
            </tr>
            <tr>
              <td>11152622</td>
              <td>saumik</td>
              <td>
                <FormField
                  type="radio"
                  onChange={e => console.log(e.target.name, e.target.value)}
                  values={["Present", "Absent", "Late"]}
                />
              </td>
              <td className="removeMarginBottom">
                <FormField placeholder="Notes" type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
