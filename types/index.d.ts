export type NavItem = {
  title: string;
  href: string;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
