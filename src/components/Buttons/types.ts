export type ButtonTypes = 'primary' | 'secondary';

export interface IButtonProps {
  id: string;
  type: ButtonTypes;
  labelText: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;

  height?: string;
  width?: string;
  iconKey?: string;

  // Accessibility
  ariaLabel?: string;
  ariaDisabled?: boolean;
  disabled?: boolean;
}

export interface IRadioButtonProps<T> {
  id: string;
  value: T;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
