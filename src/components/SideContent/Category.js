import React from "react";

export default function Category(props) {
  return (
    <>
      <a className="category" href="/">
        <li
          style={{ border: "none" }}
          className={`list-group-item d-flex justify-content-between align-items-center bg-${
            props.mode ? "dark" : "light"
          } text-${props.mode ? "light" : "dark"}`}
        >
          {props.name}
          <span className="badge bg-primary rounded-pill">{props.count}</span>
        </li>
      </a>
    </>
  );
}
