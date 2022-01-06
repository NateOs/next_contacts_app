import React from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function contact() {
  return (
    <div className="container">
      <div className="back-btn">
        <FaChevronLeft />
        <Link href="/">Back</Link>
      </div>
      <div className="contact-page">
        <div className="profile-icon">
          <h1>NS</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter contact name"
            className="form-control"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter number"
            className="form-control"
          />
        </div>
        <button className="save">Save</button>
      </div>
    </div>
  );
}
