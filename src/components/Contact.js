import React from "react";
import Card from "./SideContent/Card";

export default function Contact(props) {
  return (
    <>
      <Card mode={props.mode}>
        <div className="col-md-12">
          <div className="text-center  mb-3">
            <h4>Fell free to connect...</h4>
            <span>We will revert you in next 48 hrs</span>
            <hr />
          </div>
          <div className="container">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Email
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputAddress"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </>
  );
}
