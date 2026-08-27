import { useEffect } from 'react';
import { InfoIcon } from '../Icons';
import type { IToastProps } from './types';

const Toast = ({ message, isVisible, onDismiss, duration = 2500 }: IToastProps) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onDismiss]);

  if (!isVisible) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <InfoIcon height={18} width={18} ariaLabel="Info" />
      <span>{message}</span>
    </div>
  );
};

export default Toast;
