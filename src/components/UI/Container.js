import React from "react";
export default function Container(props) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-8">{props.left}</div>
        <div className="col-md-4">{props.right}</div>
      </div>
    </div>
  );
}
