import type { JSX } from 'react';

export const ClickableIcon = (props: {
  children: JSX.Element;
  onClick: () => void;
  ariaLabel?: string;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      props.onClick();
    }
  };
  return (
    <div
      role="button"
      id="clickable-icon-container"
      onClick={props.onClick}
      onKeyDown={handleKeyPress}
      aria-label={props.ariaLabel}
      tabIndex={0}
    >
      {props.children}
    </div>
  );
};
