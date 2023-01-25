import { Outlet, Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
import './Layout.css';

const Layout = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">Reminders</Link>
          </li>
          <li>
            <Link to="/user" className="link-icon"><BiUserCircle /></Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;