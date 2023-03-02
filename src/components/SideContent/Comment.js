import React from "react";

export default function Comment(props) {
  return (
    <>
      <div className="col-md-2">
        <a href="/">
          <img className="person-img" src={props.image} alt="person" />
        </a>
      </div>
      <div className="col-md-10 mb-2">
        <a href="/">
          <h6 className="card-title fw-semibold">{props.author}</h6>
          <span className="blog-summary fw-normal lh-sm text-secondary">
            {props.comment}
          </span>
        </a>
      </div>
    </>
  );
}
