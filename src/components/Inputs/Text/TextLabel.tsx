import type { ITextLabelProps } from './types';

const TextLabel = (props: ITextLabelProps) => {
  const labelClass = {
    xlarge: 'textlabel-xlarge',
    large: 'textlabel-large',
    medium: 'textlabel-medium',
    small: 'textlabel-small',
    xsmall: 'textlabel-xsmall',
  };
  return (
    <div className="textlabel-container" aria-label={props.value}>
      {props.icon ? props.icon : null}
      <span
        className={props.size ? labelClass[props.size] : labelClass['small']}
        tabIndex={props.tabIndex || 0}
      >
        {props.value}
      </span>
    </div>
  );
};

export default TextLabel;
