import TextLabel from '../Inputs/Text/TextLabel';
import type { IRadioButtonProps } from './types';

const RadioButton = <T extends string>(props: IRadioButtonProps<T>) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      props.onSelect(props.value);
    }
  };

  return (
    <label id="btn-radio-container" tabIndex={0} onKeyDown={handleKeyPress}>
      <input
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={() => props.onSelect(props.value)}
        tabIndex={-1}
      />
      <TextLabel value={props.label} tabIndex={-1} />
    </label>
  );
};

export default RadioButton;
