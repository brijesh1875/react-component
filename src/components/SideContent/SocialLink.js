import React from "react";
import "./SocialLink.css";
import SocialLinkButton from "./SocialLinkButton";

export default function SocialLink(props) {
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
                <h5 className="card-title fw-semibold">Follow Us</h5>
              </div>
            </div>
            <div className="row my-3">
              <ul className="social-icons">
                <SocialLinkButton
                  type="facebook"
                  title="Facebook"
                />
                <SocialLinkButton
                  type="twitter"
                  title="Twitter"
                />
                <SocialLinkButton
                  type="youtube"
                  title="Youtube"
                />
                <SocialLinkButton
                  type="instagram"
                  title="Instagram"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
