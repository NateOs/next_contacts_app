import React from "react";
import { Link } from "next/Link";

export default function SingleContact() {
  return (
    <div className="single-contact">
      <div>
        <p className="contact__name">Nathan Sodja</p>
        <p className="contact__number">0209103354</p>
      </div>
      <button className="single-contact__delete">Delete</button>
    </div>
  );
}
