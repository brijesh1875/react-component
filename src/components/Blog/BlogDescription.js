import React from "react";
import Person from "../../assets/img/profile.jpg";
import Card from "../SideContent/Card";
import blogImage from "../../assets/img/blog-1.jpg";

export default function BlogDescription(props) {
  return (
    <>
      <Card mode={props.mode}>
        <div className="col-md-12">
          <div className="post-head">
            <h2 className="">{props.heading}</h2>
            <div className="summary">
              <div class="d-flex flex-row" style={{ height: "40px" }}>
                <img className="person-img" src={Person} alt="author" />
                <p
                  className="blog-summary mx-2"
                  style={{ height: "40px", lineHeight: "40px" }}
                >
                  by <span>{props.author}</span> {" . "} {props.addedOn}
                </p>
              </div>
            </div>
            <div className="row my-3 text-center">
              <img src={blogImage} alt="blog-description" />
            </div>
            <div className="col-md-12">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
