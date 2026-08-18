import type { IButtonProps } from './types';
import { CancelIcon, SaveIcon } from '../Icons';
import type { IconProps } from '../Icons/types';
import BaseButton from './BaseButton';

const iconProps: IconProps = { height: 15, width: 15 };

const Button = (props: IButtonProps) => {
  const getIcon = () => {
    switch (props.iconKey) {
      case 'save':
        return <SaveIcon {...iconProps} />;
      case 'cancel':
        return <CancelIcon {...iconProps} />;
      default:
        return null;
    }
  };

  const buttonClassMap = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    tertiary: 'tertiary-btn',
  };

  const buttonClass = buttonClassMap[props.type];
  const disabledClass = props.disabled ? 'btn-disable' : '';

  return (
    <div id="button-wrapper">
      <BaseButton
        id={props.id}
        className={`btn-container ${buttonClass} ${disabledClass}`}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        disabled={props.disabled}
        ariaLabel={props.ariaLabel}
        ariaDisabled={props.ariaDisabled}
        style={{
          height: props.height ? `${props.height}px` : undefined,
          width: props.width ? `${props.width}px` : undefined,
        }}
      >
        {getIcon()}
        <span>{props.labelText || 'Button'}</span>
      </BaseButton>
    </div>
  );
};

export default Button;
