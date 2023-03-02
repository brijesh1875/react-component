import React from "react";
import "./SocialLink.css";

export default function Card(props) {
  return (
    <>
      <div
        className={`card text-bg-${
          props.mode ? "dark" : "light"
        } w-100 mb-3 custom-card my-1`}
      >
        <div className="card-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h5 className="card-title fw-semibold">{props.heading}</h5>
              </div>
            </div>
            <div className="row my-3">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
