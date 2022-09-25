import React from "react";
import "./Help.scss";

function Help() {
  return (
    <div className="help">
      <div className="help__container">
        <div className="help__conatiner__upper">
          <div className="help__conatiner__upper__left">
            <div className="help__conatiner__upper__left_item__contianer__textbox">
              <span className="help__conatiner__upper__left_item__contianer__textbox__header">
                INSPIRING BETTER HEALTH
                <hr
                  size="10"
                  className="help__conatiner__upper__left_item__contianer__textbox__header__bottomline"
                ></hr>
              </span>
              <span className="help__conatiner__upper__left_item__contianer__textbox__title">
                Healthy heart,
                <p className="help__conatiner__upper__left_item__contianer__textbox__subtitle">
                  healthy family
                </p>
              </span>

              <span className="help__conatiner__upper__left_item__contianer__textbox__content">
                Globally harness multimedia based collaboration and idea-sharing
                with backend products. Continually whiteboard superior
                opportunities via covalent scenarios.
              </span>
            </div>
          </div>
          <div className="help__conatiner__upper__right">
            <div className="help__conatiner__upper__rights">
            <div className="help__conatiner__upper__right__conatiner">
              <div className="help__conatiner__upper__right__contianer__textbox__header">
                INSPIRING BETTER HEALTH
                <hr
                  size="10"
                  className="help__conatiner__upper__right__contianer__textbox__header__bottomline"
                ></hr>
              </div>

              <span className="help__conatiner__upper__right__conatiner__title">
                Healthy heart
              </span>
              <div className="help__conatiner__upper__right__contianer__textbox__content">
                Globally harness multimedia based collaboration and idea-sharing
                with backend products. Continually whiteboard superior
                opportunities via covalent scenarios.
              </div>

              <div className="help__conatiner__upper__right__contianer__dropdown__container">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          
          </div>
        </div>
        <div className="help__conatiner__lower"></div>
      </div>
    </div>
  );
}

export default Help;
