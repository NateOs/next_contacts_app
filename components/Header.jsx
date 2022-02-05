import React, { useEffect } from "react";
import { Link, useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  const addHandler = () => {
    const uid = () => Date.now();

    router.push(`/contact?id=${uid()}`);
  };

 
  return (
    <header className="header">
      <h1 className="header__title">Contacts</h1>
      <span>
        <FaPlus />
        <button className="header__add" onClick={() => addHandler()}>
          Add
        </button>
      </span>
    </header>
  );
}
