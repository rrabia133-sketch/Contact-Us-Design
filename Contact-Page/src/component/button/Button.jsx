import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./button.module.css";
export default function Button() {
  return (
    <div>
      <button className={styles.Primary_btn}>
        <MdMessage fontSize="24px" />
        VIA SUPPORT CHAT
      </button>
    </div>
  );
}
