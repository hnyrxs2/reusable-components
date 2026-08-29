import { useState } from 'react';
import Button from '../components/Buttons/Button';
import TextInput from '../components/Inputs/Text/TextInput';
import type { ButtonTypes } from '../components/Buttons/types';
import RadioButton from '../components/Buttons/RadioButton';
import TextLabel from '../components/Inputs/Text/TextLabel';
import { CancelIcon, InfoIcon, PreviewIcon, SaveIcon, SettingsIcon } from '../components/Icons';
import ButtonsSection from './ButtonsSection';
import CustomHeader from '../components/Menu/Headers/CustomHeader';
import type { IconProps } from '../components/Icons/types';
import ToggleSwitch from '../components/Inputs/ToggleSwitch';
import Toast from '../components/Toast/Toast';
import CollapsibleContainer from '../components/Containers/CollapsibleContainer';
import { CollapsibleSections } from './types';

const ButtonDemo = () => {
  const [buttonType, setButtonType] = useState<ButtonTypes>('primary');
  const [buttonHeight, setButtonHeight] = useState<string | undefined>();
  const [buttonWidth, setButtonWidth] = useState<string | undefined>();
  const [buttonLabel, setButtonLabel] = useState<string>('Demo Button');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [buttonIcon, setButtonIcon] = useState<string | undefined>(undefined);
  const [toast, setToast] = useState<string | null>(null);

  const updateButtonType = (e: string) => setButtonType(e as ButtonTypes);
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

  const tickButtonAvailability = () => setIsDisabled(!isDisabled);

  const iconProps: IconProps = { height: 15, width: 15 };

  const IconArrays = [
    { component: <SaveIcon {...iconProps} ariaLabel="Save Icon" />, key: 'save' },
    { component: <CancelIcon {...iconProps} ariaLabel="Cancel Icon" />, key: 'cancel' },
    { component: <InfoIcon {...iconProps} ariaLabel="Info Icon" />, key: 'info' },
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
          tabIndex={0}
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
      <CustomHeader label="Buttons" description={headerDescription} />
      <div id="button-demo">
        <div id="button-demo-customizable">
          <div id="config-container">
            <CollapsibleContainer
              id={CollapsibleSections.ButtonConfig}
              label="Customize"
              icon={<SettingsIcon />}
              size="medium"
            >
              <div id="button-demo-config-container">
                <div id="button-demo-type-config">
                  <TextLabel value="Button type" />
                  <div id="type-buttons-container">
                    <RadioButton
                      id="button-demo-1"
                      value="primary"
                      checked={buttonType === 'primary'}
                      onSelect={updateButtonType}
                      label="Primary"
                    />
                    <RadioButton
                      id="button-demo-2"
                      value="secondary"
                      checked={buttonType === 'secondary'}
                      onSelect={updateButtonType}
                      label="Secondary"
                    />
                    <RadioButton
                      id="button-demo-3"
                      value="tertiary"
                      checked={buttonType === 'tertiary'}
                      onSelect={updateButtonType}
                      label="Tertiary"
                    />
                  </div>
                </div>
                <div id="label-icon-config">
                  <TextInput
                    label="Button Label"
                    placeholder="Demo Button"
                    onChange={(e) => setButtonLabel(e.target.value)}
                    id="demo-btn-label"
                  />
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
                      id="demo-btn-width"
                    />
                    <TextInput
                      label="Height"
                      orientation="horizontal"
                      onBlur={(e) => updateButtonSize(e.target.value, 'height')}
                      id="demo-btn-height"
                    />
                  </div>
                </div>
                <ToggleSwitch
                  label="Disable"
                  checked={isDisabled}
                  onChange={tickButtonAvailability}
                />
              </div>
            </CollapsibleContainer>
          </div>

          {/* <div id="config-container">
            <CustomHeader label="Customize" icon={<SettingsIcon />} size="medium" />
            <div id="button-demo-type-config">
              <TextLabel value="Button type" />
              <div id="type-buttons-container">
                <RadioButton
                  id="button-demo-1"
                  value="primary"
                  checked={buttonType === 'primary'}
                  onSelect={updateButtonType}
                  label="Primary"
                />
                <RadioButton
                  id="button-demo-2"
                  value="secondary"
                  checked={buttonType === 'secondary'}
                  onSelect={updateButtonType}
                  label="Secondary"
                />
                <RadioButton
                  id="button-demo-3"
                  value="tertiary"
                  checked={buttonType === 'tertiary'}
                  onSelect={updateButtonType}
                  label="Tertiary"
                />
              </div>
            </div>
            <div id="label-icon-config">
              <TextInput
                label="Button Label"
                placeholder="Demo Button"
                onChange={(e) => setButtonLabel(e.target.value)}
                id="demo-btn-label"
              />
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
                  id="demo-btn-width"
                />
                <TextInput
                  label="Height"
                  orientation="horizontal"
                  onBlur={(e) => updateButtonSize(e.target.value, 'height')}
                  id="demo-btn-height"
                />
              </div>
            </div>
            <ToggleSwitch label="Disable" checked={isDisabled} onChange={tickButtonAvailability} />
          </div> */}
          <CollapsibleContainer
            id={CollapsibleSections.ButtonPreview}
            icon={<PreviewIcon />}
            label="Customized Button Preview"
            size="medium"
          >
            <div id="preview-button-demo">
              <Toast message={toast ?? ''} isVisible={!!toast} onDismiss={() => setToast(null)} />
              <Button
                id="demo-primary-secondary"
                type={buttonType}
                labelText={buttonLabel}
                height={buttonHeight}
                width={buttonWidth}
                onClick={() => {
                  setToast(`${buttonLabel} clicked!`);
                }}
                disabled={isDisabled}
                iconKey={buttonIcon}
              />
            </div>
            <div id="button-demo-customizable-info">
              <InfoIcon {...iconProps} />
              <TextLabel value={previewDescription} />
            </div>
          </CollapsibleContainer>
        </div>
        <ButtonsSection />
      </div>
    </div>
  );
};

export default ButtonDemo;
