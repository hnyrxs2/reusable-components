import type { TextSize } from '../../Inputs/Text/types';

export interface ICustomHeaderProps {
  label: string;
  size?: TextSize;

  description?: string;
  icon?: React.ReactNode;
}
