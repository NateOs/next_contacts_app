import React from "react";
import { Link, useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <h1 className="header__title">Contacts</h1>
      <span>
        <FaPlus />
        <button className="header__add" onClick={() => router.push("/contact")}>
          Add
        </button>
      </span>
    </header>
  );
}
