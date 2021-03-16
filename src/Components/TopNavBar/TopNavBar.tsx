import { Link } from "react-router-dom";
import DisplayBalance from "../DisplayBalance/DisplayBalance";

export default function TopNavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard </Link>
        <Link to="/Goals">Goals</Link>
        <Link to="/Investment"> Investment</Link>
      </nav>
      <DisplayBalance />
    </div>
  );
}
