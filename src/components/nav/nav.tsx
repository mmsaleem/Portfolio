"use client";

import path from "path";
import bg from "/img/contact-bg.jpg";
import "./nav.scss";

const Navigation = (props) => {
  let contactModalBgStyles = {
    backgroundImage: `url('${path.resolve(__dirname, "/img/contact-bg.jpg")}')`,
  };

  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#myModal");
    myModal.show();
  };

  return (
    <header className="header" id="header">
      <nav className="nav">
        <div className="nav-left">
          <p className="full-name h1">
            <a href="#header">
              <span className="first-name">S</span>
              <span className="last-name">M</span>
            </a>
          </p>
        </div>
        <div className="nav-right">
          <ul>
            <li className="nav-item">
              {" "}
              <a href="#about">About </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a href="#projects">Projects </a>{" "}
            </li>
          </ul>
          <button
            className="contact-btn"
            data-toggle="modal"
            data-target="#myModal"
            onClick={showModal}
          >
            <span className="copy">Contact Me </span>
            <span className="icons">
              <span className="mail fas fa-envelope"> </span>
              <span className="phone fas fa-mobile-alt"></span>
            </span>
          </button>
        </div>
      </nav>

      <div className="modal fade contact-modal" id="myModal">
        <button
          type="button"
          className="close contact-modal-close"
          data-dismiss="modal"
        >
          &times;
        </button>
        <div className="modal-dialog contact-modal-container modal-md">
          <div className="modal-content contact-modal-wrapper">
            <div className="modal-body contact-modal-body">
              <div className="modal-body--wrapper">
                <div className="left">
                  <p className="h1" style={contactModalBgStyles}>
                    Saleem Mohamed
                  </p>
                </div>

                <div className="right">
                  <div>
                    <a href="mailto: saleemmohamed2@yahoo.com">
                      Email
                      <span className="mail fas fa-envelope"></span>
                    </a>
                  </div>
                  <div>
                    <a href="tel:3477259557">
                      347-725-9557
                      <span className="phone fas fa-mobile-alt"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
