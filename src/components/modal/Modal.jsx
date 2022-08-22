import React from "react";
import { FaWindowClose } from "react-icons/fa";

import "./Modal.scss";

export default function Modal({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal-card">
        <FaWindowClose
          className="close-button"
          size={22}
          onClick={closeModal}
        />
        <input className="order-input" placeholder="Seu pedido aqui" />
        <div className="button submit">enviar</div>
      </div>
    </div>
  );
}
