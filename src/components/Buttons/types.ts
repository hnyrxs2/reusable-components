import type { IMenuItem } from '../Menu/types';

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary';

export interface IBaseButtonProps {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;

  // Accessibility
  ariaLabel?: string;
  ariaDisabled?: boolean;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  disabled?: boolean;
}

export interface IButtonProps extends IBaseButtonProps {
  type: ButtonTypes;
  labelText: string;
  height?: string;
  width?: string;
  iconKey?: string;
}

export interface IDropdownButtonProps extends IButtonProps {
  menuItems: IMenuItem[];
  onMenuItemClick?: (item: string) => void;
}

export interface IRadioButtonProps<T> {
  id: string;
  value: T;
  label: string;
  checked?: boolean;
  onSelect: (value: string) => void;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
