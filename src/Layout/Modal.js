import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.onClose} className={classes["backdrop"]}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={classes["modal"]}>
      <div>{props.children}</div>
    </div>
  )
}

const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </React.Fragment>
  )
}

export default Modal;
