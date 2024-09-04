export interface NavItem {
    name: string;
    path: string;
}

export interface NavItemMap {
    [key: string]: React.RefObject<Element>;
}

export interface NavBarInterface {
    handleNavItemClick: () => {}
}