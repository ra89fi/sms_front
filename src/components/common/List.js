import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default props => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Degree</th>
          <th>Subject</th>
          <th>Session</th>
          <th>Roll No</th>
          <th>Reg No</th>
          <th>Name</th>
          <th>Mobile No</th>
          <th>Email</th>
          <th>Attendance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Honors</td>
          <td>Geography</td>
          <td>2013-14</td>
          <td>11152622</td>
          <td>62389</td>
          <td>saumik</td>
          <td>9034704096</td>
          <td>n.saumik333@gmail.com</td>
          <td>
            <strong>100%</strong>
          </td>
          <td>
            <Link to="/student/profile/123">
              <Button color="success" size="sm" className="btn-pill">
                View
              </Button>
            </Link>{" "}
            &nbsp;
            <Button color="warning" size="sm" className="btn-pill">
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="danger" size="sm" className="btn-pill">
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Honors</td>
          <td>Geography</td>
          <td>2013-14</td>
          <td>11152622</td>
          <td>62389</td>
          <td>saumik</td>
          <td>9034704096</td>
          <td>n.saumik333@gmail.com</td>
          <td>
            <strong>100%</strong>
          </td>
          <td>
            <Link to="/student/profile/123">
              <Button color="success" size="sm" className="btn-pill">
                View
              </Button>
            </Link>{" "}
            &nbsp;
            <Button color="warning" size="sm" className="btn-pill">
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="danger" size="sm" className="btn-pill">
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Honors</td>
          <td>Geography</td>
          <td>2013-14</td>
          <td>11152622</td>
          <td>62389</td>
          <td>saumik</td>
          <td>9034704096</td>
          <td>n.saumik333@gmail.com</td>
          <td>
            <strong>100%</strong>
          </td>
          <td>
            <Link to="/student/profile/123">
              <Button color="success" size="sm" className="btn-pill">
                View
              </Button>
            </Link>{" "}
            &nbsp;
            <Button color="warning" size="sm" className="btn-pill">
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="danger" size="sm" className="btn-pill">
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Honors</td>
          <td>Geography</td>
          <td>2013-14</td>
          <td>11152622</td>
          <td>62389</td>
          <td>saumik</td>
          <td>9034704096</td>
          <td>n.saumik333@gmail.com</td>
          <td>
            <strong>100%</strong>
          </td>
          <td>
            <Link to="/student/profile/123">
              <Button color="success" size="sm" className="btn-pill">
                View
              </Button>
            </Link>{" "}
            &nbsp;
            <Button color="warning" size="sm" className="btn-pill">
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="danger" size="sm" className="btn-pill">
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Honors</td>
          <td>Geography</td>
          <td>2013-14</td>
          <td>11152622</td>
          <td>62389</td>
          <td>saumik</td>
          <td>9034704096</td>
          <td>n.saumik333@gmail.com</td>
          <td>
            <strong>100%</strong>
          </td>
          <td>
            <Link to="/student/profile/123">
              <Button color="success" size="sm" className="btn-pill">
                View
              </Button>
            </Link>{" "}
            &nbsp;
            <Button color="warning" size="sm" className="btn-pill">
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="danger" size="sm" className="btn-pill">
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Honors</td>
          <td>Geography</td>
          <td>2013-14</td>
          <td>11152622</td>
          <td>62389</td>
          <td>saumik</td>
          <td>9034704096</td>
          <td>n.saumik333@gmail.com</td>
          <td>
            <strong>100%</strong>
          </td>
          <td>
            <Link to="/student/profile/123">
              <Button color="success" size="sm" className="btn-pill">
                View
              </Button>
            </Link>{" "}
            &nbsp;
            <Button color="warning" size="sm" className="btn-pill">
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="danger" size="sm" className="btn-pill">
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
