/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Cards.scss";
import imgage from "../../assets/images/img-team-member-02.jpg";

function CardOne() {
  return (
    <>
      <div class="card card--doctor">
        <img class="card-img-top" src={imgage} alt="Card image cap" />
        <div class="card-body">
          <div className="card-body__header">
            A BETTER LIFE <hr className="card-body__header__bottomline"></hr>
          </div>
          <div className="card-body__title">Heart surgery</div>
          <p class="card-text">
            Podcasting operational change management inside of workflows to
            establish a framework
          </p>
          <button className="card-btn">FIND OUT MORE</button>
        </div>
      </div>
    </>
  );
}

export default CardOne;
