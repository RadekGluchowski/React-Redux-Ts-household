import { Link } from "react-router-dom";
import DisplayBalance from "../DisplayBalance/DisplayBalance";
import './TopNavBar.css'

export default function TopNavBar() {
  return (
    <header>
      <DisplayBalance />
      <nav>
        <ul className="nav__links">
          <li> <Link to="/">Dashboard </Link> </li>
          <li> <Link to="/Goals">Goals</Link></li>
          <li> <Link to="/Investment"> Investment</Link></li>
          <li> <Link to="/HistoryScreen"> History </Link></li>
        </ul>
      </nav>
    </header>
  );
}
