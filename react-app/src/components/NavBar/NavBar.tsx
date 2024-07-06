import './NavBar.scss';

interface NavItem {
  name: string;
  path: string;
}

function NavBar() {
  const navItems: NavItem[] = [
    { name: 'About Me', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const renderNavItems = (): JSX.Element[] => {
    return navItems.map((item) => {
      return (
        <li className="nav-item__wrapper" key={item.name}>
          <a className="nav-item" href={item.path}>
            {item.name}
          </a>
        </li>
      );
    });
  };

  const onCollapseMenuClicked = () => {};
  return (
    <nav>
      <ul className="topnav" id="myTopnav">
        {renderNavItems()}
        <a className="nav-collapse-icon" onClick={onCollapseMenuClicked}>
          <i className="fa fa-bars"></i>
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;
