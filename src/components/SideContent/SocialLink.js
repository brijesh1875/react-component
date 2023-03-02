import React from "react";
import "./SocialLink.css";

export default function SocialLink(props) {
  return (
    <div className="col-md-6">
      <div className="btn-group" role="group" aria-label="Social Link Button">
        <span type="button" className={`btn ${props.type} button-border-right`}>
          <i className={`fa-brands fa-${props.type}`}></i>
        </span>
        <span type="button" className={`btn ${props.type}`}>
          {props.title}
        </span>
      </div>
    </div>
  );
}
