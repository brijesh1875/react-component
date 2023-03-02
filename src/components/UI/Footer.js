import React from "react";

export default function Footer(props) {
  return (
    <>
      <div
        className={`flex-col bg-${props.mode ? "dark" : "light"}`}
        style={{ height: "60px", lineHeight: "60px" }}
      >
        <div className="flex-center">
          <p className={`text-center text-${props.mode ? "light" : "dark"}`}>
            Designed by WEI
          </p>
        </div>
      </div>
    </>
  );
}
