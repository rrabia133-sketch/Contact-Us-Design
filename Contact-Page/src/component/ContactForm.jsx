import React from "react";
import img from "../images/contact.png";
import styles from "./Navigation/Navigation.module.css";
import Button from "./button/Button";
import { MdMessage } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
export default function ContactForm() {
  return (
    <div>
      <session className={styles.conatiner_Form}>
        <div className={styles.contatc_form}>
          <div className={styles.top_button}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="VIA Call" icon={<BsTelephone fontSize="24px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMIAL FORM"
            icon={<IoMailOutline fontSize="24px" />}
          />
          <form>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="name"></input>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email"></input>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>

              <textarea type="text" rows="5"></textarea>
            </div>
          </form>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </div>

        <div className={styles.contact_image}>
          <img src={img} alt="img"></img>
        </div>
      </session>
    </div>
  );
}
