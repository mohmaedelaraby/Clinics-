import React from "react";
import "./Introduce.scss";
import icon from "../../assets/images/heartbeat.svg";

function Introduce() {
  return (
    <>
      <div className="introduce">
        <div className="introduce__contianer introduce__contianerTwo ">
          <div className="introduce__contianer__textbox">
            <span className="introduce__contianer__textbox__header">
              INSPIRING BETTER HEALTH
              <hr
                size="10"
                className="introduce__contianer__textbox__header__bottomline"
              ></hr>
            </span>
            <span className="introduce__contianer__textbox__title">
              Healthy heart,
              <p className="introduce__contianer__textbox__subtitle">
                healthy family
              </p>
            </span>

            <span className="introduce__contianer__textbox__content">
              Globally harness multimedia based collaboration and idea-sharing
              with backend products. Continually whiteboard superior
              opportunities via covalent scenarios.
            </span>
            <div className="introduce__contianer__textbox__btns__contianer">
              <div className="introduce__contianer__textbox__btn">
                <div className="introduce__contianer__textbox__btn__icon">
                  <img src={icon} alt="icon" className="introduce__contianer__textbox__btn__icon__Img"/>
                </div>
                <div className="introduce__contianer__textbox__btn__textblog">
                  <p className="introduce__contianer__textbox__btn__textblog__header">
                    PROFESSIONAL TEAM
                  </p>
                  <p className="introduce__contianer__textbox__btn__textblog__content">
                    Globally harness multimedia based collaboration and
                    idea-sharing with backend products. Continually whiteboard
                    superior opportunities.
                  </p>
                </div>
              </div>

              <div className="introduce__contianer__textbox__btn">
                <div className="introduce__contianer__textbox__btn__icon">
                  <img src={icon} alt="icon" className="introduce__contianer__textbox__btn__icon__Img"/>
                </div>
                <div className="introduce__contianer__textbox__btn__textblog">
                  <p className="introduce__contianer__textbox__btn__textblog__header">
                    PROFESSIONAL TEAM
                  </p>
                  <p className="introduce__contianer__textbox__btn__textblog__content">
                    Globally harness multimedia based collaboration and
                    idea-sharing with backend products. Continually whiteboard
                    superior opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
