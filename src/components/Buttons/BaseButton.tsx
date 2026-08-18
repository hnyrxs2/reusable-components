import * as React from 'react';
import type { IBaseButtonProps } from './types';

const BaseButton = (props: IBaseButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.disabled) {
      props.onClick(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!props.disabled && props.onKeyDown) {
      props.onKeyDown(event);
    }
  };

  return (
    <button
      className={props.className}
      id={props.id}
      style={props.style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      aria-disabled={props.ariaDisabled ?? props.disabled}
      aria-haspopup={props.ariaHasPopup}
      aria-expanded={props.ariaExpanded}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
