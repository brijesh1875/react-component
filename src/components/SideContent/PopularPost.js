import React from "react";

export default function PopularPost(props) {
  return (
    <>
      <div className="col-md-4">
        <a href="/">
          <img className="popular-img" src={props.image} alt="Blog" />
        </a>
      </div>
      <div className="col-md-8 mb-2">
        <a href="/">
          <h6 className="card-title fw-semibold">{props.heading}</h6>
          <span className="blog-summary">{props.addedOn}</span>
        </a>
      </div>
    </>
  );
}
