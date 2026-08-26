import TextLabel from './Text/TextLabel';
import type { ICheckboxProps } from './types';

const ToggleSwitch = (props: ICheckboxProps) => {
  return (
    <div className="toggle-switch-wrapper">
      <label className="toggle-switch-label">
        <input
          type="checkbox"
          className="toggle-switch-input"
          checked={props.checked}
          onChange={props.onChange}
          aria-label={props.label}
        />
        <span className="toggle-switch-slider" />
        <TextLabel value={props.label} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
