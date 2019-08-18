import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default props => {
  if (props.data.length === 0) return <p>No data.</p>;
  return (
    <Table responsive>
      <thead>
        <tr>
          {props.headersAllow.map((header, i) => {
            return <th key={i}>{props.headerNames[header]}</th>;
          })}
          {props.buttons ? <th>Actions</th> : ""}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => {
          return (
            <tr key={i}>
              {props.headersAllow.map((header, i) => {
                return <td key={i}>{row[header]}</td>;
              })}
              <td>
                {props.buttons.map((btn, i) => {
                  return btn.link ? (
                    <Link
                      to={{
                        pathname: `${btn.link}/${row.id}`,
                        data: {
                          reducerName: props.reducerName,
                          values: row
                        }
                      }}
                      key={i}
                    >
                      <Button color={btn.color} size="sm" className="btn-pill">
                        {btn.name}
                      </Button>
                    </Link>
                  ) : (
                    <Button color={btn.color} size="sm" className="btn-pill" key={i}>
                      {btn.name}
                    </Button>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
