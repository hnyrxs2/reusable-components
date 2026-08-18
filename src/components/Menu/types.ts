export interface IContextMenuProps {
  menuItems: string[];
  onItemClick: (item: string) => void;
  ariaLabel?: string;
}
