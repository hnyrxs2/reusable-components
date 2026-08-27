export interface IToastProps {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
  duration?: number;
}
