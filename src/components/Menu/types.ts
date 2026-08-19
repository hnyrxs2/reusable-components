export interface IMenuItem {
  value: string;
  disabled: boolean;
}

export interface IContextMenuProps {
  menuItems: IMenuItem[];
  onItemClick: (item: string) => void;
  ariaLabel?: string;
}
