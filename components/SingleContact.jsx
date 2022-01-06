import React from "react";
import Link from "next/Link";

export default function SingleContact() {
  return (
    <div className="single-contact">
      <Link href="/contact/[id]">
        <div>
          <p className="contact__name">Nathan Sodja</p>
          <p className="contact__number">0209103354</p>
        </div>
      </Link>
      <button className="single-contact__delete">Delete</button>
    </div>
  );
}
