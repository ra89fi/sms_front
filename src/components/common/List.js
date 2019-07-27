import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default props => {
  return (
    <Table responsive>
      <thead>
        <tr>
          {Object.keys(props.data[0]).map((header, i) => {
            return <th key={i}>{header}</th>;
          })}
          {props.buttons ? <th>Actions</th> : ""}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => {
          return (
            <tr key={i}>
              {Object.keys(row).map((header, i) => {
                return <td key={i}>{row[header]}</td>;
              })}
              <td>
                {props.buttons.map((btn, i) => {
                  return btn.link ? (
                    <Link to={`${btn.link}/${row.id}`} key={i}>
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
