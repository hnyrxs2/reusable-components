import { useRef } from 'react';
import TextLabel from './Text/TextLabel';
import type { ICheckboxProps } from './types';

const ToggleSwitch = (props: ICheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        inputRef.current?.click();
        break;
    }
  };

  return (
    <div className="toggle-switch-wrapper">
      <label className="toggle-switch-label">
        <input
          ref={inputRef}
          type="checkbox"
          className="toggle-switch-input"
          checked={props.checked}
          onChange={props.onChange}
          aria-label={props.label}
          onKeyDown={handleKeyDown}
        />
        <span className="toggle-switch-slider" />
        <TextLabel value={props.label} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
