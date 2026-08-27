import TextLabel from './TextLabel';
import type { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
  const textInputClass = `textinput-container ${props.orientation === 'horizontal' ? 'horizontal-disp' : 'vertical-disp'}`;
  return (
    <div className={textInputClass}>
      {props.label ? <TextLabel value={props.label} /> : null}
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        id={props.id}
      />
    </div>
  );
};

export default TextInput;
