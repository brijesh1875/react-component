import React from "react";
import "./BlogCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <>
      <div
        className={`card-container
        card text-bg-${
          props.mode ? "dark" : "light"
        } w-100 mb-3 custom-card my-1`}
      >
        <div className="card-body">
          <Link to="/post">
            <div className="container-fluid p-3">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="card-title fw-semibold">{props.heading}</h4>
                  <span className="blog-summary">
                    by <span className="author-name">{props.author}</span>{" "}
                    {props.addedOn}
                  </span>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-4">
                  <div className="blog-img">
                    <img src={props.image} alt="Blog" />
                  </div>
                </div>
                <div className="col-md-8">{props.description}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

BlogCard.propTypes = {
  mode: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  addedOn: PropTypes.string.isRequired,
};
