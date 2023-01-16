import React from "react";
import "./index.css";

export const Sidebar = () => {
  return (
    <nav className="menu-vertical">
      <ul>
        <li className="botoes-menu-vertical">Início</li>
        <li className="botoes-menu-vertical">Em alta</li>
        <li className="botoes-menu-vertical">Inscrições</li>
        <hr></hr>
        <li className="botoes-menu-vertical">Originais</li>
        <li className="botoes-menu-vertical">Histórico</li>
      </ul>
    </nav>
  );
};
