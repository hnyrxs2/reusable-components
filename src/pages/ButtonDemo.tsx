import { useState } from 'react';
import Button from '../components/Buttons/Button';
import TextInput from '../components/Inputs/Text/TextInput';
import type { ButtonTypes } from '../components/Buttons/types';
import RadioButton from '../components/Buttons/RadioButton';
import CheckBox from '../components/Inputs/CheckBox';
import TextLabel from '../components/Inputs/Text/TextLabel';
import { CancelIcon, SaveIcon } from '../components/Icons';

const noIcon = { icon: undefined, key: '' };
const ICON_OPTIONS = [
  { component: <SaveIcon />, key: 'save' },
  { component: <CancelIcon />, key: 'cancel' },
];

const ButtonDemo = () => {
  const [buttonType, setButtonType] = useState<ButtonTypes>('primary');
  const [buttonHeight, setButtonHeight] = useState<string | undefined>();
  const [buttonWidth, setButtonWidth] = useState<string | undefined>();
  const [buttonLabel, setButtonLabel] = useState<string>('Demo Button');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [buttonIcon, setButtonIcon] = useState<{ icon?: React.JSX.Element; key: string }>(noIcon);

  const updateButtonType = (e: React.ChangeEvent<HTMLInputElement>) =>
    setButtonType(e.target.value as ButtonTypes);
  const updateButtonSize = (value: string, dimension: 'height' | 'width') => {
    switch (dimension) {
      case 'height':
        setButtonHeight(value);
        break;
      case 'width':
        setButtonWidth(value);
        break;
      default:
        break;
    }
  };

  const tickButtonAvailability = () => {
    console.log(!isDisabled);
    setIsDisabled(!isDisabled);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'save':
        return <SaveIcon />;
      case 'cancel':
        return <CancelIcon />;
      default:
        break;
    }
  };

  const selectIcon = (id: string) => {
    if (id === buttonIcon.key) {
      setButtonIcon(noIcon);
      return;
    }
    const icon = getIcon(id);
    if (icon) {
      setButtonIcon({ icon, key: id });
    }
  };

  const iconArray = () => {
    const mappedIcons = ICON_OPTIONS.map((item) => {
      return (
        <div
          key={item.key}
          className={buttonIcon.key === item.key ? 'icon-selected' : 'icon-inactive'}
          onClick={() => selectIcon(item.key)}
        >
          {item.component}
        </div>
      );
    });
    return mappedIcons;
  };

  return (
    <div id="button-demo-page">
      <div id="custom-header">
        <h3>Button Component</h3>
      </div>
      <div id="button-demo">
        <div id="config-container">
          <div id="type-container">
            <RadioButton
              id="button-demo-1"
              value="primary"
              checked={buttonType === 'primary'}
              onChange={updateButtonType}
              label="Primary"
            />
            <RadioButton
              id="button-demo-2"
              value="secondary"
              checked={buttonType === 'secondary'}
              onChange={updateButtonType}
              label="Secondary"
            />
          </div>
          <div id="label-icon-config">
            <TextInput label="Button Label" onChange={(e) => setButtonLabel(e.target.value)} />
            <div id="icon-config-container">
              <TextLabel value="Custom Icon" />
              <div id="icon-config">{iconArray()}</div>
            </div>
          </div>
          <div id="size-container">
            <TextLabel value="Size" />
            <TextInput label="Width" onBlur={(e) => updateButtonSize(e.target.value, 'width')} />
            <TextInput label="Height" onBlur={(e) => updateButtonSize(e.target.value, 'height')} />
          </div>
          <CheckBox label="Disable" checked={isDisabled} onChange={tickButtonAvailability} />
        </div>
        <div id="preview-container">
          <TextLabel value="Preview" />
          <Button
            id="demo-primary-secondary"
            type={buttonType}
            labelText={buttonLabel}
            height={buttonHeight}
            width={buttonWidth}
            onClick={() => {
              alert('button clicked');
            }}
            disabled={isDisabled}
            icon={buttonIcon.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
