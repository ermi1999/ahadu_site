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
      next?: string | null;
      prev?: string | null;
    }
  | {
      href?: string;
      items: NavLink[];
      next?: string | null;
      prev?: string | null;
    }
);

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
