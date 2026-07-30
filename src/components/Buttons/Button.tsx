import type React from 'react';
import type { IButtonProps } from './types';

const ButtonColors = {
    blue: '#0072ed',
    white: 'white'
}
const Button = (props: IButtonProps) => {
    const primaryBtnStyle: React.CSSProperties = {
        backgroundColor: ButtonColors.blue,
        color: ButtonColors.white
    }
    const secondaryBtnStyle: React.CSSProperties = {
        backgroundColor: ButtonColors.white,
        border: `1px solid ${ButtonColors.blue}`
    }

    const getButtonStyle = () => props.type === 'primary' ? primaryBtnStyle : secondaryBtnStyle;
    return (
        <div>
            <div id='btn-container' style={getButtonStyle()}>
                <span>{props.labelText}</span>
            </div>
        </div>
    );
};

export default Button;