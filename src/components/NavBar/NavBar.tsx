import { NavItem } from './NavBar.interface';
import './NavBar.scss';

function NavBar() {
  const navItems: NavItem[] = [
    { name: 'About Me', path: 'aboutMe' },
    { name: 'Education', path: 'education' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Resume', path: 'Resume 2024.pdf' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (event, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavItems = (): JSX.Element[] => {
    return navItems.map((item) => {
      return (
        <li className="nav-item__wrapper" key={item.name}>
          {!(item.name === 'resume') && (
            <a
              className="nav-item"
              href={item.path}
              onClick={(event) => scrollToSection(event, item.path)}
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
