import React, { type FC } from "react";
import ReactDOM from "react-dom";
type PotralProps = {
  children: React.ReactNode;
};
const Potral: React.FC<PotralProps> = ({ children }) => {
  const portralRoot = document.getElementById("portral-root");
  if (!portralRoot) return null;
  return ReactDOM.createPortal(children, portralRoot);
};

export default Potral;
