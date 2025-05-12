import React, { type FC } from "react";
import Potral from "./Potral";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
};
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <Potral>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </Potral>
  );
};

export default Modal;
