import React from "react";
import { Link } from "react-router-dom";

export default function TopNavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard </Link>
        <Link to="/Goals">Goals</Link>
      </nav>
    </div>
  );
}
