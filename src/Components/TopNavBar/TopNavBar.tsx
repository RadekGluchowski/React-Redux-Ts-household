import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import DisplayBalance from "../DisplayBalance/DisplayBalance";
import './TopNavBar.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useWindowSize } from "../Hooks/useWindowSize";
import { SidebarData, DASHBOARD, GOALS, INVESTMENT, HISTORY } from './Assets/constants';

export default function TopNavBar() {
  const windowSize = useWindowSize();
  const [sideMenu, setSideMenu] = useState(false)

  const showSideMenu = useCallback(() => {
    setSideMenu(!sideMenu)
  }, [sideMenu]);

  return (
    <header>
      <DisplayBalance />
      {windowSize.width < 800 ?
        <div>
          <div>
            <Link to="#">
              <FaBars onClick={showSideMenu} />
            </Link>
          </div>
          <nav className={sideMenu ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars" >
                  <AiOutlineClose onClick={showSideMenu} />
                </Link>
              </li>
              {SidebarData.map((navElement, index) => {
                return (
                  <li key={index} className={navElement.cName}>
                    <Link to={navElement.path}>
                      {navElement.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        :
        <div>
          <nav>
            <ul className="nav__links">
              <li> <Link to="/"> {DASHBOARD} </Link> </li>
              <li> <Link to="/Goals">{GOALS} </Link></li>
              <li> <Link to="/Investment"> {INVESTMENT} </Link></li>
              <li> <Link to="/HistoryScreen"> {HISTORY} </Link></li>
            </ul>
          </nav>
        </div>
      }
    </header>
  );
}
