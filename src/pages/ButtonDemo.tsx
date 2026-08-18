import { useState } from 'react';
import Button from '../components/Buttons/Button';
import MenuButton from '../components/Buttons/MenuButton';
import TextInput from '../components/Inputs/Text/TextInput';
import type { ButtonTypes } from '../components/Buttons/types';
import RadioButton from '../components/Buttons/RadioButton';
import CheckBox from '../components/Inputs/CheckBox';
import TextLabel from '../components/Inputs/Text/TextLabel';
import { CancelIcon, SaveIcon } from '../components/Icons';

// TO-DO: CREATE DISPLAY OF MULTIPLE BUTTON INSTEAD OF TOGGLING THEM IN BUTTON TYPE
const ButtonDemo = () => {
  const [buttonType, setButtonType] = useState<ButtonTypes>('primary');
  const [buttonHeight, setButtonHeight] = useState<string | undefined>();
  const [buttonWidth, setButtonWidth] = useState<string | undefined>();
  const [buttonLabel, setButtonLabel] = useState<string>('Demo Button');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [buttonIcon, setButtonIcon] = useState<string | undefined>(undefined);
  // const [buttonMenu, seButtonMenu] = useState<string[]>([]);
  const buttonMenu = ['Option 1', 'Option 2 is longer one', 'Option 3'];

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

  const IconArrays = [
    { component: <SaveIcon />, key: 'save' },
    { component: <CancelIcon />, key: 'cancel' },
  ];

  const selectIcon = (id: string) => {
    if (id === buttonIcon) {
      setButtonIcon(undefined);
      return;
    }
    setButtonIcon(id);
  };

  const iconArray = () => {
    const mappedIcons = IconArrays.map((item) => {
      return (
        <div
          key={item.key}
          className={buttonIcon === item.key ? 'icon-selected' : 'icon-inactive'}
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
        <div id="button-demo-customizable">
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
              <TextInput
                label="Height"
                onBlur={(e) => updateButtonSize(e.target.value, 'height')}
              />
            </div>
            <div id="menuconfig-container"></div>
            <CheckBox label="Disable" checked={isDisabled} onChange={tickButtonAvailability} />
          </div>
          <div id="preview-container">
            <TextLabel value="Customized Button Preview" />
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
              iconKey={buttonIcon}
            />
          </div>
        </div>
        <div id="button-demo-variations">
          <div>
            <TextLabel value="Buttons Display" />
            <div id="buttons-demo-container">
              <Button
                id="demo-primary-btn"
                type="primary"
                labelText="Primary Button"
                onClick={() => {
                  alert('button clicked');
                }}
                disabled={isDisabled}
              />
              <Button
                id="demo-secondary-btn"
                type="secondary"
                labelText="Secondary Button"
                onClick={() => {
                  alert('button clicked');
                }}
                disabled={isDisabled}
              />
              <Button
                id="demo-tertiary-btn"
                type="tertiary"
                labelText="Tertiary Button"
                onClick={() => {
                  alert('button clicked');
                }}
                disabled={isDisabled}
              />
              <Button
                id="demo-primary-btn"
                type="primary"
                labelText="Primary Button"
                onClick={() => {
                  alert('button clicked');
                }}
                disabled={isDisabled}
                iconKey="save"
              />
              <Button
                id="demo-secondary-btn"
                type="secondary"
                labelText="Secondary Button"
                onClick={() => {
                  alert('button clicked');
                }}
                disabled={isDisabled}
                iconKey="cancel"
              />
              <MenuButton
                id="demo-menu-primary-btn"
                type="primary"
                labelText="Menu Button"
                onClick={() => {}}
                disabled={isDisabled}
                menuItems={buttonMenu}
                onMenuItemClick={(item) => alert(`Selected: ${item}`)}
              />
              <MenuButton
                id="demo-menu-tertiary-btn"
                type="tertiary"
                labelText="Menu Button"
                onClick={() => {}}
                disabled={isDisabled}
                menuItems={buttonMenu}
                onMenuItemClick={(item) => alert(`Selected: ${item}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
