import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./button.module.css";
export default function Button(props) {
  return (
    <div>
      <button
        className={props.isOutline ? styles.outline_btn : styles.Primary_btn}
      >
        {props.icon}
        {props.text}
      </button>
    </div>
  );
}
