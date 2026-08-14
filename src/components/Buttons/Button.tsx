import * as React from 'react';
import type { IButtonProps } from './types';
import { CancelIcon, SaveIcon } from '../Icons';
import type { IconProps } from '../Icons/types';

const Button = (props: IButtonProps) => {
  const onclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.disabled) {
      props.onClick(event);
    }
  };
  const onPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!props.disabled && props.onKeyDown) {
      props.onKeyDown(event);
    }
  };

  const getIcons = () => {
    const iconProps: IconProps = { height: 15, width: 15 };
    switch (props.iconKey) {
      case 'save':
        return <SaveIcon {...iconProps} />;
      case 'cancel':
        return <CancelIcon {...iconProps} />;
      default:
        break;
    }
  };

  const buttonClass = props.type === 'primary' ? 'primary-btn' : 'secondary-btn';
  const disabledClass = props.disabled ? 'btn-disable' : '';

  return (
    <div id="button-wrapper">
      <button
        className={`btn-container ${buttonClass} ${disabledClass}`}
        id={props.id}
        onClick={(e) => onclick(e)}
        onKeyDown={onPress}
        disabled={props.disabled}
        aria-label={props.ariaLabel}
        aria-disabled={props.ariaDisabled ?? props.disabled}
      >
        {getIcons()}
        <span>{props.labelText || 'Button'}</span>
      </button>
    </div>
  );
};

export default Button;
