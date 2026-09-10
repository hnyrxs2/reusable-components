export type TextSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type TextLabelInputOrientation = 'horizontal' | 'vertical';
export interface ITextLabelProps {
  value: string;
  size?: TextSize;
  tabIndex?: number;
  icon?: React.ReactNode;
}

export interface ITextInputProps {
  id: string;
  type: 'basic' | 'withError' | 'password';
  placeholder?: string;
  label?: string;
  orientation?: TextLabelInputOrientation;
  hasError?: boolean;
  errorMessage?: string;
  infoMessage?: string;
  regexValidation?: RegExp;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
