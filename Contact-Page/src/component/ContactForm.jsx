import React from "react";
import img from "../images/contact.png";
export default function ContactForm() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-6">
            .col-sm-6 .col-md-5 .col-lg-6
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <img src={img} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
