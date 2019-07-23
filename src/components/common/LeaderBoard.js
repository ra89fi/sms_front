import React from "react";
import { Badge, Card, CardHeader, CardBody, Table } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardHeader style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{props.name}</strong> <i className="icon-chart icons" />
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Student</th>
              <th>Session</th>
              <th>Roll No</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samppa Nori</td>
              <td>2012/01/01</td>
              <td>123456</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>Estavan Lykos</td>
              <td>2012/02/01</td>
              <td>341256</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>Chetan Mohamed</td>
              <td>2012/02/01</td>
              <td>562314</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>Derick Maximinus</td>
              <td>2012/03/01</td>
              <td>132456</td>
              <td>56%</td>
            </tr>
            <tr>
              <td>Friderik Dávid</td>
              <td>2012/01/21</td>
              <td>342313</td>
              <td>67%</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
