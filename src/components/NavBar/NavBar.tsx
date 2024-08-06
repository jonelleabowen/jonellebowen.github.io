import { NavItem } from './NavBar.interface';
import './NavBar.scss';

function NavBar({ navItems, onNavItemClicked }) {
  function handleNavItemClicked(event) {
    const href = event.target.href;
    const url = new URL(event.target.href);
    const sectionId = url.pathname.split('/')[1];
    onNavItemClicked(event, sectionId);
  }
  const renderNavItems = (): JSX.Element[] => {
    return navItems.map((item: NavItem) => {
      return (
        <li className="nav-item__wrapper" key={item.name}>
          {!(item.name === 'resume') && (
            <a
              className="nav-item"
              href={item.path}
              onClick={handleNavItemClicked}
            >
              {item.name}
            </a>
          )}
          {item.name === 'resume' && (
            <a className="nav-item" href={item.path} target="_blank">
              {item.name}
            </a>
          )}
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
