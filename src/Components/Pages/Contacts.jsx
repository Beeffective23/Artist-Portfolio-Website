import React, { useRef } from "react";
import ButtonHome from "../ButtonHome";
import emailjs from "@emailjs/browser";
import { useState, useContext } from "react";
import { AuthContext } from "../../Shop-Context";

import Footer from "./Footer";
function Contacts() {
  const val = useContext(AuthContext);
  const form = useRef();
  const [showEmail, setShowEmail] = useState("none");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s44a4am",
        "template_kgktyh3",
        form.current,
        "XQ-7BCqe0r7telq2j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container-fluid">
      <div className="container-fluid contactContainer d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className="container">
              <h3 className="mb-5 d-flex justify-content-center">
                GET IN TOUCH
              </h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="form d-inline-grid w-100"
                  >
                    <input
                      className="formEL"
                      type="text"
                      placeholder="Name"
                      name="user_name"
                    />
                    <input
                      className="formEL"
                      type="text"
                      placeholder="Email"
                      name="user_email"
                    />
                    <textarea
                      className="formEL"
                      name="message"
                      cols="50"
                      rows="7"
                      placeholder="Your message"
                    ></textarea>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-0">
                  <div className="row ps-3 d-md-flex d-none">
                    <div className="col-2 facebook mx-2 p-0">
                      <a
                        href="https://www.facebook.com/profile.php?id=100077660954995"
                        target="_blank"
                      >
                        <div style={{ width: "30px", height: "30px" }}></div>
                      </a>
                    </div>

                    <div className="col-2 instagram mx-2 p-0">
                      <a
                        href="https://www.instagram.com/tzekovpeter/"
                        target="_blank"
                      >
                        <div style={{ width: "30px", height: "30px" }}></div>
                      </a>
                    </div>

                    <div
                      className="col-2 Mail mx-2 p-0"
                      onMouseEnter={() => {
                        setShowEmail("");
                      }}
                      onMouseLeave={() => {
                        setShowEmail("none");
                      }}
                    >
                      {
                        <div style={{ width: "30px", height: "30px" }}>
                          <p
                            style={{ display: showEmail }}
                            className="letterMail"
                          >
                            pittzek@abv.bg
                          </p>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-center">
                  <ButtonHome
                    type="submit"
                    name="Send me a message!"
                    divClsName="btnContact"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-sm-none d-block">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
