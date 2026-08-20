export type TextSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type TextLabelInputOrientation = 'horizontal' | 'vertical';
export interface ITextLabelProps {
  value: string;
  size?: TextSize;
  tabIndex?: number
}

export interface ITextInputProps {
  id: string;
  placeholder?: string;
  label?: string;
  orientation?: TextLabelInputOrientation;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
