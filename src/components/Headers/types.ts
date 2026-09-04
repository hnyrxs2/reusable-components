import type { TextSize } from '../Inputs/Text/types';

export interface ICustomHeaderProps {
  label: string;
  headerSize?: TextSize;
  descriptionSize?: TextSize;
  description?: string;
  icon?: React.ReactNode;
}
