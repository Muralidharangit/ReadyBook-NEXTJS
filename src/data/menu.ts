export interface MenuItem {
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Games", path: "/games" },
  { label: "Contact", path: "/contact" },
];
