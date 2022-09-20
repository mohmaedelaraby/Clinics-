/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Cards.scss";
import imgage from "../../assets/images/img-box-01.jpg";

function CardOne() {
  return (
    <>
      <div class="card">
        <img class="card-img-top" src={imgage} alt="Card image cap" />
        <div class="card-body">
          <div className="card-body__header">A BETTER LIFE <hr className="card-body__header__bottomline"></hr></div>
          <div className="card-body__title">Heart surgery</div>
          <p class="card-text">
          Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.
          </p>
          <button className="card-btn">FIND OUT MORE</button>
        </div>
      </div>
    </>
  );
}

export default CardOne;
