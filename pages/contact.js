import React from "react";
import Link from "next/link";

export default function contact() {
  return (
    <div className="container">
      {/* TODO insert back icon  */}
      <Link href="/">Back</Link>
      <div className="contact-page">
        <div>
          <h1>NS</h1>
        </div>
        <div>
          <input type="text" placeholder="Enter contact name" />
        </div>
        <div>
          <input type="text" placeholder="Enter number" />
        </div>
        <button>Save</button>
      </div>
    </div>
  );
}
