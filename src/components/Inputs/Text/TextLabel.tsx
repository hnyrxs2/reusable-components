import type { ITextLabelProps } from './types';

const TextLabel = (props: ITextLabelProps) => {
  const labelClass = {
    xlarge: 'textlabel-xlarge',
    large: 'textlabel-large',
    medium: 'textlabel-medium',
    small: 'textlabel-small',
  };
  return (
    <div id="textlabel-container">
      <span id={props.size ? labelClass[props.size] : labelClass['small']}>{props.value}</span>
    </div>
  );
};

export default TextLabel;
