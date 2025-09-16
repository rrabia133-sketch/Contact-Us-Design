import React from "react";
import img from "../images/contact.png";
import styles from "./Navigation/Navigation.module.css";
export default function ContactForm() {
  return (
    <div>
      <session className={styles.conatiner_Form}>
        <div className={styles.contatc_form}>form</div>
        <div className={styles.contact_image}>
          <img src={img} alt="img"></img>
        </div>
      </session>
    </div>
  );
}
