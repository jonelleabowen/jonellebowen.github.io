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
        <li key={item.name}>
          <a href={item.path}>{item.name}</a>
        </li>
      );
    });
  };
  return (
    <nav>
      <ul>{renderNavItems()}</ul>
    </nav>
  );
}

export default NavBar;
