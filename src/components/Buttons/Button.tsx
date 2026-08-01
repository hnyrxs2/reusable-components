import * as React from 'react';
import type { IButtonProps } from './types';
// import { useState } from 'react';

const ButtonColors = {
    blue: '#0072ed',
    disabledBlue: 'rgb(0 114 237 / 50%)',
    white: 'white'
}
const Button = (props: IButtonProps) => {
    const onclick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!props.disabled) {
            props.onClick(event)
        }
    };
    const onPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (!props.disabled && props.onKeyDown) {
            props.onKeyDown(event);
        }
    };

    const primaryBtnStyle: React.CSSProperties = {
        backgroundColor: ButtonColors.blue,
        color: ButtonColors.white
    }
    const secondaryBtnStyle: React.CSSProperties = {
        backgroundColor: ButtonColors.white,
        border: `1px solid ${ButtonColors.blue}`,
        color: ButtonColors.blue
    }

    const buttonStyle: React.CSSProperties = {
        ...(props.type === 'primary' ? primaryBtnStyle : secondaryBtnStyle),
        height: props.height ? `${props.height}px` : undefined,
        width: props.width ? `${props.width}px` : undefined,
        ...(props.disabled ? { cursor: 'not-allowed', opacity: 0.5 } : null)
    };
    return (
        <div id='button-wrapper'>
            <button
                className='btn-container'
                id={props.id}
                style={buttonStyle}
                onClick={(e) => onclick(e)}
                onKeyDown={onPress}
                disabled={props.disabled}
                aria-label={props.ariaLabel}
                aria-disabled={props.ariaDisabled ?? props.disabled}
            >
                <span>{props.labelText || 'Button'}</span>
            </button>
        </div>
    );
};

export default Button;