import TextLabel from './Text/TextLabel';
import type { ICheckboxProps } from './types';

const CheckBox = (props: ICheckboxProps) => {
  return (
    <div>
      <label id="checkbox-label-container">
        <input type="checkbox" checked={props.checked} onChange={props.onChange} />
        <TextLabel value={props.label} />
      </label>
    </div>
  );
};

export default CheckBox;
