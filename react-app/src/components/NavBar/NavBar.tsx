import { NavItem } from './NavBar.interface';
import './NavBar.scss';

function NavBar() {
  const navItems: NavItem[] = [
    { name: 'About Me', path: 'aboutMe' },
    { name: 'Education', path: 'education' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: 'contact' },
  ];

  const scrollToSection = (event, sectionId: string) => {
    event.preventDefault();
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      console.log('scroll to', sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavItems = (): JSX.Element[] => {
    return navItems.map((item) => {
      return (
        <li className="nav-item__wrapper" key={item.name}>
          <a
            className="nav-item"
            href={item.path}
            onClick={(event) => scrollToSection(event, item.path)}
          >
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
