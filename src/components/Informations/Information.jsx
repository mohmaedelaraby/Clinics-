import React from "react";
import CardOne from "../Cards/CardOne";
import "./Information.scss";

function Information() {
  return (
    <>
      <div className="inforamtion">
        <div className="information__container">
          <CardOne />
          <CardOne />
          <CardOne />
          <CardOne />
        </div>
      </div>
    </>
  );
}

export default Information;
