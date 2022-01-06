import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Contacts</h1>
      <span>
        <FaPlus />
        <button className="header__add">Add</button>
      </span>
    </header>
  );
}
