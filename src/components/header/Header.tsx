import React from 'react';
import { Link } from 'react-router-dom';

export interface MenuItem {
  action: string,
  name: string
}
export interface HeaderProps {
  menus: Array<MenuItem>
}

const Header = (props:HeaderProps) => {
  const { menus } = props;
  const menuItems = menus.map((menu: MenuItem) => <li className="nav-item"><Link className="nav-link" to={menu.action}>{menu.name}</Link></li>);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          { menuItems }
        </ul>
      </div>
    </nav>
  );
};

export default Header;