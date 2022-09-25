import React from "react";
import TestmonCard from "../Cards/TestmonCard";
import "./Testmonlies.scss";

function Testmonieles() {
  return (
    <>
      <div className="testmon">
        <div className="testmon__container">
          <div className="testmon__contanier__head">
            <div className="testmon__contanier__head__header">
              A GOOD WORD MEANS A LOT
              <hr className="testmon__contanier__head__header__bottomline" />
            </div>
            <div className="testmon__contanier__head__title">
              Patient <strong>testimonials</strong>
            </div>
            <div className="testmon__contanier__head__subtitle">
              It’s always the word of mouth that’s the best advice. Here are
              some of our…
            </div>
          </div>

          <div className="testmon__container__people">
            <TestmonCard/>
            <TestmonCard/>
            <TestmonCard/>
            <TestmonCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonieles;
