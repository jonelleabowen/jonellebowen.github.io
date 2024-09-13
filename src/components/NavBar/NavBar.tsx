import { NavItem } from './NavBar.interface';
import { useRef } from 'react';
import { jaFlagColors } from '../../constants';
import './NavBar.scss';

interface NavBarProps {
  navItems: NavItem[];
  onNavItemClicked: (event: MouseEvent, sectionId: string) => void;
}

const RESPONSIVE_CLASS = 'responsive';

function NavBar(props: NavBarProps) {
  const { navItems, onNavItemClicked } = props;
  const navRef = useRef<HTMLUListElement | null>(null);

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
          {!(item.name === 'Resume') && (
            <a
              className="nav-item"
              href={item.path}
              onClick={handleNavItemClicked}
            >
              {item.name}
            </a>
          )}
          {item.name === 'Resume' && (
            <a className="nav-item" href={item.path} target="_blank">
              {item.name}
            </a>
          )}
        </li>
      );
    });
  };

  const onCollapseMenuClicked = () => {
    if (navRef && navRef.current?.classList.contains(RESPONSIVE_CLASS)) {
      navRef.current.classList.remove(RESPONSIVE_CLASS);
    } else {
      navRef?.current?.classList.add(RESPONSIVE_CLASS);
    }
  };

  return (
    <nav style={{ display: 'flex' }}>
      <div className="ja-flag-container">
        {jaFlagColors.map((color) => {
          return (
            <div
              style={{ backgroundColor: color, height: '100%', width: '10px' }}
            ></div>
          );
        })}
      </div>
      <ul className="topnav" id="myTopnav" ref={navRef}>
        {renderNavItems()}
        <button className="nav-collapse-button" onClick={onCollapseMenuClicked}>
          <i className="fa fa-bars"></i>
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
