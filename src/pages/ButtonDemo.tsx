import { useState } from 'react';
import Button from '../components/Buttons/Button';
import TextInput from '../components/Inputs/Text/TextInput';
import type { ButtonTypes } from '../components/Buttons/types';
import RadioButton from '../components/Buttons/RadioButton';
import CheckBox from '../components/Inputs/CheckBox';
import TextLabel from '../components/Inputs/Text/TextLabel';
import { CancelIcon, PreviewIcon, SaveIcon, SettingsIcon } from '../components/Icons';
import ButtonsSection from './ButtonsSection';

// TO-DO: CREATE DISPLAY OF MULTIPLE BUTTON INSTEAD OF TOGGLING THEM IN BUTTON TYPE
const ButtonDemo = () => {
  const [buttonType, setButtonType] = useState<ButtonTypes>('primary');
  const [buttonHeight, setButtonHeight] = useState<string | undefined>();
  const [buttonWidth, setButtonWidth] = useState<string | undefined>();
  const [buttonLabel, setButtonLabel] = useState<string>('Demo Button');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [buttonIcon, setButtonIcon] = useState<string | undefined>(undefined);

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

  const headerDescription =
    'Interactive playground for exploring button variants, sizes, icons, and states.';
  const previewDescription = 'This preview reflects current selections.';

  return (
    <div id="button-demo-page">
      <div id="custom-header">
        <TextLabel value="Buttons" size="xlarge" />
        <TextLabel value={headerDescription} />
      </div>
      <div id="button-demo">
        <div id="button-demo-customizable">
          <div id="config-container">
            <div id="config-header">
              <SettingsIcon />
              <TextLabel value="Customize" size="medium" />
            </div>
            <div id="button-demo-type-config">
              <TextLabel value="Button type" />
              <div id="type-buttons-container">
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
            </div>
            <div id="label-icon-config">
              <TextInput label="Button Label" onChange={(e) => setButtonLabel(e.target.value)} />
              <div id="icon-config-container">
                <TextLabel value="Custom Icon (optional)" />
                <div id="icon-config">{iconArray()}</div>
              </div>
            </div>
            <div id="size-container">
              <TextLabel value="Size (px)" />
              <div id="size-config-wrapper">
                <TextInput
                  label="Width"
                  orientation="horizontal"
                  onBlur={(e) => updateButtonSize(e.target.value, 'width')}
                />
                <TextInput
                  label="Height"
                  orientation="horizontal"
                  onBlur={(e) => updateButtonSize(e.target.value, 'height')}
                />
              </div>
            </div>
            <CheckBox label="Disable" checked={isDisabled} onChange={tickButtonAvailability} />
          </div>
          <div id="preview-container">
            <div id="preview-header">
              <PreviewIcon />
              <TextLabel value="Customized Button Preview" size="medium" />
            </div>
            <div id="preview-button-demo">
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
            <TextLabel value={previewDescription} />
          </div>
        </div>
        <ButtonsSection />
      </div>
    </div>
  );
};

export default ButtonDemo;
