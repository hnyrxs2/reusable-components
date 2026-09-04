import type { JSX } from 'react';

export const ClickableIcon = (props: {
  children: JSX.Element;
  onClick: () => void;
  ariaLabel?: string;
}) => {
  return (
    <button
      type="button"
      id="clickable-icon-container"
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};
