import React from "react";
import styles from "./Navigation/Navigation.module.css";
export default function ContactPage() {
  return (
    <div className="container">
      <div className={styles.contactSection}>
        <h1 className={styles.h1}>CONTACT US</h1>
        <p className={styles.P}>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
    </div>
  );
}
