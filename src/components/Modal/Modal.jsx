import React from "react";
import { createPortal } from "react-dom";
import { ContactForm } from "components/ContactForm/ContactForm";
import css from "../../Style/style.module.css";

const ModalRoot = document.querySelector("#ModalRoot");

const Modal = ({ onClose }) => {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal_container}>
        <ContactForm onClose={onClose} />
      </div>
    </div>,
    ModalRoot
  );
};

export default Modal;
